import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { FoodSpotCard, foodSpots } from "../components/FoodSpotCard";
import { useEffect, useState } from "react";
import {
  getRandomResult,
  now,
  setCardEffectTranslate,
  setTranslate,
  updateProgress,
  updateActiveIndex,
  setTransition,
  onTouchEnd,
} from "../components/utils";
import { getWindow, getDocument } from "ssr-window";
import translate from "../components/translate/index";
import getSwiperTranslate from "../components/translate/getTranslate";
import { useRef } from "react";

const randomFoodSpots = getRandomResult(foodSpots, 2);

const width = 256;

export default function FoodSpots() {
  const stackRef = useRef();
  const [cards, setCards] = useState(randomFoodSpots);
  const [stack, setStack] = useState({
    cards: cards,
    cardsPerGroup: 1,
    cardsPerGroupSkip: 0,
    cardsPerGroupAuto: false,
    speed: 300,
    touchEventsData: {
      isTouched: undefined,
      isMoved: undefined,
      allowTouchCallbacks: undefined,
      touchStartTime: undefined,
      isScrolling: undefined,
      currentTranslate: undefined,
      startTranslate: undefined,
      allowThresholdMove: undefined,
      // Form elements to match
      // focusableElements: swiper.params.focusableElements,
      // Last click time
      lastClickTime: now(),
      clickTimeout: undefined,
      // Velocities
      velocities: [],
      allowMomentumBounce: undefined,
      isTouchEvent: undefined,
      startMoving: undefined,
    },
    params: {
      animating: false,
      allowClick: true,
      activeIndex: 0,
      allowSlidePrev: true,
      allowSlideNext: true,
      allowTouchMove: true,
      isBeginning: true,
      isEnd: false,
      longSwipesMs: 300,
      longSwipesRatio: 0.5,
      shortSwipes: true,
      minTranslate: -0,
      maxTranslate: -width * cards.length - 1,
      nested: false,
      previousTranslate: 0,
      progress: 0,
      realIndex: 0,
      snapIndex: undefined,
      rtl: false,
      rtlTranslate: false,
      translate: 0,
      swipeDirection: undefined,
      resistance: true,
      resistanceRatio: 0.85,
      threshold: 0,
      touchAngle: 45,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      velocity: 0,
      virtualTranslate: true,
    },
    touches: {
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      diff: 0,
    },
    methods: { getSwiperTranslate },
  });

  useEffect(() => {
    const stackWrapper = document.querySelector(".stack");
    const stackChildren = [...stackWrapper.children];
    const snapGrid = [];
    const cardSizesGrid = [];

    stackChildren.forEach((element) => {
      snapGrid.push(element.offsetLeft);
      cardSizesGrid.push(element.clientWidth);
    });

    Object.assign(stack, {
      cards: stackWrapper.children,
      cardSizesGrid: cardSizesGrid,
      snapGrid: snapGrid,
    });

    stackWrapper.addEventListener("mousedown", function (event) {
      onTouchStart(event, stack);
    });
    stackWrapper.addEventListener("mousemove", function (event) {
      onTouchMove(event, stack);
    });
    stackWrapper.addEventListener("mouseup", function (event) {
      onTouchEnd(event, stack);
    });
    return () => {
      stackWrapper.removeEventListener("mousedown", function (event) {
        onTouchStart(event, stack);
      });
      stackWrapper.removeEventListener("mousemove", function (event) {
        onTouchMove(event, stack);
      });
      stackWrapper.removeEventListener("mouseup", function (event) {
        onTouchEnd(event, stack);
      });
    };
  }, [stack]);

  return (
    <main>
      <Head />
      <GlobalNav />
      <div className='collection'>
        <div
          ref={stackRef}
          className='stack'
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            zIndex: 1,
            display: "flex",
            transformStyle: "preserve-3d",
          }}
        >
          {cards.map((value, i) => {
            return (
              <FoodSpotCard
                key={i}
                index={i}
                name={value.name}
                color={value.color}
              />
            );
          })}
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          bottom: "15vh",
          height: "3.6rem",
          font: "inherit",
          padding: ".6rem 1.8rem",
          borderRadius: "30rem",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
          width: "fit-content",
        }}
        onClick={() => {
          setCards(getRandomResult(foodSpots, 9));
        }}
      >
        Shuffle
      </button>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .collection {
          overflow: visible;
          perspective: 120rem;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
          height: 36rem;
          width: 25.6rem;
          transform-style: preserve-3d;
        }
      `}</style>
    </main>
  );
}

const onTouchMove = (event, el) => {
  const document = getDocument();
  const window = getWindow();
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
    e.type === "touchmove" && e.targetTouches && e.changedTouches;

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
    data.startTranslate = methods.getSwiperTranslate("x", el);
    setTransition(0, el);
    // if (swiper.animating) {
    //   swiper.$wrapperEl.trigger("webkitTransitionEnd transitionend");
    // }
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

  // Directions locks
  console.log("el", el);
  console.log("params.swipeDirection", params.swipeDirection);

  // if (
  //   !params.allowSlideNext &&
  //   params.swipeDirection === "next" &&
  //   data.currentTranslate < data.startTranslate
  // ) {
  //   console.log("triggered");
  //   data.currentTranslate = data.startTranslate;
  // }

  // if (
  //   !params.allowSlidePrev &&
  //   params.swipeDirection === "prev" &&
  //   data.currentTranslate > data.startTranslate
  // ) {
  //   data.currentTranslate = data.startTranslate;
  // }

  // if (!params.allowSlidePrev && !params.allowSlideNext) {

  //   data.currentTranslate = data.startTranslate;
  // }

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
  setTransition(300, el);
  setCardEffectTranslate(el);
};

const onTouchStart = (event, el) => {
  const document = getDocument();
  const window = getWindow();
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

  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined,
  });

  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
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
