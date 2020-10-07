import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { wrap, useKeyPress, swipePower } from "../components/Helpers";
import { motion } from "framer-motion";
import { Nav } from "../components/Nav";
import { Caption, Manifesto } from "../components/Typography";
import { IndicatorList } from "../components/IndicatorList";
import { A } from "../components/Link/style";
import { Video } from "../components/Video";
import { Button } from "../components/Button";
const navItems = [{ name: "About" }, { name: "Work" }, { name: "Icons" }];
const workItems = [
  { name: "Mollie Mobile" },
  { name: "Mollie Event Video" },
  { name: "Mollie Checkout" },
  { name: "Mollie Apple Pay Video" },
];
const slideItems = [
  { name: "About" },
  { name: "Mollie Mobile" },
  { name: "Mollie Event Video" },
  { name: "Mollie Checkout" },
  { name: "Mollie Apple Pay Video" },
  { name: "Icons" },
];
export default () => {
  // Handle page switches
  const [slide, setSlide] = useState(0);

  // Wrap pages so that you can always navigate between pages without hitting a dead end
  const slideIndex = wrap(0, slideItems.length, slide);

  // Wrap hook so that it can be shared
  function handleIndexChange(index: number) {
    setSlide(index);
    !applePayVideoMuted && setApplePayVideoMuted(true);
    !mollieEventsVideoMuted && setMollieEventsVideoMuted(true);
  }

  const [applePayVideoMuted, setApplePayVideoMuted] = useState(true);
  const [mollieEventsVideoMuted, setMollieEventsVideoMuted] = useState(true);

  // Keyboard navigation helper
  function paginate(direction: number) {
    setSlide(slide + direction);
    !applePayVideoMuted && setApplePayVideoMuted(true);
    !mollieEventsVideoMuted && setMollieEventsVideoMuted(true);
  }
  const ArrowRightDown = useKeyPress("ArrowRight");
  const ArrowLeftDown = useKeyPress("ArrowLeft");

  // Keyboard navigation trigger
  useEffect(() => {
    ArrowRightDown && paginate(1);
    ArrowLeftDown && paginate(-1);
  }, [ArrowRightDown, ArrowLeftDown]);

  return (
    <Wrapper>
      <Nav list={navItems} current={slideIndex} onClick={handleIndexChange} />
      <Slides
        applePayMuteButtonOnClick={setApplePayVideoMuted}
        applePayVideoMuted={applePayVideoMuted}
        mollieEventsVideoMuted={mollieEventsVideoMuted}
        mollieEventsMuteButtonOnClick={setMollieEventsVideoMuted}
        onDragEndHelper={paginate}
        current={slideIndex}
        list={slideItems}
      />
      {slideIndex >= 1 && slideIndex <= 4 && (
        <IndicatorList current={slideIndex} list={workItems} />
      )}
    </Wrapper>
  );
};

type SlideItemProps = {
  name: string;
};

interface SlidesProps {
  list: SlideItemProps[];
  current: number;
  applePayMuteButtonOnClick: Function;
  mollieEventsMuteButtonOnClick: Function;
  onDragEndHelper: Function;
  applePayVideoMuted: Boolean;
  mollieEventsVideoMuted: Boolean;
}

