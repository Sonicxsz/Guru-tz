import styled from 'styled-components'
import { RootObject } from '../App'
export default function Card({title, seen, price, oldPrice, locality, date}:RootObject) {
    return (
        <CardWrapper>
            <Image />
            <CardInfoBlock>
                <div>
                    <Price >{oldPrice}</Price>
                    <Price actual>{price}</Price>
                </div>
                <CardTitle>{title}</CardTitle>
                <CardInfo>{locality}</CardInfo>
                <CardInfo>{date}</CardInfo>
            </CardInfoBlock>
        </CardWrapper>
    )
}


const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 224px;
    height: 368px;
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
    border-radius: 8px;
    background-color: #ffffff;
`
const CardInfoBlock = styled.div`
    padding: 1px 12px 12px 12px;
`

const Image = styled.img`
    width: 224px;
    height: 260px;
    background-color: #f2e584;
    border-radius: 8px 8px 0 0;
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













