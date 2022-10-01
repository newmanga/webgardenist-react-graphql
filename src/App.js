import logo from './kingGardenistLogo.png';
import instaLogo from './InstagramLogo.png';
import tiktokLogo from './TikTokLogo.png';
import etsytLogo from './EtsyLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Your favorite premium nature stickers!
        </p>
		<div>
			<div className="SocialMedia">
				<img src={etsytLogo} className="SocialMedia-logo" alt="etsytLogo" />
				<a
				  className="App-link"
				  href="https://www.etsy.com/shop/KindGardenist?ref=profile_header"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				Etsy
				</a>
			</div>
			<div className="SocialMedia">
				<img src={instaLogo} className="SocialMedia-logo" alt="instaLogo" />
				<a
				  className="App-link"
				  href="https://www.instagram.com/kindgardenist/"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  Instagram
				</a>
			</div>
			<div className="SocialMedia">
				<img src={tiktokLogo} className="SocialMedia-logo" alt="tiktokLogo" />
				<a
				  className="App-link"
				  href="https://www.tiktok.com/@kindgardenist?lang=en"
				  target="_blank"
				  rel="noopener noreferrer"
				>
				  TikTok
				</a>
			</div>
		</div>
      </header>
    </div>
  );
}

export default App;
