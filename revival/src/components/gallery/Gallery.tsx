import React, { useEffect, useState } from "react";
import Lightbox from "react-image-lightbox";

const zero = 0;
const Gallery = ({
  Image,
  open,
  Index,
  btnRef,
}: {
  Image: string[];
  open: boolean;
  Index: string;
  btnRef: any;
}): JSX.Element => {
  const [photoIndex, setPhotoIndex] = useState(Image.indexOf(Index));
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setPhotoIndex(Image.indexOf(Index));
  }, [Index]);

  return (
    <div>
      <button ref={btnRef} onClick={() => setIsOpen(true)} hidden></button>
      {isOpen && (
        <Lightbox
          mainSrc={Image[Number(photoIndex)]}
          onCloseRequest={() => setIsOpen(false)}
          nextSrc={Image[(photoIndex + 1) % Image.length]}
          prevSrc={Image[(photoIndex + Image.length - 1) % Image.length]}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + Image.length - 1) % Image.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % Image.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
