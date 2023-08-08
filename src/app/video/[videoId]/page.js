'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import Modal from 'react-modal'
import styles from './video.module.css'
Modal.setAppElement('#__next')

const Video = () => {
  const router = useRouter()
  const fullPath = usePathname()
  const pathname = fullPath.split('video/')[1]
  console.log(pathname)
  //   console.log({ router })
  return (
    <div>
      video page {pathname}
      <Modal
        isOpen={true}
        contentLabel='Watch Video'
        onRequestClose={() => router.back()}
        overlayClassName={styles.overlay}
      >
        <div>Modal Body</div>
      </Modal>
    </div>
  )
}

export default Video
