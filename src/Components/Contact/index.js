import React from 'react';
import { ContactSection , ContactTittle, Span , From , FormInput , InputText , InputEmail , InputSub , Textarea , InputSubmit } from  "./style.js";
import Footer from "./../Footer";
import SocialMedia from "./../SocialMedia";
import { Fragment } from 'react';
const  Contact = () =>  {
    return (
        <Fragment>
      <ContactSection>
      <div class="container">
          <ContactTittle><Span>Drop </Span>Me A line</ContactTittle>
          <From>
              <FormInput>
                  <InputText type="text" placeholder="Your Name"/>
                  <InputEmail type="email" placeholder="Your Email"/>
              </FormInput>
              <InputSub type="text"  placeholder="Your Subject"/>
              <Textarea  placeholder="Your Message"></Textarea>
              <InputSubmit type="submit" value="Send Message"/>
          </From>
      </div>
  </ContactSection>
  <SocialMedia/>
    <Footer/>
   </Fragment>

    );
}

export default Contact;
