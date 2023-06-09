import React from 'react';
import "./Header.scss"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const Header = () => {
  return (
    <div className='header'>
        <div className='menu-icon' >
            <MenuOutlinedIcon/>
        </div>
        <div>
            search
        </div>
        <div>
            profile
        </div>
    </div>
  )
}

export default Header