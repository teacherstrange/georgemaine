import { useState, useEffect } from "react";

export const slideTo = (index = 0, el, speed) => {
  const params = el.params;
  const snapGrid = el.snapGrid;
  const activeIndex = params.activeIndex;
  const rtl = params.rtl;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;

  const skip = Math.min(el.cardsPerGroupSkip, slideIndex);

  let snapIndex = skip + Math.floor((slideIndex - skip) / el.cardsPerGroup);

  if (snapIndex >= snapGrid.length) {
    snapIndex = snapGrid.length - 1;
  }

  const translate = -snapGrid[snapIndex];

  // Update progress
  updateProgress(translate, el);

  // Normalize slideIndex
  for (let i = 0; i < snapGrid.length; i += 1) {
    const normalizedTranslate = -Math.floor(translate * 100);
    const normalizedGrid = Math.floor(snapGrid[i] * 100);
    const normalizedGridNext = Math.floor(snapGrid[i + 1] * 100);

    if (typeof snapGrid[i + 1] !== "undefined") {
      if (
        normalizedTranslate >= normalizedGrid &&
        normalizedTranslate <
          normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2
      ) {
        slideIndex = i;
      } else if (
        normalizedTranslate >= normalizedGrid &&
        normalizedTranslate < normalizedGridNext
      ) {
        slideIndex = i + 1;
      }
    } else if (normalizedTranslate >= normalizedGrid) {
      slideIndex = i;
    }
  }

  let direction;
  if (slideIndex > activeIndex) direction = "next";
  else if (slideIndex < activeIndex) direction = "prev";
  else direction = "reset";

  // Update Index
  if (
    (rtl && -translate === params.translate) ||
    (!rtl && translate === params.translate)
  ) {
    updateActiveIndex(el, slideIndex);
    setTranslate(translate, el);
    setCardEffectTranslate(el);
    return false;
  }

  if (speed === 0) {
    setTransition(0, el);
    setTranslate(translate, el);
    updateActiveIndex(el, slideIndex);
    setCardEffectTranslate(el);
  } else {
    setTransition(el.speed, el);
    setTranslate(translate, el);
    updateActiveIndex(el, slideIndex);
    setCardEffectTranslate(el);
  }

  return true;
};

export const nextTick = (callback, delay = 0) => {
  return setTimeout(callback, delay);
};

export const setTransition = (duration, el) => {
  const cards = el.cards;

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    const caption = card.querySelector(".caption");
    card.style.transitionDuration = `${duration}ms`;
    caption.style.transitionDuration = `${duration}ms`;
  }
};

export const updateActiveIndex = (el, newActiveIndex) => {
  const params = el.params;
  const translate = params.rtlTranslate ? params.translate : -params.translate;
  const snapGrid = el.snapGrid;
  let previousIndex = params.activeIndex;
  let previousSnapIndex = params.snapIndex;
  let activeIndex = newActiveIndex;
  let snapIndex;

  if (typeof activeIndex === "undefined") {
    for (let i = 0; i < snapGrid.length; i += 1) {
      if (typeof snapGrid[i + 1] !== "undefined") {
        if (
          translate >= snapGrid[i] &&
          translate < snapGrid[i + 1] - (snapGrid[i + 1] - snapGrid[i]) / 2
        ) {
          activeIndex = i;
        } else if (translate >= snapGrid[i] && translate < snapGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= snapGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
  }

  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(el.cardsPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / el.cardsPerGroup);
  }

  if (snapIndex >= snapGrid.length) {
    snapIndex = snapGrid.length - 1;
  }

  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      params.snapIndex = snapIndex;
    }
    return;
  }

  // Get real index
  const realIndex = parseInt(activeIndex, 10);
  Object.assign(el, {
    params: {
      ...params,
      snapIndex,
      realIndex,
      previousIndex,
      activeIndex,
    },
  });
};

