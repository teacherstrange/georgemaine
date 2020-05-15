import * as style from "./style";
import { H1, Caption } from "../Typograhy";
import { GalleryItemType } from "../../../data";

interface Props {
  galleryItem: GalleryItemType;
  currentGalleryItem: boolean;
}
export function GalleryItem(props: Props) {
  const { galleryItem, currentGalleryItem } = props;

  return (
    <style.GalleryItem currentGalleryItem={currentGalleryItem}>
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
