import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState<never[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url == null) return;
    let mounted = true; // makes sure component is always mounted

    const fetchData = async () => {
      try {
        if (mounted) setLoading(true);
        const response = await fetch(url);
        const data = await response.json();

        if (mounted) setData(data);
      } catch (error) {
        if (mounted) setError(true);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
