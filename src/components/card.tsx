import {memo} from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Flex, IconWrapper, PositonAbsWrapper } from './common';
import { Carousel } from 'react-responsive-carousel';
import {ReactComponent as RaitingIcon} from '../assets/svg/RaitingIcon.svg';
import {ReactComponent as HeartIcon} from '../assets/svg/HeartIcon.svg';
import {ReactComponent as ShieldIcon} from '../assets/svg/ShieldIcon.svg';
import {ReactComponent as DeleveryIcon} from '../assets/svg/DeleveryIcon.svg';
import { RootObject } from '../hooks/useFetchData';

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
                <PositonAbsWrapper>
                    <Flex fd='column' justify='flex-end'  gap='8px'>
                        <IconWrapper color='#fff'>
                            <RaitingIcon/>   
                        </IconWrapper>
                        <IconWrapper color='#fff'>  
                            <HeartIcon />
                        </IconWrapper>
                    </Flex>
                </PositonAbsWrapper>
            </Slider>
            
            <CardInfoBlock>
                <Flex>
                    <Flex fd='column'>
                        <Price >{oldPrice} ₽</Price>
                        <Price actual>{price} ₽</Price>
                    </Flex>
                    <Flex gap='12px'>
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
    object-fit: cover;
    
`
const Slider = styled.div<{width?: string, transX?: string}>`
    display: flex;
    border-radius: 8px 8px 0 0;
    transform:${({transX}) => transX ? `translateX(${transX})` : 'translateX(0)'};
    
`

const Price = styled.p<{actual?: boolean}>`
    margin: 0;
    margin-top: ${({actual}) => actual ? '5px' : '1px'};
    font-weight: 400;
    font-size:  ${({actual}) => actual ? '22px' : '14px'};
    line-height: 16px;
    color:${({actual}) => actual ? '#2C2C2C' : '#5A5A5A'};
    text-decoration: ${({actual}) => actual ? 'none' : 'line-through'};
`
const CardTitle = styled.p`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #2C2C2C;
`

const CardInfo = styled.span`
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









