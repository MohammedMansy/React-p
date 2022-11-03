import styled from 'styled-components';

export const SectionAbout = styled.section`
    height: 500px;
    background: url('images/about-bg.jpg'); 
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    @media (max-width:991px) {
            height: auto;
    }
`
export const AboutInfo = styled.div`
    width: 50%;
    float: right;
    @media (max-width:991px) {
            width: 100%;
            padding-top: 10px;
            float: none
        }
`
export const InfoTittle = styled.h2`
    font-weight: bold;
    font-size: 50px;
`
export const Span = styled.span`
    font-weight: normal;
`
export const InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 10px;
    @media (max-width:991px) {
            font-size: 30px
        }
`
export const InfoDesc = styled.p`
color: #000;
margin-bottom: 15px;
line-height: 1.8;
`
