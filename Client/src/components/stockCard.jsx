function stockCard({
    stockName,
    price,
    trend
    
}){
  // return stockCard  
    return(
    <div>
        <h3>{stockName}</h3>
        <p>Date: {price} </p>
        <p>Trend: {trend}</p>


    </div> 
    )
}

export default stockCard;