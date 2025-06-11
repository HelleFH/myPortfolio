import React from 'react';
import './AboutMe.scss';
import SocialLinks from '../../../../components/SocialLinks/SocialLinks'

const AboutMe = () => {
    return (
        <section className="about">
            <div className="about-me__content">
                <div className="about-me__personal-info">

                    <div className="about-me__contact-info">
                        <h4>Contact Info</h4>
                        <p> hellefruergaardh@gmail.com</p>
                        <p> +45 29664077</p>
                        <SocialLinks />

                    </div>
                </div>

                <div className="about-me__bio">


                    <div className="about-me__intro">
                        <p >
                            Here’s a little bit about who I am and what I do
                        </p>
                    </div>

                    <p>
                        I’m a web developer who works across the full stack, building everything from user interfaces to server-side logic and data handling.
                    </p>
                    <p>
                        Typically, I work with React and front-end tools, but I’m comfortable with the full process of building web applications. I’ve worked on many different kinds of projects and I enjoy figuring things out, improving as I go, and learning new approaches.
                    </p>
                    <p>
                        In addition to my degree in Biology and Chemistry from the University of Southern Denmark, I’ve completed a course in web development.
                    </p>

                    <p>
                        I have several years of experience in copywriting and translation/localization, where I’ve worked on adapting content for different languages and cultures.
                    </p>

                    <p>
                        Currently, I work with a company that has an AI-based app, and I have years of experience in technical support, troubleshooting both software and hardware.
                    </p>

                    <p>
                        Outside of work, I’m a very active person. I have two small kids, a dog and a cat, and I’m always curious and learning something new, whether it’s in tech or in life.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
