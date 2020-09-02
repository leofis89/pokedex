import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/home.css';
import Header from '../layouts/home';

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Header />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
