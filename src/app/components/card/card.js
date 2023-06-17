'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './card.module.css'

const Card = (props) => {
  const { imgUrl = '/static/cliffor.webp', size = 'medium' } = props

  const [imgSrc, setImgSrc] = useState(imgUrl)
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  }

  const handleOnError = () => {
    console.log('error')
    setImgSrc('/static/clifford.webp')
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
