import MobileData from "./MobileData.mdx";
import MollieVideoData from "./MollieVideoData.mdx";
import MollieCheckoutData from "./MollieCheckoutData.mdx";
import MollieApplePayData from "./MollieApplePayData.mdx";

type LinkData = {
  name: string;
  url: string;
};

export type MenuItem = {
  name: string;
};

export type GalleryItemType = {
  headline: string;
  details: React.ReactNode;
  video: string;
  poster?: string;
  mobileVideo?: string;
  mobilePoster?: string;
};

export const galleryListData: GalleryItemType[] = [
  {
    headline: "Mollie Mobile",
    details: <MobileData />,
    video: "/videos/mollie-mobile.mp4",
    poster: "/images/mollie-mobile-poster.jpg",
    mobileVideo: "/videos/mollie-mobile-mobile.mp4",
    mobilePoster: "/images/mollie-mobile-mobile-poster.jpg",
  },

  {
    headline: "Mollie Video",
    details: <MollieVideoData />,
    video: "/videos/mollie-video.mp4",
    poster: "",
  },
  {
    headline: "Mollie Checkout",
    details: <MollieCheckoutData />,
    video: "/videos/mollie-checkout.mp4",
    poster: "/images/mollie-checkout-poster.jpg",
    mobileVideo: "/videos/mollie-checkout-mobile.mp4",
    mobilePoster: "/images/mollie-checkout-mobile-poster.jpg",
  },
  {
    headline: "Mollie Apple Pay",
    details: <MollieApplePayData />,
    video: "/videos/mollie-apple-pay.mp4",
    poster: "",
  },
];

export const ContactListData: LinkData[] = [
  // Twitter
  {
    name: "Twitter",
    url: "https://twitter.com/georgemaine",
  },
  // Linkedin
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/georgemaine-lourens-02641ab8/",
  },
  // Email
  {
    name: "Email",
    url: "mailto:georgemaine.lourens@gmail.com?subject=Hello 👋",
  },
  // Dribbble
  {
    name: "Dribbble",
    url: "https://dribbble.com/georgemaine",
  },
];

export const MenuList: MenuItem[] = [
  { name: "Mollie Mobile" },
  { name: "Mollie Video" },
  { name: "Mollie Checkout" },
  { name: "Mollie Apple Pay" },
  { name: "Icons" },
];
