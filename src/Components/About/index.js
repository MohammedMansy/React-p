import React from 'react';
import { SectionAbout , AboutInfo , Span, InfoTittle , InfoDir , InfoDesc   } from './style.js';

const  About = () =>  {
    return (
      <SectionAbout>
            <div class="container">
                <AboutInfo>
                    <InfoTittle><Span>This is</Span> Me</InfoTittle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                    <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                    </InfoDesc>
                </AboutInfo>
            </div>
        </SectionAbout>
    );
}

export default About;
