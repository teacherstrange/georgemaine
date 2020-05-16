import { ContentGalleryContainer } from "./style";
import { GalleryItem } from "./GalleryItem";
import { GalleryItemType } from "../../../data";
import { useEffect } from "react";

interface Props {
  galleryList: GalleryItemType[];
  currentGalleryItem: number;
}

export default function Gallery(props: Props) {
  const { galleryList, currentGalleryItem } = props;

  return (
    <ContentGalleryContainer>
      {galleryList.map((galleryItem, index) => {
        return (
          <GalleryItem
            currentGalleryItem={currentGalleryItem === index}
            pressedMenuItem={currentGalleryItem}
            key={index}
            galleryItemIndex={index}
            galleryItem={galleryItem}
          />
        );
      })}
    </ContentGalleryContainer>
  );
}
