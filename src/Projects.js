import React, { Component, useState, useEffect } from 'react';
import './App.css';

function Projects() {
    return (
        <div className="projectList">
            <div className="projectObject">
                <img className="leftPic" src="https://imgur.com/oTqu0xQ.jpg"/>
                <h4>menus</h4>
                <p>asdf project description</p>
            </div>
            <div className="projectObject">
                <img className="rightPic" src="https://imgur.com/Lk19zsz.jpg"/>
                <h4>movies</h4>
                <p>asdf project description</p>
            </div>
            <div className="projectObject">
                <img className="leftPic" src="https://imgur.com/mGcrMF7.jpg"/>
                <h4>pizza</h4>
                <p>asdf project description</p>
            </div>
            <div className="projectObject">
                <img className="rightPic" src="https://imgur.com/m77Ahdi.jpg"/>
                <h4>green</h4>
                <p>asdf project description</p>
            </div>
        </div>
    )
}

export default Projects;