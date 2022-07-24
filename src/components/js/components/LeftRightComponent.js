import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import LogoFooter from "./LogoFooter";
import profile_img from "../../images/shiva-profile.jpeg";

function LeftRightComponent() {

    const [title] = useState("Shivakumar Ramamurthy - Specialising in Web Applications and Websites mainly using ReactJs");

    useEffect(() => {
        // This will run when the page first loads and whenever the title changes
        document.title = title;
    }, [title]);

    return (
        <div className="left-right-content-component">
            <div className="left-content">
                <Logo />
                <div className="left-content-wrapper">
                    <div className="intro-content">
                        <h1 className="headline">Shivakumar Ramamurthy</h1>
                        <div className="description">
                            <p>Specialising in ReactJs & React Native</p>
                        </div>
                    </div>
                    <div className="skill-content">
                        <h2><i>Technical know how</i></h2>
                        <ul>
                            <li><strong>Web / Scripting Languages</strong> ReactJs, React Native, PHP, HTML5 JQuery / JavaScript, VueJs</li>
                            <li><strong>Content Management Systems</strong> - Drupal [8 &amp; 7] & WordPress</li>
                            <li><strong>Languages</strong> - Python</li>
                            <li><strong>CSS Extension Language</strong> - SASS</li>
                            <li><strong>DBMS</strong> - MySQL, MSSQL</li>
                            <li><strong>HTML5 Authoring Tools</strong> - Google Web Designer</li>
                            <li><strong>Frameworks / SDKs</strong> - Laravel, CodeIgniter</li>
                            <li><strong>Project Management Tools</strong> - JIRA, Redmine, Avaza, Airtable</li>
                            <li><strong>Testing Tools</strong> - PHPUnit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <div className="right-content-wrapper">
                    <div className="profile">
                        <div className="profile-image">
                            <Link to="/">
                                <img className="profile-image" src={profile_img} alt="Shivakumar Ramamurthy"/>
                            </Link>
                        </div>
                        <h2>About Me</h2>
                        <p>I work as a technical lead specialising in ReactJs & React Native. I also work on open-source solutions mainly pertaining to PHP, MYSQL, Python. I am pretty well versed with CMSs like Drupal [8 & 7], WordPress, Magento, Joomla and also MVC frameworks like Laravel.</p>
                    </div>
                    <div className="contact-details">
                        <h4>Contact Details</h4>
                        <p><strong>Call on:</strong> <a href="tel:+61422672625">+61422672625</a></p>
                        <p><strong>Email on:</strong> <a href="mailto:+61422672625">shimar007@gmail.com</a></p>
                        <div class="resume-download">
                            <a href="https://shivakumarr.com/sites/default/files/documents/Shivakumar-Ramamurthy_2.pdf" className="button" target="_blank" rel="noreferrer">Download Resume</a>
                        </div>
                    </div>
                </div>
                <LogoFooter />
            </div>
        </div>
    );
}
  
export default LeftRightComponent;