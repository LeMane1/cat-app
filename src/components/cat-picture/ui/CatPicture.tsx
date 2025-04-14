'use client'

import './cat-picture.sass'
import Image from 'next/image'

interface ICatPictureProps {
  catPictureUrl:string | null;
}

export default function CatPicture({catPictureUrl}:ICatPictureProps) {
  return (
    <div className="cat-picture-wrapper">
      {
        catPictureUrl ?
          <Image
            src={catPictureUrl}
            alt='Cat picture'
          />
          :
          <span className='no-cats-label'>
            No cats available
          </span>
      }
    </div>
  )
}