import stockCard from "./stockCard";

function stockList({stocks}){

    //return stockList
    <div>
        {stocks.map((s) => (
            <stockCard
                key = {s.id}
                stockName = {s.stockName}
                price = {s.price}
                trend = {s.trend} 
            />
        ))}
    </div>
}

export default stockList;