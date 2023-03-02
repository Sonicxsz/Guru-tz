import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 156px;
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

export const Flex = styled.div<{gap?: string}>`
    display: flex;
    gap: ${({gap}) => gap ? gap : '0'};
    justify-content: space-between;
`