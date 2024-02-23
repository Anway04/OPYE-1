import HottestDeals from '@/components/HottestDeals'
import Landing from '@/components/Landing'
import PopularDest from '@/components/PopularDest'

const Home = () => {
    return (
      <section className="home" id="home">
        <Landing />
        <PopularDest />
        <HottestDeals/>
      </section>
    )
}

export default Home
