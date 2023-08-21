'use client'
import React from 'react'
import Modal from 'react-modal'
import cls from 'classnames'
import styles from './video.module.css'
import { useRouter } from 'next/navigation'

Modal.setAppElement('#__next')

const Video = ({ videoId, videoData }) => {
  const router = useRouter()
  if (!videoData) {
    return <div>Loading...</div>
  }

  const { title, publishTime, description, channelTitle, viewCount } =
    videoData.video

  return (
    <div className={styles.container}>
      video page {videoId}
      <Modal
        isOpen={true}
        contentLabel='Watch Video'
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id='player'
          className={styles.videoPlayer}
          type='text/html'
          width='100%'
          height='390'
          src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com&controls=0&rel=0`}
        ></iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={cls(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={cls(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Video
