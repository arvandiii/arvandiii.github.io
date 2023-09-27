import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    let head = 'Alireza Arvandi';
    return (
        <div className="window">
            <div className="title-bar header">
                <Link className="title a" to="/">
                    <h1>{head}</h1>
                </Link>
            </div>
        </div>
    );
}
