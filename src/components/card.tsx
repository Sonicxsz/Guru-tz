import styled from 'styled-components'
import { RootObject } from '../App'
import { Flex, IconWrapper } from './common'
import {memo, useEffect, useState, useRef} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import dataService from '../service/dataService'
import axios from 'axios'
import DeleveryIcon from './icons/DeleveryIcon';
import ShieldIcon from './icons/ShieldIcon';


export interface imageInterface {
    id: string
    urls: {
        small:string
    }
}



function Card({title, seen, price, oldPrice, locality, date, images}:RootObject) {
    

    return (
        <CardWrapper seen={seen}>
            {seen && <SeenInfo>Просмотрено</SeenInfo>}
            <Slider>
                
                <Carousel showThumbs={false} showStatus={false}>
                    {images && images.map(i => {
                        return <Image key={i.id} src={i.urls.small} />
                    })}
                </Carousel>

            </Slider>
           
            <CardInfoBlock>
                <Flex>
                    <Flex fd='column'>
                        <Price >{oldPrice} ₽</Price>
                        <Price actual>{price} ₽</Price>
                    </Flex>
                    <Flex gap='8px'>
                        <IconWrapper>
                            <DeleveryIcon/>   
                        </IconWrapper>
                        <IconWrapper>
                            <ShieldIcon />
                        </IconWrapper>
                    </Flex>
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
    width: 224px;
    height: 260px;
    background-color: #63c6f0;
    border-radius: 8px 8px 0 0;
    
`
const Slider = styled.div<{width?: string, transX?: string}>`
    display: flex;
    height: 260px;
    width: 224px;
    border-radius: 8px 8px 0 0;
    transform:${({transX}) => transX ? `translateX(${transX})` : 'translateX(0)'};
    
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
    z-index: 1000;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
`









