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
                            <p>Specialised in NestJS, NEXT.js, Spring Boot, Java, Drupal</p>
                        </div>
                    </div>
                    <div className="skill-content">
                        <h2><i>Technical Skills</i></h2>
                        <ul>
                            <li><strong>Frontend Engineering:</strong> React, Next.js, Angular, TypeScript, Vite</li>
                            <li><strong>Backend & API Development:</strong> Java (17/21), Spring Boot, Spring MVC, Spring Security, Spring Data JPA, NestJS, PHP, Python, CodeIgniter</li>
                            <li><strong>Content & Experience Platforms:</strong> Drupal, WordPress</li>
                            <li><strong>UI Systems & Styling:</strong> Tailwind CSS, shadcn/ui, MUI</li>
                            <li><strong>Data & Persistence:</strong> MySQL, PostgreSQL, MS SQL Server, Oracle ATP, DynamoDB</li>
                            <li><strong>Testing & Quality Assurance:</strong> Jest, JUnit 5, Mockito, JaCoCo, PHPUnit, Cypress, Playwright, Mocha, Postman, JMeter</li>
                            <li><strong>DevOps, CI/CD & Observability:</strong> Kubernetes, GitHub Actions, Argo CD, Grafana, Prometheus</li>
                            <li><strong>Distributed Systems:</strong> Kafka, Redis</li>
                            <li><strong>Developer Productivity:</strong> GitHub Copilot</li>
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
                        <ul>
                            <li>Over 16 years of experience in web and product development, leading end-to-end architecture, design and deployment of enterprise-grade applications.</li>
                            <li>Led front-end and back-end teams, mentoring developers, driving adoption of best practices, and fostering a culture of ownership, collaboration, and technical excellence.</li>
                            <li>Built and scaled complex applications using React/Next.js, NestJS, Angular, Spring Boot, Drupal (v7–v11), PostgreSQL, Kafka, and microservices architectures.</li>
                            <li>Championed modern development practices, including BDD/TDD with Cucumber JVM / Cucumber for NestJS, automated testing, and CI/CD workflows to improve quality and reliability.</li>
                            <li>Directed modernisation and upgrades, including Angular v6 → v20 portals and Next.js enhancements with Auth0 SSO/RBAC, improving test coverage, performance, and security.</li>
                            <li>Established a Front-End Guild, creating unified UI/UX design systems across teams, driving consistency, scalability, and innovation in product design.</li>
                            <li>Managed DevOps and cloud infrastructure, leveraging Terraform, Kubernetes, Docker/Podman, and GitHub Actions to optimize deployments and accelerate developer productivity.</li>
                            <li>Delivered real-time, high-performance systems across CMS, e-commerce, CRM, and communication platforms, ensuring scalability, maintainability, and business alignment.</li>
                        </ul>
                    </div>
                    <div className="contact-details">
                        <h4>Contact Details</h4>
                        <p><strong>Call on:</strong> <a href="tel:+61422672625">+61422672625</a></p>
                        <p><strong>Email on:</strong> <a href="mailto:shimar007@gmail.com">shimar007@gmail.com</a></p>
                        <div class="resume-download">
                            <a href="documents/Shivakumar-Ramamurthy-Resume.docx" className="button" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        </div>
                    </div>
                </div>
                <LogoFooter />
            </div>
        </div>
    );
}
  
export default LeftRightComponent;