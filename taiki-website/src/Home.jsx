import './Home.css';

function Home() {
    return(
        <div className='home-container'>
            <div className='home-intro-container'>
                <img className='home-taiki-image' src='taiki-img.png'/>
                <p className='home-intro-text'>Hello my name is Taiki!</p>
            </div>
        </div>
    );
}

export default Home;
