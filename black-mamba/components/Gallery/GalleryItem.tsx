import * as style from "./style";
import { H1, Caption } from "../Typograhy";
import { GalleryItemType } from "../../../data";
import { Video } from "../Video";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  galleryItem: GalleryItemType;
  currentGalleryItem: boolean;
  pressedMenuItem: number;
  galleryItemIndex: number;
}
export function GalleryItem(props: Props) {
  const {
    galleryItem,
    currentGalleryItem,
    pressedMenuItem,
    galleryItemIndex,
  } = props;
  const galleryItemVariants = {
    left: {
      left: 0,
      right: "-100%",
      background: "#000",
    },
    center: {
      left: 0,
      right: 0,
      background: "#07f",
    },
    right: {
      left: "100%",
      right: 0,
      background: "#000",
    },
  };
  useEffect(() => {
    if (pressedMenuItem === galleryItemIndex) {
      console.log("this menu item should be centered");
    } else if (pressedMenuItem > galleryItemIndex) {
      console.log("this item should be left");
    } else if (pressedMenuItem < galleryItemIndex) {
      console.log("this item should be right");
    }
  });
  return (
    <style.GalleryItem currentGalleryItem={currentGalleryItem}>
      {currentGalleryItem && (
        <Video autoPlay loop muted playsInline preload="auto">
          <source src={galleryItem.video} type="video/mp4" />
        </Video>
      )}

      <style.VideoCaption>
        <H1>{galleryItem.headline}</H1>
        <style.VideoCaptionList>
          {galleryItem.details.map((detail, index) => {
            return (
              <style.VideoCaptionListItem key={index}>
                <Caption>{detail.metaData}</Caption>
              </style.VideoCaptionListItem>
            );
          })}
        </style.VideoCaptionList>
      </style.VideoCaption>
    </style.GalleryItem>
  );
}
