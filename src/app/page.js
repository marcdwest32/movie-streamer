import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'

export default function Home() {
  return (
    <main>
      <Navbar username='Marc@gmail.com' />
      <Banner
        title='Clifford the Big Red Dog'
        subTitle='big red dog'
        imgUrl='/static/clifford.webp'
      />
      {/* <Card/> */}
    </main>
  )
}
