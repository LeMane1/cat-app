'use client'

import './cat-picture.sass'

interface ICatPictureProps {
  catPictureUrl:string | null;
}

export default function CatPicture({catPictureUrl}:ICatPictureProps) {
  return (
    <>
      {
        catPictureUrl ?
          <img
            src={catPictureUrl}
            alt='Cat picture'
            width='100%'
            height='200px'
          />
          :
          <span className='no-cats-label'>
            No cats available
          </span>
      }
    </>
  )
}