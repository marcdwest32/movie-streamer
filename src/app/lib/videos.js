// export const getCommonVideos = async (url) => {
//   const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
//   const baseUrl = 'https://youtube.googleapis.com/youtube/v3/'

//   const response = await fetch(`${baseUrl}${url}&key=${YOUTUBE_API_KEY}`)

//   const data = await response.json()

//   if (data?.error) {
//     console.error('Something went wrong with the video library', data.error)
//     return []
//   }

//   return data.items.map((item) => {
//     // console.log(item)
//     const id = item.id?.videoId || item.id
//     return {
//       title: item.snippet.title,
//       imgUrl: item.snippet.thumbnails.high.url,
//       id,
//     }
//   })
// }

// export const getPopularVideos = async () => {
//   const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US`
//   return getCommonVideos(url)
// }

// export const getVideos = (searchQuery) => {
//   const url = `search?part=snippet&type=video&maxResults=25&q=${searchQuery}`
//   return getCommonVideos(url)
// }

// Testing
import videoData from '../data/videos.json'

export const getVideos = (category) => {
  return videoData[category].items.map((item) => {
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      videoId: item?.id?.videoId,
      channelId: item?.id?.channelId,
    }
  })
}
