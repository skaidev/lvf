import React, { useEffect, useState } from 'react'
import Lightbox from 'react-image-lightbox'

// eslint-disable-next-line
const Gallery = ({ Image, open, Index, btnRef }: { Image: string[]; open: boolean; Index: string; btnRef: any }): JSX.Element => {
  const [photoIndex, setPhotoIndex] = useState(Image.indexOf(Index))
  const [isOpen, setIsOpen] = useState(open)
  useEffect(() => {
    setPhotoIndex(Number(Image.indexOf(Index)))
  }, [Index])

  return (
    <div>
      <button className="btn d-none" ref={btnRef} onClick={() => setIsOpen(true)} hidden></button>
      {isOpen && <Lightbox mainSrc={Image[Image.indexOf(Index)]} onCloseRequest={() => setIsOpen(false)} nextSrc={Image[(photoIndex + 1) % Image.length]} prevSrc={Image[(photoIndex + Image.length - 1) % Image.length]} onMovePrevRequest={() => setPhotoIndex((photoIndex + Image.length - 1) % Image.length)} onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % Image.length)} />}
    </div>
  )
}

export default Gallery
