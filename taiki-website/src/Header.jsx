import "./Header.css"

function Header() {
    return (
      <div className="header-container">
        <div className='header-options'>
            <div className='header-home-option'>Home</div>
            <div className='header-about-option'>About</div>
            <div className='header-skills-option'>Skills</div> 
            <div className='header-projects-option'>Projects</div>
            <div className='header-contact-option'>Contact</div>
        </div>
      </div>
    );
  }
  
  export default Header;
  