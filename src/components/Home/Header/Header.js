import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';

const Header = () => {
  const  style = {backgroundColor:"#F6F6F6"};
    return (
        <div style={style} className="ml-3 mr-3 pl-3" >
            {/* <Navbar/> */}
            <HeaderMain/>
        </div>
    );
};

export default Header;