export const setCardEffectTranslate = (el) => {
  const cards = el.cards;
  const startTranslate = el.touchEventsData.startTranslate;
  const currentTranslate = el.params.translate;
  const activeIndex = el.params.activeIndex;
  const isTouched = el.touchEventsData.isTouched;

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    const cardProgress = card.progress;
    let cardOverlay = card.querySelector(".cardOverlay");
    let caption = card.querySelector(".caption");
    const progress = Math.min(Math.max(cardProgress, -4), 4);

    let offset = card.cardOffset;
    let boxShadowOpacity;
    let opacity;
    let tX = -offset;
    let tY = 0;
    const tZ = -100 * Math.abs(progress);
    let scale = 1;
    let rotate = -2 * progress;

    let tXAdd = 8 - Math.abs(progress) * 0.75;

    const isSwipeToNext =
      (i === activeIndex || i === activeIndex - 1) &&
      progress > 0 &&
      progress < 1 &&
      isTouched &&
      currentTranslate < startTranslate;
    const isSwipeToPrev =
      (i === activeIndex || i === activeIndex + 1) &&
      progress < 0 &&
      progress > -1 &&
      isTouched &&
      currentTranslate > startTranslate;

    if (isSwipeToNext || isSwipeToPrev) {
      const subProgress =
        (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
      rotate += -28 * progress * subProgress;
      scale += -0.5 * subProgress;
      tXAdd += 96 * subProgress;
      tY = `${-25 * subProgress * Math.abs(progress)}%`;
    }

    if (progress < 0) {
      // next
      tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
      boxShadowOpacity = 0;
      opacity = 0;
    } else if (progress > 0) {
      // prev
      tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
      boxShadowOpacity = 0;
      opacity = 0;
    } else {
      tX = `${tX}px`;
      boxShadowOpacity = 0.09;
      opacity = 1;
    }

    const scaleString =
      progress < 0
        ? `${1 + (1 - scale) * progress}`
        : `${1 - (1 - scale) * progress}`;
    const transform = `
      translate3d(${tX}, ${tY}, ${tZ}px)
      rotateZ(${rotate}deg)
      scale(${scaleString})
    `;

    cardOverlay.style.opacity = Math.min(
      Math.max((Math.abs(progress) - 0.5) / 0.5, 0),
      1
    );
    caption.style.opacity = opacity;

    card.style.boxShadow = `0rem 1.2rem 4.2rem .6rem rgba(0, 0, 0, ${boxShadowOpacity})`;
    card.style.zIndex = -Math.abs(Math.round(cardProgress)) + cards.length;
    card.style.transform = transform;
  }
};

export const setTranslate = (translate, el) => {
  const params = el.params;
  let x = 0;
  let y = 0;
  const z = 0;
  x = translate;

  params.previousTranslate = params.translate;
  params.translate = x;

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = params.maxTranslate - params.minTranslate;
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - params.minTranslate) / translatesDiff;
  }
  if (newProgress !== params.progress) {
    updateProgress(translate, el);
  }
};

export const updateCardOffset = (el) => {
  const cards = el.cards;
  // FIXME: realtime offsetLeft?
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].cardOffset = cards[i].offsetLeft;
  }
};

export const updateCardsProgress = (translate = 0, el) => {
  const params = el.params;
  const cards = el.cards;
  const rtl = el.params.rtl;

  if (cards.length === 0) return;
  if (typeof cards[0].cardOffset === "undefined") updateCardOffset(el);

  let offsetCenter = -translate;

  if (rtl) offsetCenter = translate;

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    let cardOffset = card.cardOffset;

    const cardProgress = (offsetCenter + 0 - cardOffset) / card.clientWidth;

    // FIXME: size, clientwidth are all the same ?
    card.progress = rtl ? -cardProgress : cardProgress;
  }
};

export const updateProgress = (translate, el) => {
  const params = el.params;
  let progress = params.progress;
  let isBeginning = params.isBeginning;
  let isEnd = params.isEnd;
  const minTranslate = params.minTranslate;
  const maxTranslate = params.maxTranslate;

  if (typeof translate === "undefined") {
    const multiplier = params.rtlTranslate ? -1 : 1;
    translate = (el && params.translate && params.translate * multiplier) || 0;
  }

  const translatesDiff = maxTranslate - minTranslate;

  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - minTranslate) / translatesDiff;
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }

  Object.assign(el, {
    params: {
      ...params,
      progress,
      isBeginning,
      isEnd,
    },
  });

  updateCardsProgress(translate, el);
};

export const now = () => {
  return Date.now();
};

export const updateCardOffsets = (foodSpots, cards) => {
  for (let i = 0, n = foodSpots.length; i < n; ++i) {
    cards[i].cardOffset = foodSpots[i].offsetLeft;
  }
};

export const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const objRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    observer.observe(objRef);

    return () => {
      observer.unobserve(objRef);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
};

