import React, { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'

import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface Props {
  img?: string
  className?: string
  style?: CSSProperties
}

export const ProductImage = ({img, className, style}: Props) => {

  const { product } = useContext(ProductContext)

  let imgToShow: string
  let titleToShow: string

  if (img) {
    imgToShow = img
  } else if ( product.img ) {
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  if ( product?.title ) {
    titleToShow = product?.title.toLowerCase().replace(' ','-')
  } else {
    titleToShow = 'product-image'
  }

  return (
    <img 
      className={ `${styles.productImg} ${className}` } 
      src={ imgToShow } 
      alt={ titleToShow }
      style={style}
    />
  )
}