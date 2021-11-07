import { useState, useEffect } from "react";
import { getWindow } from "ssr-window";

export const updateCardOffset = (el) => {
  const cards = el.cards;
  // FIXME: realtime offsetLeft?
  for (let i = 0; i < cards.length; i += 1) {
    console.log("cards[i].offsetLeft", cards[i].offsetLeft);
    cards[i].swiperSlideOffset = cards[i].offsetLeft;
  }
};

export const updateSlidesProgress = (translate = 0, el) => {
  const params = el.params;
  const slides = el.cards;
  const rtl = el.params.rtl;

  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === "undefined") updateCardOffset(el);

  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;

  // Visible Slides
  // slides.removeClass(params.slideVisibleClass);

  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;

    console.log("slide", slide);
    console.log("slideOffset", slideOffset);
    // console.log("params.spaceBetween", params.spaceBetween);
    const slideProgress =
      (offsetCenter + 0 - slideOffset) /
      (slide.clientWidth + params.spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + slide.clientWidth;
    // FIXME: size, clientwidth are all the same ?
    const isVisible =
      (slideBefore >= 0 && slideBefore < slide.clientWidth - 1) ||
      (slideAfter > 1 && slideAfter <= slide.clientWidth) ||
      (slideBefore <= 0 && slideAfter >= slide.clientWidth);
    // FIXME: seems to deal with hiding of slides > 5 ||  < 5
    // if (isVisible) {
    //   swiper.visibleSlides.push(slide);
    //   swiper.visibleSlidesIndexes.push(i);
    //   slides.eq(i).addClass(params.slideVisibleClass);
    // }
    slide.progress = rtl ? -slideProgress : slideProgress;
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
    progress,
    isBeginning,
    isEnd,
  });

  updateSlidesProgress(translate, el);

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

function getTranslate(el, axis = "x") {
  const window = getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;

  const curStyle = getComputedStyle(el, null);

  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(",").length > 6) {
      curTransform = curTransform
        .split(", ")
        .map((a) => a.replace(",", "."))
        .join(", ");
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(
      curTransform === "none" ? "" : curTransform
    );
  } else {
    transformMatrix =
      curStyle.MozTransform ||
      curStyle.OTransform ||
      curStyle.MsTransform ||
      curStyle.msTransform ||
      curStyle.transform ||
      curStyle
        .getPropertyValue("transform")
        .replace("translate(", "matrix(1, 0, 0, 1,");
    matrix = transformMatrix.toString().split(",");
  }

  if (axis === "x") {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === "y") {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}

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
