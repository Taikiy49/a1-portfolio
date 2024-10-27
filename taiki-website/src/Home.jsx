import './Home.css';
import { useEffect, useState } from 'react';

function Home() {
    const titles = ["< I'm a Developer! />", "< I'm an Engineer! />", "< I'm a Data Scientist! />", "< I'm a Software Engineer! />"];
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        let typingTimeout;

        if (!deleting && currentTitle === titles[currentIndex]) {
            typingTimeout = setTimeout(() => setDeleting(true), 1000);
        } else if (deleting && currentTitle === '') {
            setDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % titles.length);
        } else {
            typingTimeout = setTimeout(() => {
                const updatedText = deleting
                    ? titles[currentIndex].substring(0, currentTitle.length - 1)
                    : titles[currentIndex].substring(0, currentTitle.length + 1);
                setCurrentTitle(updatedText);
                setTypingSpeed(deleting ? 100 : 150);
            }, typingSpeed);
        }

        return () => clearTimeout(typingTimeout);
    }, [currentTitle, deleting, currentIndex, titles, typingSpeed]);

    return(
        <div className='home-container'>
            <div id='home-section' className='home-intro-container'>
                <img className='home-taiki-image' src='taiki-img.png' alt="Taiki"/>
                <div className='home-text-container'>
                    <p className='home-intro-title'>{currentTitle}</p>
                    <div className='home-about'>
                        <p id='about-section' className='home-about-text'>I'm Taiki Owen Yamashita, a third-year Computer Science student at UC Irvine, minoring in Statistics. I’m passionate about applying advanced computing and data science to real-world problems, focusing on accessible and sustainable solutions. I’ve earned spots on the Dean’s List and am involved with the ICS Student Council, ACM @ UCI, and the U/U Mentor program.</p>
                    </div>
                    <p className='home-now-text-title'>Now</p>
                    <p className='home-now-text'>Currently, I’m a Software Engineer Intern at Geolabs, building scalable web applications using Python Flask, React.js, and MongoDB. I’m also integrating machine learning with the Gemini API to enhance query handling, improving data retrieval with Elasticsearch.</p>
                    <p className='home-more-text-title'>More</p>
                    <p className='home-more-text'>Beyond academics, I tutor computer science and mathematics, and have worked as a Learning Assistant and grader, helping students master data structures and algorithms. My technical toolkit includes Python, Java, JavaScript, SQL, MongoDB, and cloud platforms like AWS. I’m always open to collaboration and exploring innovative solutions in software engineering and data science.</p>
                </div>
            </div>

            <div id='skills-section' className='home-skills-section'>
                <h2 className='home-skills-title'>Skills</h2>
                <ul className='home-skills-list'>
                    <li><strong>Programming Languages & Scripting:</strong> Python, C/C++, Java, JavaScript, R, SQL, MATLAB, JSON, ASM</li>
                    <li><strong>Frameworks & Tools:</strong> React.js, Flask, TensorFlow, Jupyter Notebook, Vim, Gemini, OpenAI</li>
                    <li><strong>Databases & Data Management:</strong> MongoDB, SQLite</li>
                    <li><strong>DevOps & Deployment:</strong> Git, Vercel, Netlify, AWS, Ubuntu, CORS</li>
                </ul>
            </div>

            <div id='projects-section' className='home-projects-section'>
                <h2 className='home-projects-title'>Projects</h2>
                <div className='home-project'>
                    <h3>SchedulEase</h3>
                    <p>Engineered an AI-driven scheduling application using machine learning algorithms to optimize scheduling functionality. The backend was developed with Python and TensorFlow, and the frontend was built with React.js and CSS. Integrated the Google Gemini API for enhanced AI capabilities and Google Calendar API for real-time synchronization.</p>
                </div>
                <div className='home-project'>
                    <h3>CuraAI</h3>
                    <p>Developed a therapeutic chatbot using the Gemini API and large language models (LLMs) to train medical response models. Backend was implemented using Python Flask, with MongoDB for secure data storage and API data collection. The frontend was built with React.js and CSS, integrating Google Maps API and Folium for visualizing medical facilities.</p>
                </div>
            </div>

        </div>
    );
}

export default Home;
