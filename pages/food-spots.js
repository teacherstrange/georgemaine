import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import { FoodSpotCard, foodSpots } from "../components/FoodSpotCard";
import { useEffect, useState } from "react";
import { getRandomResult, now } from "../components/utils";
import { getWindow, getDocument } from "ssr-window";

const randomFoodSpots = getRandomResult(foodSpots, 2);

export default function FoodSpots() {
  const [cards, setCards] = useState(randomFoodSpots);
  const [stack, setStack] = useState({
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
      threshold: 0,
      touchStartPreventDefault: true,
      allowClick: true,
      swipeDirection: undefined,
      allowTouchMove: true,
    },
    touches: {
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0,
      diff: 0,
    },
  });

  useEffect(() => {
    const stackWrapper = document.querySelector(".stack");
    const foodSpots = document.querySelectorAll(".foodSpot");
    const captions = document.querySelectorAll(".caption");

    stackWrapper.addEventListener("mousedown", function (event) {
      onTouchStart(event, stack);
    });
    return () => {
      stackWrapper.removeEventListener("mousedown", function (event) {
        onTouchStart(event, stack);
      });
    };
  }, [stack]);

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

const onTouchStart = (event, el) => {
  const document = getDocument();
  const window = getWindow();
  const data = el.touchEventsData;
  const touches = el.touches;
  const params = el.params;

  let e = event;
  if (e.originalEvent) {
    e = e.originalEvent;
  }
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
