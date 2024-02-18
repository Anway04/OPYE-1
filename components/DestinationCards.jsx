const DestinationCards = () => {
  return (
    <div className="card_frame">
      <div className="card card_blore">
        <img src="./assets/images/pondi.png" alt="" />
        {/* <img src={blore} alt="" /> Couldnt resolve dynamic routes  */} 
        <div className="loc">
          PONDICHERRY
        </div>
      </div>
      <div className="card card_blore">
        <img src="./assets/images/blore.png" alt="" />
        {/* <img src={blore} alt="" /> Couldnt resolve dynamic routes  */} 
        <div className="loc">
          BENGALURU
        </div>
      </div>
      <div className="card card_blore">
        <img src="./assets/images/kkl.png" alt="" />
        {/* <img src={blore} alt="" /> Couldnt resolve dynamic routes  */} 
        <div className="loc">
          KODAIKANAL
        </div>
      </div>
    </div>
  )
}

export default DestinationCards
