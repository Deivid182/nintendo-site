import Games from './components/games'
import Header from './components/header'
import Ribbon from './components/ribbon'
import Slider from './components/slider'
import SeparatorAmiibos from './components/separator-amibbos'
import PlayNintendo from './components/play-nintendo'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <Ribbon />
      <Games />
      <SeparatorAmiibos />
      <PlayNintendo />
      <Footer />
    </>
  )
}

export default App