import styled from 'styled-components';

export const HomeSection = styled.section`
height: 500px;
background-image: url('images/home-bg.jpg');
background-size: cover;
background-position: center;
position: relative;
text-align: center;
`
export const HomeInformation = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`
export const HomeTittle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
`
export const HomeInfo = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
`
export const HomeDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
`

export const HomeBtn = styled.button`
color: #eb5424;
font-size: 18px;
width: 150px;
padding: 15px;
border-radius: 7px;
cursor: pointer;
font-weight: bold;
transition: 0.3s;
border: 1px solid #888;
&:hover{
    background-color: #eb5424;
    color: #fff;
}
`
