import axios from "axios";
import { useState } from "react";
import { RootObject } from "../App";
import { imageInterface } from "../components/card";
function dataService () {
    const [loading, setLoading] = useState(false);
    const [isEnd, setIsEnd] = useState(false)
    const _api = `https://6075786f0baf7c0017fa64ce.mockapi.io/products?page=`;
    const _apiKeyImages = 'zRoV4u-cO1tHzilg-64lUp4h5JHgJw2NI1NoWAD-ZfM'
    const _offset = 1

    const getData = async (offset = _offset) => {
        setLoading(true)
        const {data} = await axios.get<RootObject[]>(`${_api}${offset}&limit=1`)
        setLoading(false)
        if(data.length < 12){
            setIsEnd(true)
        }
        return data

    }
    const getImages = async () => {
        const {data} = await axios.get<imageInterface[]>
        (`https://api.unsplash.com/photos?client_id=${_apiKeyImages}`)

        return data

    }
   
  


    return {getData, loading, isEnd, getImages}
}

export default dataService