'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Card from '../card/card'
import styles from './cardSection.module.css'
const defaultImg =
  'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

const CardSection = (props) => {
  const { title } = props
  const cardWrapperRef = useRef()

  const scrollRight = () => {
    cardWrapperRef.current.scrollLeft += 500
  }
  const scrollLeft = () => {
    cardWrapperRef.current.scrollLeft += -500
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.leftArrow} onClick={scrollLeft}>
        <Image
          src='/static/arrowLeft.svg'
          alt='left'
          width={36}
          height={36}
        ></Image>
      </div>
      <div className={styles.rightArrow} onClick={scrollRight}>
        <Image
          src='/static/arrowRight.svg'
          alt='right'
          width={36}
          height={36}
        ></Image>
      </div>
      <div className={styles.cardWrapper} ref={cardWrapperRef}>
        <Card src={defaultImg} size='large' id={0} />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
        <Card src={defaultImg} size='large' />
      </div>
    </section>
  )
}

export default CardSection
