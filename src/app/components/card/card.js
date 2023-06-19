'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './card.module.css'

const Card = (props) => {
  const {
    imgUrl = 'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    size = 'medium',
  } = props

  const [imgSrc, setImgSrc] = useState(imgUrl)
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  }

  const handleOnError = () => {
    console.log('error')
    setImgSrc(
      'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    )
  }

  return (
    <div className={styles.container}>
      Card
      <div className={classMap[size]}>
        <Image
          className={styles.cardImg}
          src={imgSrc}
          alt='image'
          fill
          onError={handleOnError}
        />
      </div>
    </div>
  )
}

export default Card
