/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useGlobalContext } from './useGlobalContext';

const useFetch = (endpoint: string, refetch?: boolean) => {
  const [data, setData] = useState<any>([]);
  const { globalState, setGlobalState } = useGlobalContext();

  useEffect(() => {
    if (endpoint === null) return;
    let mounted = true; // makes sure component is mounted

    const fetchData = async () => {
      try {
        setGlobalState({ ...globalState, loading: true });
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
        if (mounted) setGlobalState({ ...globalState, loading: false });
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [endpoint, refetch]);

  return { data };
};

export default useFetch;
