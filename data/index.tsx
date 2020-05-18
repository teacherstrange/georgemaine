type LinkData = {
  name: string;
  url: string;
};

export type MenuItem = {
  name: string;
};

export type GalleryItemType = {
  headline: string;
  details: GalleryMetaDataType[];
  video: string;
  poster?: string;
};

type GalleryMetaDataType = {
  metaData: string;
};

export const galleryListData: GalleryItemType[] = [
  {
    headline: "Mollie Mobile",
    details: [
      {
        metaData: "Designed iOS & Android apps",
      },
      {
        metaData: "Designed and built web page",
      },
      {
        metaData: "2020",
      },
    ],
    video: "/videos/mollie-mobile-2x.mp4",
    poster: "/images/mollie-mobile-poster.jpg",
  },

  {
    headline: "Mollie Promo Video",
    details: [
      {
        metaData: "Designed and animated promo video",
      },
      {
        metaData: "2020",
      },
    ],
    video: "/videos/mollie-promo-video.mp4",
    poster: "",
  },
  {
    headline: "Mollie Checkout",
    details: [
      {
        metaData: "Redesigned and built the Mollie Checkout",
      },
      {
        metaData: "2020",
      },
    ],
    video: "/videos/mollie-checkout-video.mp4",
    poster: "",
  },
  {
    headline: "Mollie & Apple Pay",
    details: [
      {
        metaData: "Designed and animated the promo video",
      },
      {
        metaData: "2019",
      },
    ],
    video: "/videos/mollie-apple-pay-video.mp4",
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
  { name: "Mollie Promo Video" },
  { name: "Mollie Checkout" },
  { name: "Mollie & Apple Pay" },
];
