import * as style from "./style";
import { H1, Caption } from "../Typograhy";
import { GalleryItemType } from "../../../data";
import { Video } from "../Video";

interface Props {
  galleryItem: GalleryItemType;
  currentGalleryItem: boolean;
}
export function GalleryItem(props: Props) {
  const { galleryItem, currentGalleryItem } = props;

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
