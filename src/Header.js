import React, { Component, useState, useEffect } from 'react';
import './App.css';

function Header() {
    return (
        <div className="webHeader">
            <h1 className="myName">Paul Buysse</h1>

            <div className="contact">
                <p>paulbuysse001@gmail.com</p>
                <i class="fa fa-github"></i>
            </div>
        </div>
    )
}

export default Header;