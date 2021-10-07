import React, { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox'

const GalleryTwo = ({
  imageTwo,
  open,
  Index,
  btnRef,
}: {
  imageTwo: string[]
  open: boolean
  Index: string
  // eslint-disable-next-line
  btnRef: any
}): JSX.Element => {
  const [photoIndex, setPhotoIndex] = useState(imageTwo.indexOf(Index))
  const [isOpen, setIsOpen] = useState(open)
  useEffect(() => {
    setPhotoIndex(imageTwo.indexOf(Index))
  }, [Index])
  return (
    <div>
      <button className="btn d-none" ref={btnRef} onClick={() => setIsOpen(true)} hidden></button>
      {isOpen && <Lightbox mainSrc={imageTwo[Number(photoIndex)]} onCloseRequest={() => setIsOpen(false)} nextSrc={imageTwo[(photoIndex + 1) % imageTwo.length]} prevSrc={imageTwo[(photoIndex + imageTwo.length - 1) % imageTwo.length]} onMovePrevRequest={() => setPhotoIndex((photoIndex + imageTwo.length - 1) % imageTwo.length)} onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imageTwo.length)} />}
    </div>
  )
}

export default GalleryTwo
