import React from "react";
import nav from './nav.css';
import logo from '../../assets/Logo_sharing.jpg';



function NavBar() {
    return (
        <div className="Header_background">
            <nav>
                <a href="/"><img src={logo} alt="logo"/></a>
                <ul>
                    <li>
                        <button>
                            <a href="/">Sing up</a>
                        </button>
                    </li>

                    <li>
                        <button>
                            <a href="/">Sing in</a>
                        </button>
                    </li>
                    <li>
                        <button>
                            <a href="/">Language</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
