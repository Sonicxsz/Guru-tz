import axios from "axios";
import { useState } from "react";
import { RootObject } from "../App";
import { imageInterface } from "../components/card";

function dataService () {
    const [loading, setLoading] = useState(false);
    const [isEnd, setIsEnd] = useState(false);
    const _offset = 1;

    const _apiItems = `https://6075786f0baf7c0017fa64ce.mockapi.io/products?page=`;
    const _apiImages = 'https://api.unsplash.com/photos/random?count=4&client_id=';
    const _apiKeyImages = 'zRoV4u-cO1tHzilg-64lUp4h5JHgJw2NI1NoWAD-ZfM';

    const getData = async (offset = _offset) => {
        try{
            setLoading(true)
            const {data} = await axios.get<RootObject[]>(`${_apiItems}${offset}&limit=12`)
            setLoading(false)
            if(data.length < 12){
                setIsEnd(true)
            }
            return data
        }catch(error){
            throw new Error('Somethink went wrong')
        }
        
       

    }
    const getImages = async () => {
        try{
            const {data} = await axios.get<imageInterface[]>
            (`${_apiImages}${_apiKeyImages}`)

            return data
        }catch(error){
            throw new Error(`Somethink went wrong when receiving images: on url ${_apiImages}`);
        }
    }
   
  


    return {getData, loading, isEnd, getImages}
}

export default dataService