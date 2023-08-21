export const getCommonVideos = async (url) => {
  const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  const baseUrl = 'https://youtube.googleapis.com/youtube/v3/'

  const response = await fetch(`${baseUrl}${url}&key=${YOUTUBE_API_KEY}`)

  const data = await response.json()
  //   console.log(data)

  if (data?.error) {
    console.error('Something went wrong with the video library', data.error)
    return []
  }

  return data.items.map((item) => {
    // console.log(item)
    const id = item.id?.videoId || item.id
    return {
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      id,
      description: item.snippet.description,
      publishTime: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
      viewCount: item.statistics ? item.statistics.viewCount : 0,
    }
  })
}

export const getPopularVideos = async () => {
  const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=US`

  return getCommonVideos(url)
}

export const getVideoById = async (videoId) => {
  const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}`

  return getCommonVideos(url)
}

export const getVideos = (searchQuery) => {
  const url = `search?part=snippet&type=video&maxResults=5&q=${searchQuery}`
  return getCommonVideos(url)
}

// Testing
import videoData from '../data/videos.json'

export const getTestVideos = (category) => {
  return videoData[category].items.map((item) => {
    const id = item.id?.videoId || item.id
    return {
      id,
      title: item.snippet.title,
      imgUrl: item.snippet.thumbnails.high.url,
      description: item.snippet.description,
      publishTime: item.snippet.publishedAt,
      channelTitle: item.snippet.channelTitle,
      viewCount: item.statistics ? item.statistics.viewCount : 0,
    }
  })
}
