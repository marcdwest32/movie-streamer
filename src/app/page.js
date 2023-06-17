import Navbar from './components/nav/navbar'
import Banner from './components/banner/banner'
import Card from './components/card/card'

export default function Home() {
  return (
    <main>
      <Navbar username='Marc@gmail.com' />
      <Banner
        title='Clifford the Big Red Dog'
        subTitle='big red dog'
        imgUrl='/static/clifford.webp'
      />
      <Card imgUrl='/static/clifford.webp' size='large' />
      <Card size='medium' />
      <Card imgUrl='/static/clifford.webp' size='small' />
    </main>
  )
}
