import styled from 'styled-components'
import { RootObject } from '../App'
import { Flex } from './common'
import {memo, useEffect, useState} from 'react'
import dataService from '../service/dataService'
import axios from 'axios'


export interface imageInterface {
    id: string
    urls: {
        small:string
    },
    url: string
}

function Card({title, seen, price, oldPrice, locality, date}:RootObject) {
    const [images, setImages] = useState([]);
    
 

    return (
        <CardWrapper seen={seen}>
            {seen && <SeenInfo>Просмотрено</SeenInfo>}
            <Slider width={'672px'}>
                
                {/* {images.map(i => {
                    return <Image key={i.id} src={i.url}/>
                })} */}
            </Slider>
           
            <CardInfoBlock>
                <Flex>
                    <div>
                        <Price >{oldPrice} ₽</Price>
                        <Price actual>{price} ₽</Price>
                    </div>
                </Flex>
                <CardTitle>{title}</CardTitle>
                <Flex>
                    <CardInfo>{locality}</CardInfo>
                    <CardInfo>{date}</CardInfo>
                </Flex>
            </CardInfoBlock>
        </CardWrapper>
    )
}

export default memo(Card)

const CardWrapper = styled.div<{seen?:boolean}>`
    display: flex;
    flex-direction: column;
    width: 224px;
    height: 368px;
    position: relative;
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
    border-radius: 8px;
    background-color:${({seen}) => seen ? '#FFF6A5;' : '#ffff'};
`
const CardInfoBlock = styled.div`
    padding: 1px 12px 12px 12px;
`

const Image = styled.img`
    min-width: 224px;
    height: 260px;
    background-color: #63c6f0;
    border-radius: 8px 8px 0 0;
    
`
const Slider = styled.div<{width?: string}>`
    display: flex;
    width: ${({width}) => width ? width : '224px'};
    border-radius: 8px 8px 0 0;
    transform: translateX(-224px);
    
`

const Price = styled.p<{actual?: boolean}>`
    margin: 0;
    font-style: normal;
    font-weight: 400;
    font-size:  ${({actual}) => actual ? '22px' : '14px'};
    line-height: 16px;
    color: #5A5A5A;
    text-decoration: ${({actual}) => actual ? 'none' : 'line-through'};
`
const CardTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #2C2C2C;
`

const CardInfo = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #8F8F8F;
`
 
const SeenInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 94px;
    height: 24px;
    background: rgba(44, 44, 44, 0.74);
    border-radius: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: #FFFFFF;
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
`









