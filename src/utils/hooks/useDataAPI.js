import { useEffect, useState } from 'react';

export default function useDataAPI(callback) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const results = await callback();
      setData(results);
    }
    fetchData();
  }, []);

  return data;
}
