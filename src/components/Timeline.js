import React from "react";
import "../style/style.css"
import ReactPlayer from 'react-player/youtube'

export default function Timeline() {
    
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>React/Component Based UI</h3>
                            <p>React is a favorite "framework" of mine. The virtual dom makes real time updates seem effortless and with a wide variety of NPM packages, anything is possible. 
                            </p>
                        </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"> </div>
                        <div className="timeline-content">
                            <h3>Material UI and Bootstrap</h3>
                            <p>Working with Material and other grid based frameworks has been demanding yet rewarding. I strive on understanding documentation and getting the most out of each program required.
                            </p>
                        </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>Node</h3>
                            <p>Experience with Node.js 
                            
                            
                            <ReactPlayer loop={true} width="400px" height="300px" class="vid" 
                            url="https://www.youtube.com/watch?v=cMc4NuPT4Qw"
                             />
                           
                            </p>
                    
                        </div>
                </div>
              
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                        <div className="timeline-content">
                            <h3>MERN</h3>
                            <p>Experience in RESTful API calls in front end, node and react. 
                            </p>
                        </div>
                </div>
                {/* - */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
                        <div className="timeline-content">
                            <h3>2021 and beyond</h3>
                            <p>I enjoy taking on the challenge of web development and look forward to refining the craft every day.
                            </p>
                        </div>
                    </div>
                {/* - */}
              </div>
            </div>
        </div>
       )
       };
