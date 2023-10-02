import React from 'react';
import { Link } from 'react-router-dom';
import GitIcon from '../assets/github-mark.svg'

export default function Header() {
    let head = 'Alireza Arvandi';
    return (
        <div>
            <div class="navbar">
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <Link class="navbar-item" to="/">
                            <h1>{head}</h1>
                        </Link>
                    </div>
                    <div class="navbar-end">
                        <Link class="navbar-item" to="/blog">Blog</Link>
                        <Link class="navbar-item" to="https://github.com/arvandiii">
                            <img src={GitIcon} alt="Github" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
