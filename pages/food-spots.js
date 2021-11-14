import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { FoodSpotCard, foodSpots } from "../components/FoodSpotCard";
import { useEffect, useState, useRef } from "react";
import {
  getRandomResult,
  nextTick,
  now,
  setCardEffectTranslate,
  setTranslate,
  slideTo,
  updateProgress,
  updateActiveIndex,
  setTransition,
  getStackTranslate,
} from "../components/utils";

const randomFoodSpots = getRandomResult(foodSpots, 7);

export default function FoodSpots() {
  const stackRef = useRef();
  const collection = useRef();
  const [cards, setCards] = useState(randomFoodSpots);

  useEffect(() => {
    const stackWrapper = document.querySelector(".stack");
    const stackChildren = [...stackWrapper.children];
    const snapGrid = [];
    const cardSizesGrid = [];

    stackChildren.forEach((element) => {
      snapGrid.push(element.offsetLeft === 0 ? -0 : element.offsetLeft);
      cardSizesGrid.push(element.clientWidth);
    });

    collection.current = {
      cards: stackWrapper.children,
      cardSizesGrid: cardSizesGrid,
      snapGrid: snapGrid,
      cardsPerGroup: 1,
      cardsPerGroupSkip: 0,
      cardsPerGroupAuto: false,
      methods: { getStackTranslate },
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
        minTranslate: -snapGrid[0],
        maxTranslate: -snapGrid[snapGrid.length - 1],
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
        lastClickTime: now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined,
      },
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
      },
    };
    slideTo(0, collection.current, 0);
  }, []);

  useEffect(() => {
    const stackWrapper = document.querySelector(".stack");

    stackWrapper.addEventListener("touchstart", function (event) {
      onTouchStart(event, collection.current);
    });
    stackWrapper.addEventListener("mousedown", function (event) {
      onTouchStart(event, collection.current);
    });
    stackWrapper.addEventListener("mousemove", function (event) {
      onTouchMove(event, collection.current);
    });
    stackWrapper.addEventListener("touchmove", function (event) {
      onTouchMove(event, collection.current);
    });
    stackWrapper.addEventListener("mouseup", function (event) {
      onTouchEnd(event, collection.current);
    });
    stackWrapper.addEventListener("touchend", function (event) {
      onTouchEnd(event, collection.current);
    });
    stackWrapper.addEventListener("touchcancel", function (event) {
      onTouchEnd(event, collection.current);
    });
    stackWrapper.addEventListener("mouseleave", function (event) {
      onTouchEnd(event, collection.current);
    });
    return () => {
      stackWrapper.removeEventListener("mousedown", function (event) {
        onTouchStart(event, collection.current);
      });
      stackWrapper.removeEventListener("touchstart", function (event) {
        onTouchStart(event, collection.current);
      });
      stackWrapper.removeEventListener("mousemove", function (event) {
        onTouchMove(event, collection.current);
      });
      stackWrapper.removeEventListener("touchmove", function (event) {
        onTouchMove(event, collection.current);
      });
      stackWrapper.removeEventListener("mouseup", function (event) {
        onTouchEnd(event, collection.current);
      });
      stackWrapper.removeEventListener("touchend", function (event) {
        onTouchEnd(event, collection.current);
      });
      stackWrapper.removeEventListener("touchcancel", function (event) {
        onTouchEnd(event, collection.current);
      });
      stackWrapper.removeEventListener("mouseleave", function (event) {
        onTouchEnd(event, collection.current);
      });
    };
  }, []);

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
          bottom: "12vh",
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
          setCards(getRandomResult(foodSpots, 7));
        }}
      >
        Shuffle
      </button>
      <style jsx>{`
        main {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
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

        @media (min-width: 126rem) {
          .collection {
            width: 30.6rem;
            height: 43rem;
          }
        }
      `}</style>
    </main>
  );
}

const onTouchEnd = (event, el) => {
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

const onTouchMove = (event, el) => {
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

const onTouchStart = (event, el) => {
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
