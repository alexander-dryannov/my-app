import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetch(data) {
    const [fetchingData, setFetchingData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const [errorFetching, setErrorFetching] = useState(null)

    useEffect(() => {
        if(fetching) {
            axios.get(`${data.link}?_limit=${data.limit}&_page=${currentPage}`)
                .then(response => {
                    setFetchingData([...fetchingData, ...response.data])
                    setCurrentPage(prevState => ++prevState)
                    setTotalCount(response.headers['x-total-count'])
                })
                .catch((err) => {
                    if (err.response) {
                        setErrorFetching('Код ошибки ' + err.response.status)
                    } else if (err.request) {
                        setErrorFetching('Не удается получить доступ к сайту')
                    } else {
                        setErrorFetching(err.message)
                    }
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 && fetchingData.length < totalCount) {
            setFetching(true)
        }
    }
    return [fetchingData, errorFetching]
}
