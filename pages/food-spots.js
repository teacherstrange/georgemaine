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
const shareData = {
  title: "Food spots",
  text: "New to Amsterdam or just passing by? Grab something something to eat at any of these food spots",
  url: "georgemaine.com/food-spots",
};

export default function FoodSpots() {
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
        allowClick: true,
        activeIndex: 0,
        allowTouchMove: true,
        isBeginning: true,
        isEnd: false,
        longSwipesMs: 300,
        longSwipesRatio: 0.5,
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
  }, [cards]);

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
          {cards.map((value, i) => (
            <FoodSpotCard key={i} index={i} {...value} />
          ))}
        </div>
      </div>
      <Controls
        shuffleCollectionButtonOnClick={() => {
          setCards(getRandomResult(foodSpots, 7));
        }}
        appleMapsButtonOnClick={() =>
          (window.location =
            cards[collection.current.params.activeIndex].appleMapsUrl)
        }
        googleMapsButtonOnClick={() =>
          (window.location =
            cards[collection.current.params.activeIndex].googleMapsUrl)
        }
        sharePageButtonOnClick={async () => {
          try {
            await navigator.share(shareData);
          } catch (err) {}
        }}
      />
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

const ShuffleIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M16.1384 7.65524V6.51643C16.1384 6.23063 16.3315 6 16.571 6C16.6438 6 16.7156 6.02207 16.7796 6.064L19.7755 8.03043C19.9852 8.16836 20.0613 8.48176 19.9466 8.73115C19.91 8.81397 19.8507 8.88474 19.7755 8.93529L16.7796 10.9017C16.5699 11.0397 16.3073 10.9481 16.1914 10.6987C16.1561 10.6203 16.138 10.5353 16.1384 10.4493V9.31048H15.7224C15.2815 9.31117 14.846 9.40764 14.4461 9.59322C14.0462 9.7788 13.6914 10.0491 13.4062 10.3853L11.9805 12.0692L13.4062 13.7531C13.6914 14.0894 14.0462 14.3596 14.4461 14.5452C14.846 14.7308 15.2815 14.8273 15.7224 14.8279H16.1384V13.6891C16.1384 13.4033 16.3315 13.1727 16.571 13.1727C16.6438 13.1727 16.7156 13.1948 16.7796 13.2367L19.7755 15.2031C19.9852 15.3411 20.0613 15.6545 19.9466 15.9039C19.91 15.9867 19.8507 16.0574 19.7755 16.108L16.7796 18.0744C16.5699 18.2124 16.3073 18.1208 16.1914 17.8714C16.1561 17.793 16.138 17.708 16.1384 17.622V16.4832H15.7224C15.0406 16.484 14.3668 16.3358 13.7483 16.0489C13.1297 15.762 12.5814 15.3434 12.1416 14.8224L10.8968 13.3504L9.65099 14.8224C9.2105 15.3426 8.66199 15.7607 8.04361 16.0475C7.42523 16.3343 6.75181 16.483 6.07015 16.4832H4.82762C4.60812 16.4832 4.39761 16.396 4.2424 16.2408C4.0872 16.0856 4 15.8751 4 15.6556C4 15.4361 4.0872 15.2256 4.2424 15.0704C4.39761 14.9151 4.60812 14.8279 4.82762 14.8279H6.07015C6.51129 14.8278 6.9471 14.7316 7.34728 14.5459C7.74747 14.3603 8.10243 14.0898 8.38749 13.7531L9.8121 12.0692L8.38749 10.3853C8.10243 10.0486 7.74747 9.77809 7.34728 9.59248C6.9471 9.40687 6.51129 9.31064 6.07015 9.31048H4.82762C4.60812 9.31048 4.39761 9.22328 4.2424 9.06808C4.0872 8.91287 4 8.70236 4 8.48286C4 8.26336 4.0872 8.05285 4.2424 7.89764C4.39761 7.74244 4.60812 7.65524 4.82762 7.65524H6.07015C6.75179 7.65555 7.42519 7.80427 8.04356 8.09106C8.66193 8.37786 9.21045 8.79585 9.65099 9.316L10.8968 10.7881L12.1416 9.316C12.5824 8.79613 13.1309 8.37834 13.7492 8.09157C14.3676 7.8048 15.0408 7.65592 15.7224 7.65524H16.1384V7.65524Z'
      fill='var(--text-dark)'
    />
  </svg>
);

const AppleIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M18.1093 8.45432C18.016 8.52691 16.3776 9.4498 16.3776 11.5029C16.3776 13.8775 18.4618 14.7175 18.5241 14.7382C18.5137 14.79 18.1923 15.8892 17.4249 17.009C16.7406 17.9942 16.025 18.9792 14.9362 18.9792C13.8475 18.9792 13.5675 18.3467 12.3127 18.3467C11.0892 18.3467 10.6536 19 9.65813 19C8.66265 19 7.96787 18.0875 7.16948 16.9676C6.24659 15.6506 5.5 13.6078 5.5 11.6688C5.5 8.55793 7.52209 6.90914 9.51295 6.90914C10.5707 6.90914 11.452 7.60392 12.1157 7.60392C12.7482 7.60392 13.7333 6.86767 14.9361 6.86767C15.3925 6.86777 17.0309 6.90934 18.1093 8.45432V8.45432ZM14.366 5.5509C14.8636 4.95984 15.2163 4.14066 15.2163 3.32149C15.2163 3.20743 15.2059 3.09337 15.1851 3C14.3763 3.03112 13.4119 3.53926 12.8312 4.21325C12.375 4.73173 11.9498 5.5509 11.9498 6.38052C11.9498 6.50492 11.9706 6.62942 11.9809 6.67088C12.0327 6.68123 12.1158 6.69167 12.1987 6.69167C12.9246 6.69157 13.837 6.20422 14.366 5.5509V5.5509Z'
      fill='var(--text-dark)'
    />
  </svg>
);
const GoogleIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.1835 8.82084C14.4544 8.12667 13.5327 7.77083 12.5002 7.77083C10.6744 7.77083 9.12852 9.00167 8.57435 10.6642L8.57417 10.664V10.6642C8.43417 11.0842 8.3525 11.5334 8.3525 12C8.3525 12.4667 8.42833 12.9158 8.57416 13.3358H8.57435C9.12852 14.9983 10.6744 16.2292 12.5002 16.2292C13.4451 16.2292 14.2442 15.9726 14.8742 15.5526V15.5525C15.6092 15.0567 16.105 14.3275 16.2742 13.4642H12.5V10.8333H19.0917C19.1617 11.2592 19.2025 11.6967 19.2025 12.1575C19.2025 14.2866 18.4442 16.0833 17.1259 17.3024L17.126 17.3025C15.971 18.37 14.3902 19 12.5002 19C9.76435 19 7.40185 17.425 6.25269 15.1382L6.2525 15.1384C5.77417 14.1934 5.5 13.1317 5.5 12C5.5 10.8684 5.77417 9.80669 6.2525 8.86169H6.25272L6.25269 8.86167C7.40185 6.575 9.76435 5 12.5002 5C14.3902 5 15.971 5.69417 17.1785 6.82583L15.1835 8.82084Z'
      fill='var(--text-dark)'
    />
  </svg>
);

const ShareIcon = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M9.3912 8L11.9999 5.5M11.9999 5.5L14.6086 8M11.9999 5.5V13.5M5.21729 13.5V15.5C5.21729 17.1569 6.56043 18.5 8.21729 18.5H15.7825C17.4394 18.5 18.7825 17.1569 18.7825 15.5V13.5'
      stroke='var(--text-dark)'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const SharePageButton = ({ url, title, text }) => {
  const shareData = {
    title: title,
    text: text,
    url: url,
  };

  return (
    <button aria-label={"Share"}>
      <ShareIcon />
    </button>
  );
};

const Controls = ({
  shuffleCollectionButtonOnClick,
  appleMapsButtonOnClick,
  googleMapsButtonOnClick,
}) => {
  return (
    <div>
      <button onClick={shuffleCollectionButtonOnClick}>
        <ShuffleIcon />
      </button>
      <button onClick={appleMapsButtonOnClick}>
        <AppleIcon />
      </button>
      <button onClick={googleMapsButtonOnClick}>
        <GoogleIcon />
      </button>
      <button
      // onClick={async () => {
      //   try {
      //     await navigator.share(shareData);
      //   } catch (err) {}
      // }}
      >
        <ShareIcon />
      </button>

      <style jsx>{`
        div {
          border-radius: 3rem;
          position: absolute;
          transform: translateY(22.5rem);
          display: flex;
          background-color: var(--white);
          overflow: hidden;
        }

        @media (min-width: 126rem) {
          div {
            transform: translateY(26rem);
          }
        }

        button,
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 1.2rem;
          margin: 0;
          height: 3rem;
          background-color: var(--white);
          border: none;
          outline: none;
          transition: 200ms;
        }

        button:active,
        a:active {
          background: rgba(7, 167, 241, 0.12);
        }

        button:hover,
        a:hover {
          background: rgba(7, 167, 241, 0.06);
        }
      `}</style>
    </div>
  );
};
