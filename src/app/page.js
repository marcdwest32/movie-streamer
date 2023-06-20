import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import CardSection from './components/cardSection/cardSection'
import styles from './page.module.css'
import { getVideos } from './lib/videos'

const defaultImg =
  'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

// This gets called on every request
async function getData() {
  const data = await getVideos() // The return value is *not* serialized
  return data
}

export default async function Home() {
  const disneyVideos = [
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
    {
      imgUrl: '/static/clifford.webp',
    },
  ]
  const videos = (await getData()) || []

  return (
    <main>
      <Navbar username='Marc@gmail.com' />
      <Banner title='MeTube' subTitle='projector' imgUrl={defaultImg} />
      <div className={styles.sectionWrapper}>
        <CardSection title='Space' videos={videos} size='large' />
        <CardSection title='Disney' videos={disneyVideos} size='medium' />
      </div>
    </main>
  )
}
