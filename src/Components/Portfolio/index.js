import axios from 'axios';
import React , {useState, useEffect} from 'react';
import { SectionPortfolio , PortfolioTittle , Span, PortfolioList , PortfolioItem , ImageWrapper , Image , Overlay , OverlaySpan } from "./style.js";



const  Portfolio = () =>  {
    
    const [ images , setImages ] = useState([]);

    useEffect(() => {
    axios.get('js/data.json').then( res => { setImages(res.data.portfolio) } );
    } , [] );

    const PortfolioImages = images.map( (imageItem)=>{
        return(
            <ImageWrapper key={imageItem.id} >
            <Image src={imageItem.image} alt=""/>
            <Overlay className="overlay">
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImageWrapper>
        )
    } )


    return (
        <SectionPortfolio>
            <PortfolioTittle><Span>My</Span> Portfolio</PortfolioTittle>
            <PortfolioList>
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
            <div className="box">
                {PortfolioImages}
            </div>
            
        </SectionPortfolio>
    );
}

export default Portfolio;
