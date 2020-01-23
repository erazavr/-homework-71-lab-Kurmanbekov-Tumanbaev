import React from 'react';
import {NavLink} from "react-router-dom";

import './Dishes.css'
const Dishes = props => {
    return (
        <div className='Dish'>
            <div className='Dishes-Info flex'>
                <div>
                    <img src={props.img} alt=""/>
                </div>
                <p>{props.dishName}</p>
                <p><b>{props.cost}KGS</b></p>
                <NavLink to='/' className='link'>Edit</NavLink>
                <NavLink to='/' className='link'>Delete</NavLink>
            </div>
        </div>
    );
};

export default Dishes;