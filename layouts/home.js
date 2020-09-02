import Head from 'next/head';

export default function Header() {
	return (
		<Head>
			<title> Pokedéx </title>
			<link rel="icon" href="/favicon.ico" />
			<link
				href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap"
				rel="stylesheet"
			></link>
		</Head>
	);
}
