import { useEffect, useState } from "react";
import { imageInterface } from "../components/card";
import dataService from "../service/dataService";

export interface RootObject {
    id: string;
    oldPrice: string;
    price: string;
    title: string;
    seen: boolean;
    locality: string;
    date: number;
    images?: imageInterface[]
}


export function useFetchData () {
    const [items, setItems] = useState<RootObject[]>([])
    const [offset, setOffset] = useState(1);
    const [images, setImages] = useState<imageInterface[]>([])
    const {getData, getImages, loading, isEnd} = dataService();
   
    const handleIncOffset = () => {
        setOffset(offset => ++offset)
    }

    useEffect(() => {
        getImages().then(data => setImages(data))
    },[])

    useEffect(() => {
        getData(offset).then(data => data && setItems([...items, ...data]))
    }, [offset])


    return {items,handleIncOffset,images, loading, isEnd}
}