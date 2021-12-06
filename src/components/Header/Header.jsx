import React from "react";
import logo from "../../img/logo.png";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img src={logo}/>
            <div className={styles.loginBlock}>
                {
                    props.isAuth ? (
                        <>
                            {props.login}
                            <button onClick={props.logoutThunk}>LogOut</button>
                        </>
                    ) : (
                        <NavLink to={'/login'}>Login</NavLink>
                    )
                }
            </div>
        </header>
    );
};

export default Header;