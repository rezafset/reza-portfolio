import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Typical from 'react-typical';
import './Header.css';
import cv from '../../../resource/CV/CV of Reza-USTC-CSE.pdf';
import Particle from '../../Particle/Particle';

const Header = () => {
    return (
        <div id="header">
            <Particle></Particle>
            <Navigation></Navigation>
            <div className="container text-white">
                <div className="row header-row">
                    <div className="col-md-10 col-lg-7">
                        <h1 className="title font-weight-bold">Ahmed <span style={{ color: 'rgb(235, 36, 76)' }}>Reza Shah</span> </h1>
                        <h4 className="pt-3">
                            <Typical
                                className="typical"
                                loop={Infinity}
                                wrapper="p"
                                steps={[
                                    'Front End Developer',
                                    1000,
                                    'MERN Stack Developer',
                                    1000,
                                    'JavaScript Enthusiast',
                                    1000,
                                    'React Enthusiast',
                                    1000,
                                    'Network Engineer',
                                    1000,
                                ]}
                            />
                        </h4>
                        <p className="text-justify">
                            I am passionate, proficient and self-motivated web developer. Like to develop web application using React and back-end technology like Node.js, Express.js, MongoDB. I also have solid knowledge in responsive design with HTML5, CSS3 and Bootstrap.</p>
                        <div className="icon pt-2">
                            <a
                                className="mr-4"
                                href="https://github.com/rezafset"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-github-square"
                                    aria-hidden="true"
                                ></i>
                            </a>

                            <a
                                className="mr-4"
                                href="https://www.linkedin.com/in/ahmed-reza-shah/"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-linkedin-square"
                                    aria-hidden="true"
                                ></i>
                            </a>

                            <a
                                className="mr-4"
                                href="https://twitter.com/ahmedrezashah"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-twitter-square"
                                    aria-hidden="true"
                                ></i>
                            </a>

                            <a
                                className="mr-4 medium"
                                href="https://rezafset.medium.com/"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-medium"
                                    aria-hidden="true"
                                ></i>
                            </a>

                            <a
                                href="https://www.facebook.com/reza.shah.17/"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-facebook-square"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </div>
                        <div className="pt-4">
                            <a href={cv} download>
                                <button type="button" class="btn  text-white download-btn">Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;