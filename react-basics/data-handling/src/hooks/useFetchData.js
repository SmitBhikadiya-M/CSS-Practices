import axios from 'axios'
import { useState } from 'react'

export const useFetchData = () => {

    const [state, setState] = useState({
        loading: false,
        data: null,
        error: null
    });

    const fetch = (options = {}) => {
        if (!options.headers) {
            options.headers = {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
        setState({ ...state, loading: true })
        return new Promise((resolve, reject) => {
            axios(options).then((res) => {
                resolve(res.data);
            }).catch((err) => {
                console.log(err);
                reject({ message: err.message, status: err.response?.status });
            }).finally(() => {
                setState((prev) => { return { ...prev, loading: false } })
            })
        })
    };
    return { ...state, fetch }
}