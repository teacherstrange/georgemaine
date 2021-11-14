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

  // // Update progress
  updateProgress(translate, el);

  // // Normalize slideIndex
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

  // // Update Index
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

    if (!params.animating) {
      params.animating = true;
    }
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
    card.style.transitionDuration = `${duration}ms`;
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

    const progress = Math.min(Math.max(cardProgress, -4), 4);

    let offset = card.cardOffset;

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
    } else if (progress > 0) {
      // prev
      tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
    } else {
      tX = `${tX}px`;
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

    // FIXME: shadows
    // if (params.slideShadows) {
    //   // Set shadows
    //   let $shadowEl = $slideEl.find(".swiper-slide-shadow");
    //   if ($shadowEl.length === 0) {
    //     $shadowEl = createShadow(params, $slideEl);
    //   }
    //   if ($shadowEl.length)
    //     $shadowEl[0].style.opacity = Math.min(
    //       Math.max((Math.abs(progress) - 0.5) / 0.5, 0),
    //       1
    //     );
    // }

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

  // Visible cards
  // cards.removeClass(params.slideVisibleClass);

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    let cardOffset = card.cardOffset;

    const cardProgress = (offsetCenter + 0 - cardOffset) / card.clientWidth;

    const cardBefore = -(offsetCenter - cardOffset);
    const cardAfter = cardBefore + card.clientWidth;
    // FIXME: size, clientwidth are all the same ?
    const isVisible =
      (cardBefore >= 0 && cardBefore < card.clientWidth - 1) ||
      (cardAfter > 1 && cardAfter <= card.clientWidth) ||
      (cardBefore <= 0 && cardAfter >= card.clientWidth);
    // FIXME: seems to deal with hiding of cards > 5 ||  < 5
    // if (isVisible) {
    //   swiper.visiblecards.push(card);
    //   swiper.visiblecardsIndexes.push(i);
    //   cards.eq(i).addClass(params.cardVisibleClass);
    // }

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

  const wasBeginning = isBeginning;
  const wasEnd = isEnd;

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

  // if (isBeginning && !wasBeginning) {
  //   swiper.emit("reachBeginning toEdge");
  // }
  // if (isEnd && !wasEnd) {
  //   swiper.emit("reachEnd toEdge");
  // }
  // if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
  //   swiper.emit("fromEdge");
  // }

  // swiper.emit("progress", progress);
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
