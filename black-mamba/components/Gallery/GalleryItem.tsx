import * as style from "./style";
import { H3 } from "../Typography";
import { GalleryItemType } from "../../../data";
import { Video, MobileVideo } from "../Video";

interface Props {
  galleryItem: GalleryItemType;
  currentGalleryItem: boolean;
}
export function GalleryItem(props: Props) {
  const { galleryItem, currentGalleryItem } = props;

  return (
    <style.GalleryItem currentGalleryItem={currentGalleryItem}>
      {currentGalleryItem && (
        <>
          <MobileVideo
            autoPlay
            loop
            muted
            playsInline
            poster={galleryItem.mobilePoster || galleryItem.poster || ""}
            preload="auto"
          >
            <source
              src={galleryItem.mobileVideo || galleryItem.video}
              type="video/mp4"
            />
          </MobileVideo>
          <Video
            autoPlay
            loop
            muted
            playsInline
            poster={galleryItem.poster || ""}
            preload="auto"
          >
            <source src={galleryItem.video} type="video/mp4" />
          </Video>
        </>
      )}

      <style.VideoCaption>
        <H3>{galleryItem.headline}</H3>
        <style.VideoCaptionList>{galleryItem.details}</style.VideoCaptionList>
      </style.VideoCaption>
    </style.GalleryItem>
  );
}
