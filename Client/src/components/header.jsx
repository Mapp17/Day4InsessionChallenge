import { useEffect, useState } from "react";

function useStockPrice()
{
    const[interval, setInterval] = useState(2);
    useEffect(() => {
    const timer = setInterval(() => {
      console.log("Heartbeat: stocks are live");
    }, 2000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup: Heartbeat stopped");
    };
  }, []);

  return (
    <header>
      <h1>Stock Dashboard</h1>
    </header>
  );
}
export default useStockPrice;
