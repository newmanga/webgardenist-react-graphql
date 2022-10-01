import logo from './kingGardenistLogo.png';
import instaLogo from './InstagramLogo.png';
import tiktokLogo from './TikTokLogo.png';
import etsytLogo from './EtsyLogo.png';
import './App.css';
import { Button, Container, Section } from './globalStyles';

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nature is blissfulness!
        </p>
		<Section>
			<Container>
				<a
					className="Social-link"
					href="https://www.etsy.com/shop/KindGardenist?ref=profile_header"
				>
					<Button>
						<img src={etsytLogo} className="SocialMedia-logo" alt="etsytLogo" />
						<div className="Social-text">
							Etsy
						</div>
					</Button>
				</a>
			</Container>
			<Container>
				<a
						className="Social-link"
						href="https://www.instagram.com/kindgardenist/"
				>
					<Button>
					    <img src={instaLogo} className="SocialMedia-logo" alt="instaLogo" />
						<div className="Social-text">
                          Instagram
						</div>
					</Button>
				</a>
			</Container>
			<Container>
				<a
						className="Social-link"
						href="https://www.instagram.com/kindgardenist/"
				>
					<Button>
						<img src={tiktokLogo} className="SocialMedia-logo" alt="tiktokLogo" />
						<div className="Social-text">
							TikTok
						</div>
					</Button>
				</a>
			</Container>
		</Section>
      </header>
    </div>
  );
}

export default App;
