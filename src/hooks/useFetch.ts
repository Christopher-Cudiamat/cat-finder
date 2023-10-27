/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useGlobalContext } from './useGlobalContext';

const useFetch = (endpoint: string, refetch?: boolean) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const { globalState, setGlobalState } = useGlobalContext();
  const abortController = new AbortController();

  useEffect(() => {
    if (endpoint === null) return;
    let mounted = true; // makes sure component is mounted

    const fetchData = async () => {
      try {
        if (mounted) setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}${endpoint}`, {
          headers: {
            'x-api-key': `${process.env.REACT_APP_API_KEY}`,
          },
        });

        if (!response.ok) throw new Error();

        const data = await response.json();

        if (mounted) setData(data);
      } catch (_) {
        if (mounted) setGlobalState({ ...globalState, error: true });
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
      abortController.abort(); // Cancel the request if component unmounts.
    };
  }, [endpoint, refetch]);

  return { data, loading };
};

export default useFetch;
