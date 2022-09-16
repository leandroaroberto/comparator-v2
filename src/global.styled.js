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

    .title {
        text-decoration: none;
        color: #fff;
        font-size: 54px;
        font-weight: 600;
    }

    .login {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        margin-right: 20px;
    }

    .login:hover {
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

     .button {
        display: flex;
        justify-content: center;
        align-items: center;
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

export const StyledNoMatch = styled.div`    
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    border: 1px #ccc solid;
    align-items: center;

    p {
        text-align: center;
        font-size: 36px;
        cursor: pointer;
    }

    p .link{
        text-decoration: none;
        color: black;
    }

    img {
        width: 100%;
        height: 800px;
    }
`

export const StyledLogin = styled.div`    
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #fff;
    border: 1px #ccc solid;
    align-items: center;

    h1 {
        font-size: 36px;
        font-weight: 600;
    }

    form div {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        font-size: 16px;
        align-items: center;
    }

    form input {
        width: 300px;
        height: 15px;
        font-size:16px;
        padding: 10px;
    }

    form button {
        width: 100%;
        font-size: 16px;
        font-weight: 600;
        height: 40px;
        background-color: #0B5ED7;
        color: #fff;
        border-radius: 6px;
        border: 1px #0B5ED7 solid;
        
        &:hover {
            color: #000;
            background-color: #ccc;
            font-weight: 600;
        }
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
    }    
`
