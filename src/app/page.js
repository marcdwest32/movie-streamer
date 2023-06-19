import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import CardSection from './components/cardSection/cardSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Navbar username='Marc@gmail.com' />
      <Banner
        title='Clifford the Big Red Dog'
        subTitle='big red dog'
        imgUrl='/static/clifford.webp'
      />
      <div className={styles.sectionWrapper}>
        <CardSection title='Disney' />
      </div>
    </main>
  )
}
