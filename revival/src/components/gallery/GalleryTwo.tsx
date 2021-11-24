import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";

const zero = 0;
const GalleryTwo = ({
  ImageTwo,
  open,
  Index,
  btnRef,
}: {
  ImageTwo: string[];
  open: boolean;
  Index: string;
  btnRef: any;
}): JSX.Element => {
  const [photoIndex, setPhotoIndex] = useState(ImageTwo.indexOf(Index));
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setPhotoIndex(ImageTwo.indexOf(Index));
  }, [Index]);

  return (
    <div>
      <button ref={btnRef} onClick={() => setIsOpen(true)} hidden></button>
      {isOpen && (
        <Lightbox
          mainSrc={ImageTwo[Number(photoIndex)]}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={ImageTwo[(photoIndex + 1) % ImageTwo.length]}
          prevSrc={
            ImageTwo[(photoIndex + ImageTwo.length - 1) % ImageTwo.length]
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + ImageTwo.length - 1) % ImageTwo.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % ImageTwo.length)
          }
        />
      )}
    </div>
  );
};

export default GalleryTwo;
