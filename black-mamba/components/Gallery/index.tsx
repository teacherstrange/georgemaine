import { GalleryItem } from "./GalleryItem";
import { GalleryItemType } from "../../../data";

interface galleryProps {
  galleryList: GalleryItemType[];
  currentGalleryItem: number;
}

export default function Gallery({
  galleryList,
  currentGalleryItem,
}: galleryProps) {
  return (
    <section>
      {galleryList.map((galleryItem, index) => {
        return (
          <GalleryItem
            currentGalleryItem={currentGalleryItem === index}
            key={index}
            galleryItem={galleryItem}
          />
        );
      })}
    </section>
  );
}
