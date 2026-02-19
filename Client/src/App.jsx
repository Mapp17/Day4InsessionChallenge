import { useState, useEffect } from 'react';
import Header from "./components/header";
import stockList from './components/stockList';
import stockForm from './components/stockForm';

function App() {
  const [stocks, setStocks] = useState([]);


  useEffect(() => {
    const fetchStocks = async () => {


      const mockApiResponse = [
        { id: 1, stockName: "Canes", Price: 12000 , Trends: true },
        { id: 2, stockName: "KFC", Price: 5000, Trends: true},
      ];

        setStocks(mockApiResponse);

    };

    fetchStocks();
  }, []);

  const addStock = (newStock) => {
    setStocks([...stocks, newStock]);
      
  }
  return (
    <div>
      <Header />
      <stockList />
      <stockForm onAdd = {addStock}/>
    </div>
   
  )
};

export default App;
