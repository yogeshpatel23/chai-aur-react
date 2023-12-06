import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((conv) => setData(conv[currency]))
      .catch((err) => console.log(err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