export const slideInOnScroll = (element, container) => {
  if (!element) {
    return;
  }

  const height = window.innerHeight * 0.2;
  const offsetTop = window.innerHeight * 0.85;
  const scrollPosition = container.scrollTop;
  const scrollDistance =
    container.scrollTop + element.getBoundingClientRect().top - offsetTop;

  let progress = 0;
  let y = 5;
  let opacity = 0;

  if (scrollPosition > scrollDistance) {
    progress = (scrollPosition - scrollDistance) / height;

    y = transitionForProgressInRange(clampedProgress(progress), 5, 0);
    opacity = transitionForProgressInRange(clampedProgress(progress), 0, 1);
  }

  if (progress >= 0) {
    element.style.opacity = opacity;
    element.style.webkitTransform = `translate3d(0rem, ${y}rem, 0rem)`;
    element.style.MozTransform = `translate3d(0rem, ${y}rem, 0rem)`;
  }
};

export const slideOutOnScroll = (element, container) => {
  if (!element) {
    return;
  }

  const height = window.innerHeight - 400;
  const offsetTop = window.innerHeight;
  const scrollPosition = container.scrollTop;
  const scrollDistance =
    container.scrollTop + element.getBoundingClientRect().top - offsetTop;

  let progress = 0;
  let y = 20;
  let opacity = 0;

  if (scrollPosition > scrollDistance) {
    progress = (scrollPosition - scrollDistance) / height;

    y = transitionForProgressInRange(clampedProgress(progress), 20, 0);
    opacity = transitionForProgressInRange(clampedProgress(progress), 0, 1);
  }

  if (progress >= 0) {
    element.style.opacity = opacity;
    element.style.webkitTransform = `translate3d(0rem, ${-y}rem, 0rem)`;
    element.style.MozTransform = `translate3d(0rem, ${-y}rem, 0rem)`;
  }
};

export const clampedProgress = (progress) => {
  if (progress < 0) progress = 0;
  else if (progress > 1) progress = 1;

  return progress;
};

export const clampedIndex = (index) => {
  if (index < -4) index = -4;
  else if (index > 4) index = 4;

  return index;
};

