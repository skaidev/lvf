import React, { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox'

const GalleryThree = ({
  imageThree,
  open,
  Index,
  btnRef,
}: {
  imageThree: string[]
  open: boolean
  Index: string
  // eslint-disable-next-line
  btnRef: any
}): JSX.Element => {
  const [photoIndex, setPhotoIndex] = useState(imageThree.indexOf(Index))
  const [isOpen, setIsOpen] = useState(open)
  useEffect(() => {
    setPhotoIndex(imageThree.indexOf(Index))
  }, [Index])
  return (
    <div>
      <button className="btn d-none" ref={btnRef} onClick={() => setIsOpen(true)} hidden></button>
      {isOpen && <Lightbox mainSrc={imageThree[Number(photoIndex)]} onCloseRequest={() => setIsOpen(false)} nextSrc={imageThree[(photoIndex + 1) % imageThree.length]} prevSrc={imageThree[(photoIndex + imageThree.length - 1) % imageThree.length]} onMovePrevRequest={() => setPhotoIndex((photoIndex + imageThree.length - 1) % imageThree.length)} onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imageThree.length)} />}
    </div>
  )
}

export default GalleryThree
