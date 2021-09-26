import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="item1">
                <NavLink to="/">
                    Login
                </NavLink>
            </Menu.Item>
            <Menu.Item key="item2">
                <NavLink to="/memes-list">
                    Home
                </NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default NavBar
