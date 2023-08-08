'use client'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../card/card'
import styles from './cardSection.module.css'

const CardSection = ({ size, title, videos }) => {
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
        {videos.map((video, i) => {
          console.log(video)
          const { videoId, channelId } = video
          return (
            <Link href={`/video/${videoId || channelId}`} key={i}>
              Dashboard
              <Card imgUrl={video.imgUrl} size={size} id={i} key={i} />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CardSection
