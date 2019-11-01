import {useState, useEffect, useRef} from 'react';

function useJsonFetch(url, opts) {

    const [data, setData] = useState(opts.initialData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const timestampRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            const timestamp = Date.now();
            timestampRef.current = timestamp;
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                if (timestampRef.current === timestamp) {
                    const data = await response.json();
                    setData(data);
                }
                setError(null);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        return () => {  };
    }, [url]);

    return [data, loading, error];
}

export default useJsonFetch