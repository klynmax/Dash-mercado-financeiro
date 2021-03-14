import api from './../../shared/axios';
import { useState, useEffect } from "react";

export const OcorrenciaDolar = () => {
    const [ repositoryList, setRepositoryList] = useState([])

    useEffect(() => {
        api.get("all/USD-BRL")
        .then((response) => { setRepositoryList(response.data) })
        .catch((err) => {
            console.log(err)
        })
    },[])
    
    return repositoryList;
}