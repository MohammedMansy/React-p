import React from 'react';
import  {useState, useEffect} from 'react';
import axios from 'axios';
import {SectionProfile , BoxProfile , ProfileTittle, ProfileTittleSpan , ProfileItem , Span , Skills , SkillsTittle ,  SkillsTittleSpan , SkillsDesc , Par , Parent  , PercSpan , ParentSpan , Tittle  } from  "./style.js";



const  Profile = () =>  {
    const [ Info , setInfo ] = useState([]);

    useEffect(() => {
    axios.get('js/data.json').then( res => { setInfo(res.data.profile) } );
    } , [] );

    const profileInfo = Info.map( (infoItem)=>{
        return(
            <Par key={infoItem.id} >
            <Tittle>{infoItem.title}</Tittle>
            <PercSpan >{infoItem.percent}</PercSpan>
            <Parent>
                <ParentSpan info={infoItem.id} ></ParentSpan>
            </Parent>
        </Par>
        )
    } )
   
    return (
    
      <SectionProfile>
          <div className="container">
              <BoxProfile>
                  <ProfileTittle><ProfileTittleSpan>My </ProfileTittleSpan>Profile</ProfileTittle>
                  <ul>
                      <ProfileItem>
                          <Span>Name</Span>
                          Hamza Nabil
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Birthday</Span>
                          21/1/1996
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Address</Span>
                          Ain shams
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Phone</Span>
                          4444 5555 6666
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Email</Span>
                          hamza@hamza.com
                      </ProfileItem>
                      <ProfileItem>
                          <Span>Website</Span>
                          <Span web>www.google.com</Span>
                      </ProfileItem>
                  </ul>
              </BoxProfile>
              
              <Skills>
                  <SkillsTittle>Some <SkillsTittleSpan>skills</SkillsTittleSpan></SkillsTittle>
                  <SkillsDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                  </SkillsDesc>
                  {profileInfo}
              </Skills>
              
          </div>
      </SectionProfile>
    );
}

export default Profile;
