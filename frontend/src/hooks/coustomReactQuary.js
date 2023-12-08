import { useState, useEffect } from "react";
import axios from "axios";

const coustomReactQuery = (urlPath) => {
  console.log(urlPath);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        if (axios.isCancel(err)) {
          console.log(err);
          return;
        }
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [urlPath]);
  return [products, loading, error];
};

export default coustomReactQuery;
