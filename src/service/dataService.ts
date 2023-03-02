import axios from "axios";
import { useState } from "react";
import { RootObject } from "../App";
function dataService () {
    const [loading, setLoading] = useState(false);
    const [isEnd, setIsEnd] = useState(false)
    const _api = `https://6075786f0baf7c0017fa64ce.mockapi.io/products?page=`;
    const _offset = 1

    const getData = async (offset = _offset) => {
        setLoading(true)
        const {data} = await axios.get<RootObject[]>(`${_api}${offset}&limit=12`)
        setLoading(false)
        if(data.length < 12){
            setIsEnd(true)
        }
        return data

    }


    return {getData, loading, isEnd}
}

export default dataService