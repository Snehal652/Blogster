import { useEffect, useState } from "react"


const useFetch = (url) => {

    const [input, setInput] = useState(null);
    const [isPending, setIspending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {

            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could Not Fetch the resource')
                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data)
                    setInput(data)
                    setIspending(false)
                    setError(null)
                })

                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        // auto catches network / connection error
                        setIspending(false);
                        setError(err.message);
                    }
                })
        }, 1000)


        // abort the fetch
        return () => abortCont.abort();
    }, [url])

    return { input, isPending, error }
}

export default useFetch
