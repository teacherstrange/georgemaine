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
};

type GalleryMetaDataType = {
  metaData: string;
};

export const galleryListData: GalleryItemType[] = [
  {
    headline: "Mollie Mobile",
    details: [
      {
        metaData: "Design, Front end",
      },
      {
        metaData: "iOS, Android and Web page",
      },
      {
        metaData: "2019",
      },
    ],
    video: "/videos/mollie-mobile-video.mp4",
  },

  {
    headline: "Mollie Promo Video",
    details: [
      {
        metaData: "Design, Animation",
      },
      {
        metaData: "Promo Video",
      },
      {
        metaData: "2020",
      },
    ],
    video: "/videos/mollie-promo-video.mp4",
  },
  {
    headline: "Mollie Checkout",
    details: [
      {
        metaData: "Design, Front end",
      },
      {
        metaData: "Web App",
      },
      {
        metaData: "2020",
      },
    ],
    video: "/videos/mollie-checkout-video.mp4",
  },
  {
    headline: "Mollie Apple Pay",
    details: [
      {
        metaData: "Design, Animation",
      },
      {
        metaData: "Web App, Promo Video",
      },
      {
        metaData: "2019",
      },
    ],
    video: "/videos/mollie-apple-pay-video.mp4",
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
  { name: "Apple Pay Video" },
];
