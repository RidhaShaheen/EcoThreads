import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from '../../assets/image.png';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}> 
            <Link className={styles.title} to="/sign"> 
                <img src={logo} alt="Logo" className={styles.logo} /> EcoThread
            </Link>

            <div className={styles.menu}>
                <ul className={styles.menuitems}>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/map">Resources</Link>
                    </li>
                    <li>
                        <Link to="/quiz">Quizzes</Link>
                    </li>
                    <li>
                        <NavLink to="/chatbot" activeClassName={styles.active}>
                            Chatbot
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};