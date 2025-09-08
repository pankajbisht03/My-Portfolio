import React, { useState, useEffect, useRef } from 'react';
import "../Styles/about.css";
import myphoto from "../Images/myphoto.jpg";
import Pankaj_Bisht_Resume from "../files/Pankaj_Bisht_Resume.pdf";

const About = ({ ref: propRef, func }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
    // Open Google Drive link
    window.open("https://drive.google.com/file/d/1GUAsCvt6dI5x5Yb66lFI0hOSz6WXmzmB/view", '_blank');
    
    // Download local file
    const link = document.createElement('a');
    link.href = Pankaj_Bisht_Resume;
    link.setAttribute('download', 'Pankaj_Bisht_Resume.pdf');
    link.setAttribute('id', 'resume-link-2');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  
  const profileData = {
    name: "Pankaj Bisht",
    title: "Frontend Developer",
    experience: "3+ Years",
    description: "I'm a passionate frontend developer with over 3 years of experience in building responsive, high-performance web applications using the MERN stack with a strong focus on React.js and clean UI design.I enjoy working on challenging projects that push my skills and help me grow as a developer. From creating intuitive dashboards to optimizing frontend performance, I love turning ideas into interactive, user-friendly interfaces.",
    stats: [
      { number: "3+", label: "Years Experience" },
      { number: "10+", label: "Projects Completed" },
      { number: "5+", label: "Technologies" }
    ]
  };

  return (
    <section 
      className={`about-section about section ${isVisible ? 'animate-in' : ''}`} 
      id='about' 
      ref={propRef || sectionRef} 
      onScroll={func}
    >
      <div className="about-header">
        <h1 className="about-title">
          About <span className="about-title-accent">Me</span>
        </h1>
      </div>

      <div className="about-container">
        <div className="about-image-section">
          <div className="image-wrapper">
            <img 
              className="profile-image home-img" 
              src={myphoto} 
              alt="Pankaj Bisht - Frontend Developer"
              loading="lazy"
            />
          </div>
        </div>

        <div className="about-content">
          <p className="about-description" id="user-detail-intro">
            {profileData.description}
          </p>

          <div className="resume-section">
            <div className="resume-button-wrapper" id="resume-button-2">
              <button 
                className="resume-button" 
                onClick={handleDownload}
                aria-label="Download Resume"
              >
                <span className="resume-icon">
                    <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  </span>
                <span className="resume-text">Download Resume</span>
              </button>
            </div>
          </div>

          <div className="skills-highlight">
            {profileData.stats.map((stat, index) => (
              <div key={index} className="skill-item">
                <div className="skill-number">{stat.number}</div>
                <div className="skill-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
