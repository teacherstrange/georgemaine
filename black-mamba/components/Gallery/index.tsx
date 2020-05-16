import { GalleryItem } from "./GalleryItem";
import { GalleryItemType } from "../../../data";

interface Props {
  galleryList: GalleryItemType[];
  currentGalleryItem: number;
}

export default function Gallery(props: Props) {
  const { galleryList, currentGalleryItem } = props;

  return (
    <section>
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
    </section>
  );
}
