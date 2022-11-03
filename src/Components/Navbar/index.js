import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection , Logo , LogoText , UlList , ListItem , Anchor} from './style.js'

const flex = {
  display:"flex",
  alignItems: "center"
}

const  Navbar = () =>  {
    return (
      <NavbarSection>

        <div style={flex} className='container'>
          <Logo>
            <LogoText> Ultra Profile </LogoText>
          </Logo>

          <UlList>
            <ListItem >  <Link className='achor' to="/" > Home </Link>  </ListItem>
            <ListItem >  <Anchor href="#"> Work </Anchor> </ListItem>
            <ListItem >  <Anchor href="#"> Portfolio </Anchor> </ListItem>
            <ListItem >  <Anchor href="#"> Resume </Anchor> </ListItem>
            <ListItem >  <Anchor href="#"> About </Anchor> </ListItem>
           <ListItem > <Link className='achor' to="/contact" > Contact </Link> </ListItem> 
          </UlList>

        </div>

      </NavbarSection>
    );
}

export default Navbar;
