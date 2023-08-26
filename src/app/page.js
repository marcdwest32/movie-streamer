'use client'
import { useEffect, useState } from 'react'
import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import CardSection from './components/cardSection/cardSection'
import styles from './page.module.css'
import { getVideos, getTestVideos, getPopularVideos } from './lib/videos'
import { useSession } from 'next-auth/react'
import { queryHasuraGQL } from './lib/db/hasura'

const isDev = process.env.DEVELOPMENT

const defaultImg =
  'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

// This gets called on every request
async function getData() {
  let kurzgesagtVideos = null
  let marvelVideos = null
  let nflVideos = null
  let starTrekVideos = null
  let popularVideos = null

  if (isDev === false) {
    kurzgesagtVideos = await getVideos('kurzgesagt')
    marvelVideos = await getVideos('marvel comics')
    nflVideos = await getVideos('nfl')
    starTrekVideos = await getVideos('star trek')
    popularVideos = await getPopularVideos()
  } else {
    kurzgesagtVideos = getTestVideos('kurzgesagt')
    marvelVideos = getTestVideos('marvel')
    nflVideos = getTestVideos('nfl')
    starTrekVideos = getTestVideos('space')
    popularVideos = getTestVideos('popular')
  }
  return {
    results: {
      kurzgesagtVideos,
      marvelVideos,
      nflVideos,
      starTrekVideos,
      popularVideos,
    },
  }
}

export default function Home() {
  const { data: session } = useSession()
  let authenticated = false
  if (session) {
    // console.log({ session })
    authenticated = true
  }

  queryHasuraGQL()

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
    starTrekVideos,
  } = videos

  return (
    <main className={styles.main}>
      <Navbar />
      <Banner
        title='YouTube'
        subTitle='projector'
        imgUrl={defaultImg}
        videoId='V4Z8EdiJxgk'
      />
      {authenticated && (
        <div className={styles.sectionWrapper}>
          <CardSection title='Marvel' videos={marvelVideos} size='large' />
          <CardSection
            title='Kurzgesagt'
            videos={kurzgesagtVideos}
            size='small'
          />
          <CardSection title='NFL' videos={nflVideos} size='small' />
          <CardSection
            title='Star Trek'
            videos={starTrekVideos}
            size='medium'
          />
          <CardSection title='Popular' videos={popularVideos} size='medium' />
        </div>
      )}
    </main>
  )
}
