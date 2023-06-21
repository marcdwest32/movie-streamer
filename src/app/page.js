import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import CardSection from './components/cardSection/cardSection'
import styles from './page.module.css'
import { getVideos, getPopularVideos } from './lib/videos'

const defaultImg =
  'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

// This gets called on every request
async function getData() {
  const kurzgesagtVideos = await getVideos('kurzgesagt')
  const marvelVideos = await getVideos('marvel comics')
  const nflVideos = await getVideos('nfl')
  const popularVideos = await getPopularVideos()
  return {
    results: { kurzgesagtVideos, marvelVideos, nflVideos, popularVideos },
  }
}

export default async function Home() {
  const videos = (await getData()) || []
  console.log(videos)
  const { kurzgesagtVideos, marvelVideos, nflVideos, popularVideos } =
    videos.results

  return (
    <main className={styles.main}>
      <Navbar username='Marc@gmail.com' />
      <Banner title='MeTube' subTitle='projector' imgUrl={defaultImg} />
      <div className={styles.sectionWrapper}>
        <CardSection title='Marvel' videos={marvelVideos} size='large' />
        <CardSection
          title='Kurzgesagt'
          videos={kurzgesagtVideos}
          size='small'
        />
        <CardSection title='NFL' videos={nflVideos} size='small' />
        <CardSection title='Popular' videos={popularVideos} size='medium' />
      </div>
    </main>
  )
}
