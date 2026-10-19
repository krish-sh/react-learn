import { useEffect, useState } from "react";

const useFetch = (url: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          setIsLoading(false);
          setIsError(true);
        }

        const response = await res.json();

        setData(response);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { isLoading, isError, data };
};

export default useFetch;
