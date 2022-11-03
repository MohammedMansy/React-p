import React , {Component} from 'react';
import axios from 'axios';
import { SocialSection , Social , Icon , SoicalDesc , Span } from "./style.js";



class SoicalMedia extends Component{
  state = {
    Soical : []
  }
  componentDidMount(){
    axios.get('js/data.json').then(res => {
      this.setState({ Soical : res.data.social});
    } );
  }

  render(){
    const {Soical} = this.state;
    const TheSoical = Soical.map( (socia) => {
      return(
        <Social item={socia.id} face key={socia.id} >
          <Icon className={socia.icon}></Icon>
          <SoicalDesc>
              <Span className="info1">{socia.title}</Span>
              <Span m = "info2">{socia.body}</Span>
          </SoicalDesc>
       </Social>
      )
    })

    return (
      <SocialSection>
       {TheSoical}
     </SocialSection>
 );
  }
   
}

export default SoicalMedia;
