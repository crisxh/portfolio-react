import * as React from 'react';
import PropTypes from 'prop-types';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Toolbar from '@mui/material/Toolbar';

import { Link } from 'react-router-dom'
import './NavMenu.scss'



function NavMenu(props) {




    return (

        <div>
            <Toolbar />
            <Divider />
            <List >
                {['home', 'about', 'projects', 'credits'].map((text, index) => (

                    <ListItem key={index}>{ }
                        <Link to={`/${text}`} >{text}</Link>
                    </ListItem>





                ))}
            </List>
            <Divider />
        </div>


    );
}



export default NavMenu;