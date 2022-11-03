import React , {Component} from 'react';
import axios from 'axios'; 
import { WorkSection , WorkTittle , Span , Part , Icon , PartTittle , Line , PartDesc ,Boxs  } from "./style.js"



class  Work extends Component  {
  state ={
    Works : [

    ]
  }

  componentDidMount(){
    axios.get('js/data.json').then( res => {
      this.setState({ Works : res.data.works});
    } )
  }
  render(){

    const {Works} = this.state;
    const WorksList = Works.map( (work) => {
      return(
        <Part first={work.id}  key={work.id} >
        <Icon className={work.icon_name}></Icon>
        <PartTittle>{work.title}</PartTittle>
        <Line/>
        <PartDesc> {work.body} </PartDesc>
     </Part>
      )
    })
    return (
      <WorkSection>
          <div className="container">
              <WorkTittle><Span>My</Span> Work</WorkTittle>
              {WorksList}
          </div>
      </WorkSection>
    );

  }
   
}

export default Work;
