'use client'
import { useState } from 'react'
import cls from 'classnames'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './card.module.css'
const defaultImg =
  'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

const Card = (props) => {
  const { imgUrl = defaultImg, size = 'medium' } = props

  const [imgSrc, setImgSrc] = useState(imgUrl)
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  }

  const handleOnError = () => {
    console.log('error')
    setImgSrc(defaultImg)
  }

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ scale: 1.2 }}
      >
        <Image
          className={styles.cardImg}
          src={imgSrc}
          alt='image'
          fill
          onError={handleOnError}
        />
      </motion.div>
    </div>
  )
}

export default Card
