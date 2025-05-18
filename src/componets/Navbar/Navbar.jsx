import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from '/assets/96f0963f-b558-424d-8dd1-f8d64f12362f.png';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}> 
            <Link className={styles.title}> 
                EcoThread
            </Link>

            <div className={styles.menu}>
                <ul className={styles.menuitems}>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
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