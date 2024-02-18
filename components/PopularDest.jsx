import DestinationCards from "./DestinationCards"

const PopularDest = () => {
  return (
    <section className="pop_dest" id="pop_dest">
      <div className="subheadtext">
        Popular Destinations
      </div>
      <div className="destination">
        <DestinationCards />
      </div>
    </section>
  )
}

export default PopularDest
