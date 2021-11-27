import GlobalNav from "../components/GlobalNav";
import Head from "../components/Head";
import {
  FoodSpotCard,
  foodSpotCatalog,
  initialFoodspotCatalog,
} from "../components/FoodSpotCard";
import { useEffect, useState, useRef } from "react";
import {
  getRandomResult,
  onTouchEnd,
  now,
  onTouchMove,
  onTouchStart,
  slideTo,
  getStackTranslate,
} from "../components/utils";
import { FoodSpotControls } from "../components/FoodSpotControls";

const shareData = {
  title: "Food spots",
  text: "In Amsterdam and not sure where to eat? Try these handpicked foodpots",
  url: "georgemaine.com/food-spots",
};

export default function FoodSpots() {
  const collection = useRef();
  const [foodspotCards, setfoodspotCards] = useState(initialFoodspotCatalog);
  const setRandomFoodSpotCards = () => {
    slideTo(0, collection.current, 0);
    setfoodspotCards(getRandomResult(foodSpotCatalog, 7));
  };

  useEffect(() => {
    const stack = document.querySelector(".foodspot-stack");
    const stackChildren = [...stack.children];
    const snapGrid = [];
    const cardSizesGrid = [];

    stackChildren.forEach((element) => {
      snapGrid.push(element.offsetLeft === 0 ? -0 : element.offsetLeft);
      cardSizesGrid.push(element.clientWidth);
    });

    collection.current = {
      cards: stack.children,
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

    stack.addEventListener("touchstart", function (event) {
      onTouchStart(event, collection.current);
    });
    stack.addEventListener("mousedown", function (event) {
      onTouchStart(event, collection.current);
    });
    stack.addEventListener("mousemove", function (event) {
      onTouchMove(event, collection.current);
    });
    stack.addEventListener("touchmove", function (event) {
      onTouchMove(event, collection.current);
    });
    stack.addEventListener("mouseup", function (event) {
      onTouchEnd(event, collection.current);
    });
    stack.addEventListener("touchend", function (event) {
      onTouchEnd(event, collection.current);
    });
    stack.addEventListener("touchcancel", function (event) {
      onTouchEnd(event, collection.current);
    });
    stack.addEventListener("mouseleave", function (event) {
      onTouchEnd(event, collection.current);
    });
    return () => {
      stack.removeEventListener("mousedown", function (event) {
        onTouchStart(event, collection.current);
      });
      stack.removeEventListener("touchstart", function (event) {
        onTouchStart(event, collection.current);
      });
      stack.removeEventListener("mousemove", function (event) {
        onTouchMove(event, collection.current);
      });
      stack.removeEventListener("touchmove", function (event) {
        onTouchMove(event, collection.current);
      });
      stack.removeEventListener("mouseup", function (event) {
        onTouchEnd(event, collection.current);
      });
      stack.removeEventListener("touchend", function (event) {
        onTouchEnd(event, collection.current);
      });
      stack.removeEventListener("touchcancel", function (event) {
        onTouchEnd(event, collection.current);
      });
      stack.removeEventListener("mouseleave", function (event) {
        onTouchEnd(event, collection.current);
      });
    };
  }, []);

  return (
    <main>
      <Head />
      <GlobalNav />
      <div className='foodspot-collection'>
        <div className='foodspot-stack'>
          {foodspotCards.map((value, i) => {
            return <FoodSpotCard key={i} {...value} />;
          })}
        </div>
      </div>
      <FoodSpotControls
        shuffleButtonOnClick={() => setRandomFoodSpotCards()}
        appleMapsButtonOnClick={() =>
          (window.location =
            foodspotCards[collection.current.params.activeIndex].appleMapsUrl)
        }
        googleMapsButtonOnClick={() =>
          (window.location =
            foodspotCards[collection.current.params.activeIndex].googleMapsUrl)
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
        .foodspot-stack {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          display: flex;
          transform-style: preserve-3d;
        }
        .foodspot-collection {
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
          .foodspot-collection {
            width: 30.6rem;
            height: 43rem;
          }
        }
      `}</style>
    </main>
  );
}
