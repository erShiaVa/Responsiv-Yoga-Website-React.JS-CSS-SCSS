import React from 'react';
import './gallery.scss';
import { images } from '../../images';

function Gallery() {
  return (
    <div className='gallery__container'>
        <img className='gallery__img' src={images.gallery_teacher} alt="#"/>
        <img className='gallery__img' src={images.gallery_food} alt="#" />
        <img className='gallery__img' src={images.gallery_retreat} alt="#" />
        <img className='gallery__img' src={images.gallery} alt="#" />
        <img className='gallery__img' src={images.gallery_stretch} alt="#" />
        <img className='gallery__img' src={images.gallery_waterfall} alt="#" />
    </div>
  )
}

export default Gallery