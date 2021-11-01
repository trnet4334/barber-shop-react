import React, { useState, useEffect } from "react";
import axios from "axios";

const useUserDataApi = () => {
    const [ data, setData ] = useState([])
    const [ url, setUrl ] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)
    const [ isError, setIsError ] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setIsError(false)

            try {
                await axios({
                    method: 'GET',
                }).then((res) => {
                    setData(res.data)
                })
            } catch (err) {
                setIsError(true)
            }

            setIsLoading(false)
        }

        fetchData()
    }, [])

    return [{ data, isLoading, isError }, setUrl]
}
