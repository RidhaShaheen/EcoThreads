import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}> 
            <Link className={styles.title} to="/sign"> {/* Changed from <a> to <Link> */}
                Sustain Style
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
                        <Link to="/challenge">Challenge</Link>
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