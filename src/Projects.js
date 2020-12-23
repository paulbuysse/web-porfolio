import React, { Component, useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import './App.css';

const slides = [
    { id: 0, name: 'Hotdog' },
    { id: 1, name: 'Burger' },
    { id: 2, name: 'Pizza' },
    { id: 3, name: 'Pie' },
]

function Projects() {
    const [textHover, setTextHover] = useState(false)

    const [index, set] = useState(0)
    useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 5000), [])
    return (
        <div className="projectList">
            <div className="divBar"><p>{slides.name}</p></div>
            <div className="projectObject">
                <img className="leftPic" src="https://imgur.com/oTqu0xQ.jpg" />
                <h4>menus</h4>
                <p>asdf project description</p>
            </div>
            <div className="projectObject">
                <img className="rightPic" src="https://imgur.com/Lk19zsz.jpg" />
                <h4>movies</h4>
                <p>asdf project description</p>
            </div>
            <div className="projectObject">
                <img className="leftPic" src="https://imgur.com/mGcrMF7.jpg" />
                <h4>pizza</h4>
                <p>asdf project description</p>
            </div>
            <div className="projectObject">
                <img className="rightPic" src="https://imgur.com/m77Ahdi.jpg" />
                <h4>green</h4>
                <p>asdf project description</p>
            </div>
        </div>
    )
}

export default Projects;