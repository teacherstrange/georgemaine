import { Nav } from "../components/Nav";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Manifesto, Year } from "../components/Typography";
const NavItems = [
  { name: "Home", id: "" },
  { name: "Work", id: "work" },
  { name: "Icons", id: "icons" },
];

function Work() {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Nav NavItems={NavItems} />
      <div
        style={{
          margin: "102px auto 0",
        }}
      >
        <Year>2020</Year>
      </div>
      <section
        style={{
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 1152,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 150,
          }}
        >
          <div
            style={{
              width: 320,
            }}
          >
            <ParallaxElement>
              <figure
                style={{
                  backgroundImage: "url(images/mollie-ios.png)",
                  width: 460,
                  height: 896,
                  backgroundSize: "460px, 896px",
                  backgroundRepeat: "no-repeat",
                  padding: 0,
                  margin: 0,
                  float: "right",
                }}
              />
            </ParallaxElement>
          </div>
          <motion.div
            style={{
              width: 320,
              margin: "auto auto 150px",
              maxWidth: 320,
              // left: 0,
              // right: 0,

              // position: "absolute",
            }}
          >
            <Manifesto
              style={{
                marginTop: 180,
              }}
            >
              <strong>Designing Mollie for Mobile.</strong> Think about what
              it’s like to do work on your phone. Your attention is fragmented.
              Typing is a chore. Often times, you just want to put your phone
              aside and get back to real life whether that’s sitting down to
              dinner with your spouse or giving directions to your Uber driver.
              <br />
              <br /> But what if we helped you get back to real life? What if
              working from your phone was a spot of joy? What if, in those brief
              moments of transit, you could collaborate rapidly and effectively
              with your team? <br />
              <br />
              During the second half of 2017, I led the redesign of Dropbox’s
              mobile apps to empower rapid work for collaborators on the go.
              Here are just a few of the changes we shipped.
            </Manifesto>
          </motion.div>
          <div
            style={{
              width: 320,
            }}
          >
            <ParallaxAndroid>
              <figure
                style={{
                  backgroundImage: "url(images/mollie-android.png)",
                  width: 487,
                  height: 1020,
                  backgroundSize: "487px, 1020px",
                  backgroundRepeat: "no-repeat",
                  padding: 0,
                  margin: 0,
                  top: 72,
                  position: "absolute",
                  left: 0,
                }}
              />
            </ParallaxAndroid>
          </div>
        </div>
      </section>
      <ModulateOpacity>
        <Year>2019</Year>
      </ModulateOpacity>
    </div>
  );
}

function ParallaxMobileCopy({ children }) {
  /* Constants */
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const springValue = { stiffness: 400, damping: 30 };

  /* UseSpring MotionValues */
  const y = useSpring(
    useTransform(
      scrollY,
      [elementTop - elementHeight, elementHeight * 0.66],
      [-40, -164]
    ),
    springValue
  );

  /* Get element properties */
  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
    setElementHeight(window.innerHeight);
  }, [ref]);

  return (
    <div>
      <motion.div ref={ref} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

function ParallaxElement({ children, threshold = 0.15 }) {
  /* Constants */
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const springValue = { stiffness: 400, damping: 30 };

  /* UseSpring MotionValues */
  const y = useSpring(
    useTransform(
      scrollY,
      [elementTop - elementHeight, elementHeight * 0.9],
      [-62, 102]
    ),
    springValue
  );

  /* Get element properties */
  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
    setElementHeight(window.innerHeight);
  }, [ref]);

  return (
    <div>
      <motion.div ref={ref} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

function ParallaxAndroid({ children }) {
  /* Constants */
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const springValue = { stiffness: 400, damping: 30 };

  /* UseSpring MotionValues */
  const y = useSpring(
    useTransform(
      scrollY,
      [elementTop - elementHeight, elementHeight * 0.66],
      [206, -66]
    ),
    springValue
  );

  /* Get element properties */
  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(element.offsetTop);
    setElementHeight(window.innerHeight);
  }, [ref]);

  return (
    <div>
      <motion.div ref={ref} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

function ModulateOpacity({ children }) {
  /* Constants */
  const [offSet, setoffSet] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  const springValue = { stiffness: 400, damping: 30 };

  /* UseSpring MotionValues */
  const y = useSpring(
    useTransform(
      scrollY,
      [
        offSet - elementHeight + elementHeight * 0.55,
        offSet - elementHeight + elementHeight,
      ],
      [1, 90]
    ),
    springValue
  );

  /* Get element properties */
  useLayoutEffect(() => {
    const element = ref.current;
    setoffSet(element.offsetTop);
    console.log("offSet:", offSet);
    setElementHeight(window.innerHeight);
  }, [ref]);
  useEffect(() => {
    scrollY.onChange((latest) => {
      console.log(latest);
    });
  }, []);
  return (
    <div>
      <motion.div ref={ref} style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

function SectionMollieMobile() {
  // const mollieMobileref = useRef(null);

  // const { scrollYProgress } = useViewportScroll();
  // const mollieIosY = useTransform(scrollYProgress, [0.25, 1], [72, -42]);
  // const mollieAndroidY = useTransform(scrollYProgress, [0.25, 1.25], [42, -18]);

  // const [elementTop, setElementTop] = useState(0);
  // const ref = useRef(null);
  // const { scrollY } = useViewportScroll();

  // const y = useTransform(scrollY, [-elementTop, elementTop], [71, -42], {
  //   clamp: false,
  // });
  // const opacity = useTransform(scrollY, [-elementTop, elementTop], [0, 1], {
  //   clamp: false,
  // });

  // useLayoutEffect(() => {
  //   const element = ref.current;
  //   setElementTop(element.offsetTop);
  //   console.log(element.offsetTop);
  // }, [ref]);
  return (
    <>
      <section
        style={{
          // position: "relative",
          width: "100%",
          maxWidth: 1152,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* <motion.div
            style={{
              width: 320,
              margin: "0 96px",
              opacity,
              // margin: "auto",
              // maxWidth: 320,
              // left: 0,
              // right: 0,
              // top: Math.round(elementHeight * 0.22),
              // position: "absolute",
            }}
          >
            <Manifesto
              style={{
                marginTop: 180,
              }}
            >
              <strong>Designing Mollie for Mobile.</strong> Think about what
              it’s like to do work on your phone. Your attention is fragmented.
              Typing is a chore. Often times, you just want to put your phone
              aside and get back to real life whether that’s sitting down to
              dinner with your spouse or giving directions to your Uber driver.
              <br />
              <br /> But what if we helped you get back to real life? What if
              working from your phone was a spot of joy? What if, in those brief
              moments of transit, you could collaborate rapidly and effectively
              with your team? <br />
              <br />
              During the second half of 2017, I led the redesign of Dropbox’s
              mobile apps to empower rapid work for collaborators on the go.
              Here are just a few of the changes we shipped.
            </Manifesto>
          </motion.div>
          <motion.div
            style={{
              width: 320,
              // top: Math.round(elementHeight * 0.3),
              y,
              // right: 0,
              // width: "32vw",
              // position: "absolute",
            }}
          >
            <motion.figure
              style={{
                backgroundImage: "url(images/mollie-android.png)",
                width: 487,
                height: 1020,
                backgroundSize: "487px, 1020px",
                backgroundRepeat: "no-repeat",
                padding: 0,
                margin: 0,
                // position: "absolute",
                // left: 0,
              }}
            />
          </motion.div> */}
        </div>
      </section>
    </>
  );
}

export default Work;
