import * as style from "./style";
import { H1, Caption } from "../Typography";
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
        <Video
          autoPlay
          loop
          muted
          playsInline
          poster={galleryItem.poster && galleryItem.poster}
          preload="auto"
        >
          {galleryItem.retinaVideo && (
            <source
              src={galleryItem.retinaVideo}
              type="video/mp4"
              media="(min-device-pixel-ratio:2), (-webkit-min-device-pixel-ratio:2), (min--moz-device-pixel-ratio:2), (-o-min-device-pixel-ratio:2)"
            />
          )}
          <source
            src={galleryItem.video}
            type="video/mp4"
            media="(max-device-pixel-ratio:1), (-webkit-max-device-pixel-ratio:1), (max--moz-device-pixel-ratio:1), (-o-max-device-pixel-ratio:1)"
          />
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
