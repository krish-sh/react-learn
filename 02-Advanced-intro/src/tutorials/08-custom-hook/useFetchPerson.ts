import { useEffect, useState } from "react";

const useFetchPerson = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          setIsLoading(false);
          setIsError(true);
          return;
        }

        const u = await res.json();

        setData(u);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { isLoading, isError, data };
};

export default useFetchPerson;
