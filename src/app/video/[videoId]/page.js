'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Video from '../../components/video/video'
import { getVideoById } from '../../lib/videos'

export async function getVideo(videoId) {
  const videoArr = await getVideoById(videoId)

  return {
    video: videoArr.length > 0 ? videoArr[0] : {},
    revalidate: 10, // in seconds
  }
}

const VideoPage = ({ params }) => {
  const { videoId } = params
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    async function fetchVideoData() {
      const data = await getVideo(videoId)
      setVideoData(data)
    }

    fetchVideoData()
  }, [])

  return <Video videoId={videoId} videoData={videoData} />
}

export default VideoPage
