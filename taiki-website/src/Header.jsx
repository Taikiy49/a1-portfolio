import "./Header.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import "./Links.css";

function Header() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-container">
      <div className="header-options">
        <div className="header-name">Taiki Yamashita</div>
        <div className="header-selections">
          <div className="header-home-option" onClick={() => handleScroll("home-section")}>Home</div>
          <div className="header-about-option" onClick={() => handleScroll("about-section")}>About</div>
          <div className="header-skills-option" onClick={() => handleScroll("skills-section")}>Skills</div>
          <div className="header-projects-option" onClick={() => handleScroll("projects-section")}>Projects</div>
          <div className="header-contact-option" onClick={() => handleScroll("contact-section")}>Contact</div>
        </div>
        <div className="header-links-container">
          <a href="https://www.linkedin.com/in/taikiyamashita" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/taikiy49" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="/Users/taikiyamashita/Desktop/Taiki_Yamashita.pdf" target="_blank" rel="noopener noreferrer">
            <FiFileText size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
