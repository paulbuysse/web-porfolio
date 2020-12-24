import React, { Component, useState, useEffect } from 'react';
import { useTransition, animated, config } from 'react-spring';
import './App.css';

const projectInfo = [
    {
        id: 0,
        projName: "Menus Plus (+)",
        projDesc: "Customize your restaurant menus with Menus Plus, an application made to keep track of your restaurant's menu. Built in Fall 2020, this project was made as a solo project for Prime Digital Academy. The user can create new menus and dishes to go with them, update descriptions and pricing, and add images to go with them.",
        img: "https://imgur.com/oTqu0xQ.jpg",
        githubLink: "",
        tech: "Javascript, React, Redux, sagas, HTML, CSS, Node, Express, and postgreSQL"
    },
    {
        id: 1,
        projName: "Green Neighbor Letter Builder",
        projDesc: "Contact your representative about green energy laws in your area with the Green Neighbor Letter Builder. This app will guide you through the letter building process step-by-step, so you can advocate for the best green energy laws in your zip code. Built for The Green Neighbor Challenge, a non-profit organization whose mission is to spread knowledge about green energy laws.",
        img: "https://imgur.com/m77Ahdi.jpg",
        githubLink: "",
        tech: "Javascript, React, Redux, sagas, HTML, CSS, Node, Express, and postgreSQL"
    },
    {
        id: 2,
        projName: "Movie Sagas",
        projDesc: "yeet",
        img: "https://imgur.com/Lk19zsz.jpg",
        githubLink: "",
        tech: "Javascript, React, Redux, sagas, HTML, CSS, Node, Express, and postgreSQL"
    },
]

function Projects() {
    return (
        <div className="projectList">
            <div className="divBar"><h1 style={{ color: "white" }}>PROJECTS</h1></div>

            {projectInfo.map((project) => (
                <div className="projectObject">
                    <div className="projectPic">
                        <img className="leftPic" src={project.img} />
                        <br />
                        <p>Technologies used: {project.tech}</p>
                    </div>

                    <div className="projectInfo">
                        <h3>{project.projName}</h3>
                        <br />
                        <p>{project.projDesc}</p>
                    </div>
                </div>
            ))}
            {/* <div className="projectObject">
                <img className="rightPic" src="https://imgur.com/m77Ahdi.jpg" />
                <h4>green</h4>
                <p>asdf project description</p>
            </div> */}
        </div>
    )
}

export default Projects;