/* eslint-disable import/prefer-default-export */
import { useEffect, useState } from 'react';

export const useAsyncFetch = <TData>(url: string) => {
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState<TData>();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setApiData(data);
      });
  }, [url]);

  return { loading, apiData };
};
