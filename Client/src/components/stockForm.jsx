import { useState } from "react";

function stockForm({addStock}){
    // declare useState
  const [stockName, setstockName] = useState("");
  const [price, setPrice] = useState(0);
  const [trend, setTrend] = useState(false);
    // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // add newStock
        const newStock = {
      id: Date.now(),
      stockName: stockName,
      price: price,
      trend: trend,
    };


    AddStock(newStock);
};
    // return the form
    return (
        <form onSubmit={handleSubmit}>
            <h3>add a new stock</h3>

            <div>
                <label>Stock Name:</label>
                <input
                type="text"
                value={stockName}
                onChange={(e) => setstockName(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Stock Price:</label>
                <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
            </div>

            <div>
                <label>Trends:</label>
                <input
                type="text"
                value={trend}
                onChange={(e) => setTrend(e.target.value)}
                required
                />
            </div>
        </form>
    )
}

export default stockForm;