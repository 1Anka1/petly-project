import { useEffect, useState } from 'react';

export default function useDataAPI(callback) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const results = await callback();
        setData(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [callback]);

  return { isLoading, data };
}
