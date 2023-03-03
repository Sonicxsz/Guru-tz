import styled from "styled-components";

interface IFlex {
    gap?: string,
    justify?: string,
    margin?:string,
    fd?:string
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 156px 33px 156px;
    max-width: 968px;
    height: 100%;
    margin: 0 auto;
    
`

export const MainTitle = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    color: #2C2C2C;
    margin-left: 33px;
`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    gap: 24px;
    flex-wrap: wrap;
    margin: 0 auto;
`

export const Flex = styled.div<IFlex>`
    display: flex;
    gap: ${({gap}) => gap ? gap : '0'};
    justify-content:${({justify}) => justify ? justify : 'space-between'};
    margin: ${({margin}) => margin ? margin : '0'};
    flex-direction: ${({fd}) => fd ? fd : 'row'};
    color: red;
`

export const MoreButton = styled.button<{dis?:boolean}>`
    width: 130px;
    min-height: 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #00A0AB;
    border: unset;
    cursor: pointer;
    align-self: flex-end;
    border-radius: 5px;
    background: unset;
    transition: background-color 0.2s linear;
    filter: ${({dis}) => dis ? 'grayscale(1)' : ''};
    :hover{
        background-color: #eff3f9;
    }
`

export const CenterWrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`

export const IconWrapper = styled.div`
    color:${({color}) => color ? color : '#C7C7C7'};
    cursor: pointer;
    transition: color 0.2s linear;
    :hover{
        color: #03c516
    }
`

