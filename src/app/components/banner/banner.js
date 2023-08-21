'use client'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Banner = (props) => {
  const { title, subTitle, imgUrl, videoId } = props
  const router = useRouter()

  const handlePlay = () => {
    router.push(`/video/${videoId}`)
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          <div className={styles.nseriesWrapper}>
            <p className={styles.firstLetter}>M</p>
            <p className={styles.series}>S E R I E S</p>
          </div>
          <h3 className={styles.title}>{title}</h3>
          <h3 className={styles.subTitle}>{subTitle}</h3>
          <div className={styles.playBtnWrapper}>
            <button className={styles.btnWithIcon} onClick={handlePlay}>
              <Image
                src='/static/play.svg'
                alt='play icon'
                width={32}
                height={32}
              ></Image>
              <span className={styles.playText}>Play</span>
            </button>
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: '100%',
          height: '100%',
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
        }}
      ></div>
    </div>
  )
}

export default Banner
