import styled from 'styled-components'

export const StyledHeader = styled.header`    
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #000;
  border: 1px #ccc solid;
  color: #fff;

    div {
        flex: 2;
        text-align: center;
    }

    .logo {
        width: 80px;
        height: 60px;
    }

    span {
        margin-right: 10px;
    }

    span:hover {
        font-weight: bold;
        cursor: pointer;
    }
`

export const StyledSearch = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 10px;
    background-color: #fff;
    border: 1px #ccc solid;

    div {
        margin: 10px;
    }

    @media (max-width: 468px) {
        display: block;
        text-align: center;
    }
`

export const StyledComparator = styled.section`
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    border: 1px #ccc solid;
    align-items: center;
    flex-wrap: wrap;

    .boxA {
        flex: 3;
        text-align: center;
        font-size: 16px;
    }

    .boxB {
        flex: 3;
        text-align: center;
        font-size: 16px;
    }

    span {
        flex: 1;
        text-align: center;
    }

    @media (max-width: 799px) {
        span {
            display: none;
        } 
    }

`
export const StyledPageResult = styled.section`
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    border: 1px #ccc solid;
    align-items: center;
    flex-wrap: wrap;
`

export const StyledRam = styled.div`
    span {
        font-size:18px;
    }
    input {
        margin: 10px;
    }
`