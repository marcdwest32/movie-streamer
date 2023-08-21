'use client'
import { useEffect, useState } from 'react'
import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import CardSection from './components/cardSection/cardSection'
import styles from './page.module.css'
import { getVideos, getTestVideos, getPopularVideos } from './lib/videos'
import { useSession } from 'next-auth/react'

const defaultImg =
  'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

// production
// This gets called on every request
// async function getData() {
//   const kurzgesagtVideos = await getVideos('kurzgesagt')
//   const marvelVideos = await getVideos('marvel comics')
//   const nflVideos = await getVideos('nfl')
//   const popularVideos = await getPopularVideos()
//   return {
//     results: { kurzgesagtVideos, marvelVideos, nflVideos, popularVideos },
//   }
// }

// Testing
async function getData() {
  const kurzgesagtVideos = getTestVideos('kurzgesagt')
  const marvelVideos = getTestVideos('marvel')
  const nflVideos = getTestVideos('nfl')
  const spaceVideos = getTestVideos('space')
  return {
    results: {
      kurzgesagtVideos,
      marvelVideos,
      nflVideos,
      spaceVideos,
    },
  }
}

export default function Home() {
  const { data: session } = useSession()
  let authenticated = false
  if (session) {
    authenticated = true
  }

  const [videos, setVideos] = useState(null)

  useEffect(() => {
    // Function to fetch data asynchronously
    async function fetchData() {
      const data = await getData()
      setVideos(data.results)
    }

    fetchData()
  }, [])

  if (!videos) {
    return <div>Loading...</div>
  }

  const {
    kurzgesagtVideos,
    marvelVideos,
    nflVideos,
    popularVideos,
    spaceVideos,
  } = videos

  return (
    <main className={styles.main}>
      <Navbar />
      <Banner
        title='MeTube'
        subTitle='projector'
        imgUrl={defaultImg}
        videoId='V4Z8EdiJxgk'
      />
      {authenticated && (
        <div className={styles.sectionWrapper}>
          <CardSection
            title='Marvel'
            videos={marvelVideos}
            // paths={paths}
            size='large'
          />
          <CardSection
            title='Kurzgesagt'
            videos={kurzgesagtVideos}
            size='small'
          />
          <CardSection title='NFL' videos={nflVideos} size='small' />
          <CardSection title='Space' videos={spaceVideos} size='medium' />
          {/* <CardSection title='Popular' videos={popularVideos} size='medium' /> */}
        </div>
      )}
    </main>
  )
}