export const getRandomResult = (arr, n) => {
  let randomResults = new Array(n),
    length = arr.length,
    taken = new Array(length);
  if (n > length)
    throw new RangeError("getRandomResult: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * length);
    randomResults[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --length in taken ? taken[length] : length;
  }
  return randomResults;
};

export const transitionForProgressInRange = (
  progress,
  startValue,
  endValue
) => {
  return startValue + progress * (endValue - startValue);
};
export const getStackTranslate = (el) => {
  const params = el.params;
  const translate = el.params.translate;

  return params.rtlTranslate ? -translate : translate;
};
export const onTouchEnd = (event, el) => {
  const data = el.touchEventsData;
  const params = el.params;
  const rtl = params.rtl;
  const snapGrid = el.snapGrid;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  data.allowTouchCallbacks = false;

  if (!data.isTouched) {
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Time diff
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // FIXME: Tap, doubleTap, Click?
  data.lastClickTime = now();
  nextTick(() => {
    if (!el.destroyed) params.allowClick = true;
  });

  if (
    !data.isTouched ||
    !data.isMoved ||
    !params.swipeDirection ||
    el.touches.diff === 0 ||
    data.currentTranslate === data.startTranslate
  ) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;

  let currentPos;
  currentPos = rtl ? params.translate : -params.translate;

  // Find current card
  let stopIndex = 0;
  let groupSize = el.cardSizesGrid[0];
  for (
    let i = 0;
    i < snapGrid.length;
    i += i < el.cardsPerGroupSkip ? 1 : el.cardsPerGroup
  ) {
    const increment = i < el.cardsPerGroupSkip - 1 ? 1 : el.cardsPerGroup;
    if (typeof snapGrid[i + increment] !== "undefined") {
      if (currentPos >= snapGrid[i] && currentPos < snapGrid[i + increment]) {
        stopIndex = i;
        groupSize = snapGrid[i + increment] - snapGrid[i];
      }
    } else if (currentPos >= snapGrid[i]) {
      stopIndex = i;
      groupSize = snapGrid[snapGrid.length - 1] - snapGrid[snapGrid.length - 2];
    }
  }

  // Find current slide size
  const ratio = (currentPos - snapGrid[stopIndex]) / groupSize;
  const increment = stopIndex < el.cardsPerGroupSkip - 1 ? 1 : el.cardsPerGroup;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (params.swipeDirection === "next") {
      if (ratio >= params.longSwipesRatio) {
        slideTo(stopIndex + increment, el, el.speed);
      } else {
        slideTo(stopIndex, el, el.speed);
      }
    }
    if (params.swipeDirection === "prev") {
      if (ratio > 1 - params.longSwipesRatio) {
        slideTo(stopIndex + increment, el, el.speed);
      } else {
        slideTo(stopIndex, el, el.speed);
      }
    }
  } else {
    // Short swipes
    const isNavButtonTarget =
      el.navigation &&
      (e.target === el.navigation.nextEl || e.target === el.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (params.swipeDirection === "next") {
        slideTo(stopIndex + increment, el, el.speed);
      }
      if (params.swipeDirection === "prev") {
        slideTo(stopIndex, el, el.speed);
      }
    } else if (e.target === el.navigation.nextEl) {
      slideTo(stopIndex + increment, el, el.speed);
    } else {
      slideTo(stopIndex, el, el.speed);
    }
  }
};
export const onTouchMove = (event, el) => {
  const data = el.touchEventsData;
  const touches = el.touches;
  const params = el.params;
  const methods = el.methods;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;

  if (!data.isTouched) {
    return;
  }

  const targetTouch =
    e.type === "touchmove" &&
    e.targetTouches &&
    (e.targetTouches[0] || e.changedTouches[0]);

  const pageX = e.type === "touchmove" ? targetTouch.pageX : e.pageX;
  const pageY = e.type === "touchmove" ? targetTouch.pageY : e.pageY;

  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }

  touches.currentX = pageX;
  touches.currentY = pageY;

  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;

  if (
    params.threshold &&
    Math.sqrt(diffX ** 2 + diffY ** 2) < params.threshold
  ) {
    return;
  }

  if (typeof data.isScrolling === "undefined") {
    let touchAngle;

    if (touches.currentY === touches.startY) {
      data.isScrolling = false;
    } else {
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle =
          (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
        data.isScrolling = true
          ? touchAngle > params.touchAngle
          : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (typeof data.startMoving === "undefined") {
    if (
      touches.currentX !== touches.startX ||
      touches.currentY !== touches.startY
    ) {
      data.startMoving = true;
    }
  }
  if (!data.startMoving) {
    return;
  }

  params.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    data.startTranslate = methods.getStackTranslate(el);
    setTransition(0, el);
    data.allowMomentumBounce = false;
  }
  data.isMoved = true;

  let diff = diffX;

  touches.diff = diff;

  if (params.rtl) diff = -diff;

  params.swipeDirection = diff > 0 ? "prev" : "next";

  data.currentTranslate = diff + data.startTranslate;

  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;

  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }

  if (diff > 0 && data.currentTranslate > params.minTranslate) {
    disableParentSwiper = false;
    if (params.resistance)
      data.currentTranslate =
        params.minTranslate -
        1 +
        (-params.minTranslate + data.startTranslate + diff) ** resistanceRatio;
  } else if (diff < 0 && data.currentTranslate < params.maxTranslate) {
    disableParentSwiper = false;
    if (params.resistance)
      data.currentTranslate =
        params.maxTranslate +
        1 -
        (params.maxTranslate - data.startTranslate - diff) ** resistanceRatio;
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = touches.currentX - touches.startX;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  updateActiveIndex(el);
  updateProgress(data.currentTranslate, el);
  setTranslate(data.currentTranslate, el);
  setCardEffectTranslate(el);
};

export const onTouchStart = (event, el) => {
  const data = el.touchEventsData;
  const touches = el.touches;
  const params = el.params;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetEl = e.target;
  data.isTouchEvent = e.type === "touchstart";

  touches.currentX =
    e.type === "touchstart" ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY =
    e.type === "touchstart" ? e.targetTouches[0].pageY : e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  data.touchStartTime = now();
  Object.assign(el, {
    touchEventsData: {
      ...data,
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined,
    },
  });

  touches.startX = startX;
  touches.startY = startY;

  params.allowClick = true;
  params.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  if (e.type !== "touchstart") {
    let preventDefault = true;

    const shouldPreventDefault =
      preventDefault &&
      params.allowTouchMove &&
      params.touchStartPreventDefault;
    if (
      (params.touchStartForcePreventDefault || shouldPreventDefault) &&
      !targetEl.isContentEditable
    ) {
      e.preventDefault();
    }
  }
};