function Slides({
  list,
  current,
  applePayMuteButtonOnClick,
  applePayVideoMuted,
  mollieEventsMuteButtonOnClick,
  mollieEventsVideoMuted,
  onDragEndHelper,
}: SlidesProps) {
  const applePayVideoRef = useRef(null);

  const mollieEventsVideoRef = useRef(null);

  useEffect(() => {
    // Hide the default controls
    applePayVideoRef.current.controls = false;
    mollieEventsVideoRef.current.controls = false;
  });
  return (
    <motion.ul
      style={{
        margin: 0,
        padding: 0,
      }}
    >
      {list.map((listItem, index) => {
        return (
          <Li
            animate={{
              x:
                current === index
                  ? `0vw`
                  : index < current
                  ? `-100vw`
                  : index > current
                  ? `calc(${index - current} * 100vw)`
                  : `calc(${index} * 100vw)`,
              scale: index === current ? 1 : 0.8,
              opacity: index === current ? 1 : 0,
            }}
            key={index}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 100,
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              !mollieEventsVideoMuted && mollieEventsMuteButtonOnClick(true),
                !applePayVideoMuted && applePayMuteButtonOnClick(true);
              if (swipe < -100000) {
                onDragEndHelper(1);
              } else if (swipe > 10000) {
                onDragEndHelper(-1);
              }
            }}
          >
            {index === 0 && (
              <div style={{ alignSelf: "center" }}>
                <MemojiImg
                  src={"images/memoji.png"}
                  alt={"Memoji that matches Georgemaine's personality and mood"}
                />
                <Manifesto color={"#000"} width={"480px"}>
                  {
                    "I'm Georgemaine. Currently, I'm working on Pitch, the next-gen presentation tool. I enjoy making digital tools so simple and fun to use that you'll want to use them all the time. I also like tinkering with software projects and animation videos. If you have one and think I can help or simply want to chat—reach out."
                  }
                </Manifesto>
                <IconList>
                  <li>
                    <A href="#" data-tooltip={"Reach out"}>
                      <svg
                        width="28"
                        height="22"
                        viewBox="0 0 28 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 6.6906V18C0 20.2091 1.79086 22 4 22H24C26.2091 22 28 20.2091 28 18V6.6906L14.374 14.5301L14 14.7453L13.626 14.5301L0 6.6906ZM0 4.96006L14 13.0147L28 4.96006V4C28 1.79086 26.2091 0 24 0H4C1.79086 0 0 1.79086 0 4V4.96006Z"
                          fill="#999"
                        />
                      </svg>
                    </A>
                  </li>
                  <li>
                    <A href="#" data-tooltip={"Follow me on Twitter"}>
                      <svg
                        width="25"
                        height="22"
                        viewBox="0 0 25 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24.0032 0.0133121C22.9584 0.841432 21.8015 1.4748 20.5773 1.88904C19.2313 0.150062 17.0623 -0.45977 15.1461 0.362042C13.2299 1.18385 11.9741 3.26248 12.0016 5.56692V6.79289C8.10725 6.90635 4.42098 4.8215 2.18211 1.23928C2.18211 1.23928 -2.18211 12.2729 7.63737 17.1768C5.39038 18.8906 2.71362 19.75 0 19.6287C9.81948 25.7585 21.8211 19.6287 21.8211 5.53014C21.8201 5.18865 21.7908 4.84801 21.7338 4.5126C22.8473 3.27865 23.6331 1.72072 24.0032 0.0133121Z"
                          fill="#999"
                        />
                      </svg>
                    </A>
                  </li>
                  <li>
                    <A href="#" data-tooltip={"View my Dribbble"}>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2992 19.7183C16.7734 17.3897 16.21 15.2864 15.609 13.4085C16.21 13.3333 16.8485 13.2958 17.5245 13.2958C18.6513 13.2958 19.8719 13.446 21.1865 13.7465C20.9611 14.9859 20.5104 16.1127 19.8344 17.1268C19.1583 18.1408 18.3133 19.0047 17.2992 19.7183ZM12.0034 21.3521C9.86258 21.3146 8.00342 20.7136 6.42596 19.5493C6.57619 19.2488 6.8391 18.8638 7.21469 18.3944C7.59027 17.9249 8.05976 17.4085 8.62314 16.8451C9.18652 16.2817 9.88135 15.7371 10.7076 15.2113C11.5339 14.6854 12.4541 14.2535 13.4682 13.9155C14.2194 15.9061 14.8391 18.1972 15.3273 20.7887C14.3133 21.1643 13.2053 21.3521 12.0034 21.3521ZM2.65131 12V11.8873H3.66539C4.64192 11.8873 5.88135 11.8122 7.3837 11.662C8.88605 11.5117 10.4823 11.1737 12.1724 10.6479L12.7358 11.8873C11.609 12.2629 10.6043 12.7324 9.72173 13.2958C8.8391 13.8592 8.07854 14.4319 7.44004 15.0141C6.80154 15.5962 6.26633 16.1502 5.83441 16.6761C5.40248 17.2019 5.07384 17.6526 4.84849 18.0282C4.13488 17.2019 3.59027 16.2817 3.21469 15.2676C2.8391 14.2535 2.65131 13.1643 2.65131 12ZM7.83441 3.60563C8.17243 3.98122 8.64192 4.59155 9.24286 5.43662C9.8438 6.28169 10.5011 7.3615 11.2147 8.67606C9.78746 9.0892 8.41657 9.37089 7.10201 9.52113C5.78746 9.67136 4.69826 9.74648 3.83441 9.74648H2.933C3.27103 8.39437 3.86258 7.1831 4.70765 6.11268C5.55272 5.04225 6.59497 4.20657 7.83441 3.60563ZM12.0034 2.64789C13.1302 2.64789 14.1818 2.82629 15.1583 3.1831C16.1349 3.53991 17.0363 4.03756 17.8626 4.67606C16.5856 6.14084 15.0457 7.24883 13.2428 8C12.6043 6.79812 12.0034 5.76526 11.44 4.90141C10.8766 4.03756 10.4072 3.34272 10.0316 2.8169C10.6701 2.70423 11.3273 2.64789 12.0034 2.64789ZM19.3837 6.19718C20.5856 7.73709 21.2428 9.52113 21.3555 11.5493C20.0034 11.2864 18.7264 11.1549 17.5245 11.1549C16.548 11.1549 15.6466 11.23 14.8203 11.3803C14.5949 10.8545 14.3884 10.3662 14.2006 9.91549C16.1161 9.0892 17.8438 7.84977 19.3837 6.19718ZM12.0034 0C8.58558 0.0751174 5.7499 1.23944 3.49638 3.49296C1.24286 5.74648 0.0785354 8.58216 0.00341797 12C0.0785354 15.4178 1.24286 18.2535 3.49638 20.507C5.7499 22.7606 8.58558 23.9249 12.0034 24C15.4212 23.9249 18.2569 22.7606 20.5104 20.507C22.764 18.2535 23.9283 15.4178 24.0034 12C23.9283 8.58216 22.764 5.74648 20.5104 3.49296C18.2569 1.23944 15.4212 0.0751174 12.0034 0Z"
                          fill="#999"
                        />
                      </svg>
                    </A>
                  </li>
                  <li>
                    <A href="#" data-tooltip={"Connect on Linkedin"}>
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.4034 20.4H16.8034V14.04C16.8034 13.044 15.9994 12.24 15.0034 12.24C14.0074 12.24 13.2034 13.044 13.2034 14.04V20.4H9.60342V9.6H13.2034V11.04C13.8034 10.032 15.1114 9.36 16.2034 9.36C18.5194 9.36 20.4034 11.244 20.4034 13.56V20.4ZM5.40342 7.572C4.20342 7.572 3.23142 6.6 3.23142 5.4C3.23142 4.2 4.20342 3.228 5.40342 3.228C6.60342 3.228 7.57542 4.2 7.57542 5.4C7.57542 6.6 6.60342 7.572 5.40342 7.572ZM7.20342 20.4H3.60342V9.6H7.20342V20.4ZM21.6034 0H2.40342C1.07142 0 0.00341797 1.068 0.00341797 2.4V21.6C0.00341797 22.92 1.08342 24 2.40342 24H21.6034C22.9234 24 24.0034 22.92 24.0034 21.6V2.4C24.0034 1.068 22.9234 0 21.6034 0Z"
                          fill="#999"
                        />
                      </svg>
                    </A>
                  </li>
                </IconList>
              </div>
            )}
            {index === 1 && (
              <div
                style={{ alignSelf: "center", width: "100%", height: "100%" }}
              >
                <MobileImg />

                <Caption mobileWidth={"300px"} width={"330px"}>
                  <strong>2020. </strong>Designed Mollie’s iOS and Android apps
                  to make your phone a place where you can quickly manage
                  payments and watch your business grow.
                </Caption>
              </div>
            )}
            {index === 2 && (
              <div style={{ alignSelf: "center" }}>
                <figure
                  id="videoContainer"
                  style={{
                    padding: 0,
                    margin: 0,
                    position: "relative",
                  }}
                >
                  <Video
                    ref={mollieEventsVideoRef}
                    muted={mollieEventsVideoMuted ? true : false}
                    controls={true}
                    autoPlay
                    loop
                    playsInline
                  >
                    <source src="videos/mollie-video.mp4" type="video/mp4" />
                  </Video>
                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      marginLeft: "auto",
                      marginRight: "auto",
                      bottom: 18,
                      left: 0,
                      right: 0,
                    }}
                    onClick={() =>
                      mollieEventsMuteButtonOnClick(!mollieEventsVideoMuted)
                    }
                    type="button"
                  >
                    {mollieEventsVideoMuted && (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.71716 11.8385C9.31646 11.9836 9 12.3677 9 12.831V17.1142C9 17.7276 9.51656 18.1796 10.0762 18.1796H13.3047L17.2543 21.731C17.4264 21.9031 17.6417 22 17.8569 22C17.9645 22 18.0614 21.9785 18.1582 21.9462C18.4811 21.817 18.6856 21.5157 18.6856 21.1821V20.8069L9.71716 11.8385ZM18.6856 16.5642V8.81687C18.6963 8.48326 18.4919 8.17117 18.169 8.05279C17.8569 7.93441 17.5018 8.0205 17.265 8.25726L13.6187 11.4974L18.6856 16.5642Z"
                          fill="#000"
                        />
                        <path
                          d="M9.5 9.5L20.5 20.5"
                          stroke="#000"
                          strokeLinecap="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 1C17.7689 1 20.4757 1.82109 22.778 3.35942C25.0803 4.89776 26.8747 7.08426 27.9343 9.64243C28.9939 12.2006 29.2712 15.0155 28.731 17.7313C28.1908 20.447 26.8574 22.9416 24.8995 24.8995C22.9416 26.8574 20.447 28.1908 17.7313 28.731C15.0155 29.2712 12.2006 28.9939 9.64243 27.9343C7.08426 26.8747 4.89776 25.0803 3.35942 22.778C1.82109 20.4757 1 17.7689 1 15C1 11.287 2.475 7.72601 5.1005 5.1005C7.72601 2.475 11.287 1 15 1V1Z"
                          stroke="#000"
                          strokeOpacity="0.3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {!mollieEventsVideoMuted && (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.265 8.25726L13.3047 11.7763H10.0654C9.51656 11.7763 9 12.2391 9 12.831V17.1142C9 17.7276 9.51656 18.1796 10.0762 18.1796H13.3047L17.2543 21.731C17.4264 21.9031 17.6417 22 17.8569 22C17.9645 22 18.0614 21.9785 18.1582 21.9462C18.4811 21.817 18.6856 21.5157 18.6856 21.1821V8.81687C18.6963 8.48326 18.4919 8.17117 18.169 8.05279C17.8569 7.93441 17.5018 8.0205 17.265 8.25726Z"
                          fill="#000"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 1C17.7689 1 20.4757 1.82109 22.778 3.35942C25.0803 4.89776 26.8747 7.08426 27.9343 9.64243C28.9939 12.2006 29.2712 15.0155 28.731 17.7313C28.1908 20.447 26.8574 22.9416 24.8995 24.8995C22.9416 26.8574 20.447 28.1908 17.7313 28.731C15.0155 29.2712 12.2006 28.9939 9.64243 27.9343C7.08426 26.8747 4.89776 25.0803 3.35942 22.778C1.82109 20.4757 1 17.7689 1 15C1 11.287 2.475 7.72601 5.1005 5.1005C7.72601 2.475 11.287 1 15 1V1Z"
                          stroke="#000"
                          strokeOpacity="0.3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Button>
                </figure>

                <Caption mobileWidth={"300px"} width={"336px"}>
                  <strong>2019. </strong>Created an engaging video to inspire
                  people at events to use Mollie payments, by giving them a
                  quick look at how it works. Turn up the volume!
                </Caption>
              </div>
            )}
            {index === 4 && (
              <div style={{ alignSelf: "center" }}>
                <figure
                  style={{
                    padding: 0,
                    margin: 0,
                    position: "relative",
                  }}
                >
                  <Video
                    controls={true}
                    autoPlay
                    loop
                    playsInline
                    ref={applePayVideoRef}
                    muted={applePayVideoMuted ? true : false}
                  >
                    <source
                      src="videos/mollie-apple-pay.mp4"
                      type="video/mp4"
                    />
                  </Video>

                  <Button
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      marginLeft: "auto",
                      marginRight: "auto",
                      bottom: 18,
                      left: 0,
                      right: 0,
                    }}
                    onClick={() =>
                      applePayMuteButtonOnClick(!applePayVideoMuted)
                    }
                    type="button"
                  >
                    {applePayVideoMuted && (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.71716 11.8385C9.31646 11.9836 9 12.3677 9 12.831V17.1142C9 17.7276 9.51656 18.1796 10.0762 18.1796H13.3047L17.2543 21.731C17.4264 21.9031 17.6417 22 17.8569 22C17.9645 22 18.0614 21.9785 18.1582 21.9462C18.4811 21.817 18.6856 21.5157 18.6856 21.1821V20.8069L9.71716 11.8385ZM18.6856 16.5642V8.81687C18.6963 8.48326 18.4919 8.17117 18.169 8.05279C17.8569 7.93441 17.5018 8.0205 17.265 8.25726L13.6187 11.4974L18.6856 16.5642Z"
                          fill="#000"
                        />
                        <path
                          d="M9.5 9.5L20.5 20.5"
                          stroke="#000"
                          strokeLinecap="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 1C17.7689 1 20.4757 1.82109 22.778 3.35942C25.0803 4.89776 26.8747 7.08426 27.9343 9.64243C28.9939 12.2006 29.2712 15.0155 28.731 17.7313C28.1908 20.447 26.8574 22.9416 24.8995 24.8995C22.9416 26.8574 20.447 28.1908 17.7313 28.731C15.0155 29.2712 12.2006 28.9939 9.64243 27.9343C7.08426 26.8747 4.89776 25.0803 3.35942 22.778C1.82109 20.4757 1 17.7689 1 15C1 11.287 2.475 7.72601 5.1005 5.1005C7.72601 2.475 11.287 1 15 1V1Z"
                          stroke="#000"
                          strokeOpacity="0.3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {!applePayVideoMuted && (
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.265 8.25726L13.3047 11.7763H10.0654C9.51656 11.7763 9 12.2391 9 12.831V17.1142C9 17.7276 9.51656 18.1796 10.0762 18.1796H13.3047L17.2543 21.731C17.4264 21.9031 17.6417 22 17.8569 22C17.9645 22 18.0614 21.9785 18.1582 21.9462C18.4811 21.817 18.6856 21.5157 18.6856 21.1821V8.81687C18.6963 8.48326 18.4919 8.17117 18.169 8.05279C17.8569 7.93441 17.5018 8.0205 17.265 8.25726Z"
                          fill="#000"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15 1C17.7689 1 20.4757 1.82109 22.778 3.35942C25.0803 4.89776 26.8747 7.08426 27.9343 9.64243C28.9939 12.2006 29.2712 15.0155 28.731 17.7313C28.1908 20.447 26.8574 22.9416 24.8995 24.8995C22.9416 26.8574 20.447 28.1908 17.7313 28.731C15.0155 29.2712 12.2006 28.9939 9.64243 27.9343C7.08426 26.8747 4.89776 25.0803 3.35942 22.778C1.82109 20.4757 1 17.7689 1 15C1 11.287 2.475 7.72601 5.1005 5.1005C7.72601 2.475 11.287 1 15 1V1Z"
                          stroke="#000"
                          strokeOpacity="0.3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Button>
                </figure>

                <Caption mobileWidth={"300px"} width={"302px"}>
                  <strong>2019. </strong>Created an engaging promotional video
                  to help support the official launch of Apple Pay to the Dutch
                  Mollie customers.
                </Caption>
              </div>
            )}
          </Li>
        );
      })}
    </motion.ul>
  );
}

export const Wrapper = styled.main`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #f3f3f3;
  color: #111;
`;

export const IconList = styled.ul`
  padding: 0;
  margin: 30px auto 0;
  list-style: none;
  display: flex;
  width: 204px;
  justify-content: space-between;

  @media only screen and (min-width: 600px) {
    margin: 48px auto 0;
  }
`;

export const MobileImg = styled.figure`
  width: 100%;
  height: calc(100% - 72px);
  padding: 0;
  margin: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("images/mollie-mobile-mockup.png");

  @media only screen and (min-width: 375px) {
    height: calc(100% - 60px);
  }
`;

export const MemojiImg = styled.img`
  width: calc(186px * 0.75);
  margin: 0 auto 24px;
  pointer-events: none;

  @media only screen and (min-width: 600px) {
    width: 186px;
    margin: 0 auto 36px;
  }
`;

export const Li = styled(motion.li)`
  cursor: grab;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 30px;
  right: 30px;
  left: 30px;
  bottom: 102px;
  text-align: center;
  opacity: 0;

  @media only screen and (min-width: 768px) {
    top: 126px;
    bottom: 120px;
  }
`;
