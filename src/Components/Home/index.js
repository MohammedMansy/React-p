import React from 'react';
import { HomeSection , HomeInformation , HomeTittle , HomeInfo , HomeDesc, HomeBtn } from './style.js'

const  Home = () =>  {
    return (
      <HomeSection>
        <div className='container'>
          <HomeInformation >
            <HomeTittle> Home Tittle </HomeTittle> 
            <HomeInfo> Creative Director </HomeInfo>
            <HomeDesc>
               I am a professional UX Desinger and Front-End Developer Creating modern and responsive design to Web and Mobile
               .Let us work together Thank you 
            </HomeDesc>
            <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>  
        </div> 
      </HomeSection>
    );
}

export default Home;
