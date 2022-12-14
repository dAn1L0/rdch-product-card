import React, { CSSProperties, useContext } from 'react'
import { ProductContext } from './ProductCard'

import styles from '../styles/styles.module.css'

export interface Props {
  className?: string
  title?: string
  style?: CSSProperties
}

export const ProductTitle = ({title, className, style}: Props) => {
  
  const {product} = useContext( ProductContext )
  let titleToShow: string

  if ( title ) {
    titleToShow = title
  } else if ( product.title ) {
    titleToShow = product.title
  } else {
    titleToShow = 'product-no-title'
  }

  return (
    <span 
      className={ `${ styles.productDescription } ${ className }` }
      style={ style }
    > 
      { titleToShow } 
    </span>
  )
}