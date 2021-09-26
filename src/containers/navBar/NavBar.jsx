import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const isLogin = useSelector(state => state.login.success)

    return (
        <Menu mode="horizontal">
            {!isLogin &&<Menu.Item key="item1">
                <NavLink to="/">
                    Login
                </NavLink>
            </Menu.Item>}
            {isLogin &&<Menu.Item key="item2">
                <NavLink to="/memes-list">
                    Home
                </NavLink>
            </Menu.Item>}
            {isLogin &&<Menu.Item key="item3">
                <NavLink to="/meme/create">
                    Crear meme
                </NavLink>
            </Menu.Item>}
            {isLogin &&<Menu.Item key="item4">
                <NavLink to="/">
                    Cerrar sesión
                </NavLink>
            </Menu.Item>}
        </Menu>
    )
}

export default NavBar
