'use client'
import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Video from '../../components/video/video'

export async function getVideo() {
  const video = {
    title: 'this is the title',
    publishTime: '1990-01-01',
    description: 'this is the description',
    channelTitle: 'Picture Company',
    viewCount: 100000,
  }

  return {
    video,
    revalidate: 10, // in seconds
  }
}
const VideoPage = () => {
  const fullPath = usePathname()
  const videoId = fullPath.split('video/')[1]
  const [videoData, setVideoData] = useState(null)

  useEffect(() => {
    async function fetchVideoData() {
      const data = await getVideo()
      setVideoData(data)
    }

    fetchVideoData()
  }, [])

  return <Video videoId={videoId} videoData={videoData} />
}

export default VideoPage
//   const res = await fetch('https://api.example.com/..., { next: { revalidate: 10 } }')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()

// // export async function generateStaticParams() {
// //   const listOfVideos = ['uoJwt9l-XhQ', 'V4Z8EdiJxgk', '9FppammO1zk']
// //   const paths = listOfVideos.map((videoId) => ({
// //     params: {
// //       videoId,
// //     },
// //   }))
// //   return { paths, fallback: 'blocking' }
// // }

// const getPathname = () => {
//   const fullPath = usePathname()
//   const videoId = fullPath.split('video/')[1]
//   return videoId
// }
