import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import CardSection from './components/cardSection/cardSection'
import styles from './page.module.css'
import { getVideos } from './lib/videos'

export default function Home() {
  const videos = getVideos()
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

  return (
    <main>
      <Navbar username='Marc@gmail.com' />
      <Banner
        title='Clifford the Big Red Dog'
        subTitle='big red dog'
        imgUrl='/static/clifford.webp'
      />
      <div className={styles.sectionWrapper}>
        <CardSection title='Space' videos={videos} size='large' />
        <CardSection title='Disney' videos={disneyVideos} size='medium' />
      </div>
    </main>
  )
}
