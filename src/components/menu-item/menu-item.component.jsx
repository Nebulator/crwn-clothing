//Menu-items. They are seen on the home page.
//They are the divs that, when clicked on, will send the user to one of the collection pages
//The background image is set to zoom in within the scope of the block when hovered over.=
//Parameters: title, imageUrl, size, history, linkUrl, match

import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div
        className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtite'>SHOP NOW</span>
        </div>
    </div >
);

export default withRouter(MenuItem);