import React, { Component, useState, useEffect } from 'react';
import './App.css';

function Header() {
    return (
        <div className="webHeader">
            <h1 className="myName">Paul Buysse</h1>

            <div className="contact">
                <p>Github</p>
                <p>LinkedIn</p>
            </div>
        </div>
    )
}

export default Header;