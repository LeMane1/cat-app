'use client'

import './cat-picture.sass'

interface ICatPictureProps {
  catPictureUrl:string | null;
}

export default function CatPicture({catPictureUrl}:ICatPictureProps) {
  return (
    <div className="cat-picture-wrapper">
      {
        catPictureUrl ?
          <img
            src={catPictureUrl}
            alt='Cat picture'
            width='100%'
            height='100%'
          />
          :
          <span className='no-cats-label'>
            No cats available
          </span>
      }
    </div>
  )
}