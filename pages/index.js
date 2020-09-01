import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';

export async function getStaticProps({ params }) {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
	const { results } = await res.json();
	const pokemon = results.map((result, index) => {
		const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`;

		return {
			...result,
			image,
		};
	});
	return {
		props: {
			pokemon,
		},
	};
}

export default function Home(props) {
	const { pokemon } = props;
	console.log(pokemon);
	// useEffect(() => {
	// 	async function fetchData() {
	// 		const { data } = await axios.get(
	// 			'https://pokeapi.co/api/v2/pokemon/'
	// 		);
	// 		console.log(data.results);
	// 		setDados(data.results);
	// 	}
	// 	fetchData();
	// }, []);

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>
			<main className="container-fluid main">
				<Row className="mx-3 pt-3 row1">
					<Col className="text-center">
						<h1> Pokedéx</h1>
					</Col>
				</Row>

				<Row className="mx-3 my-3">
					{pokemon.map((poke, index) => (
						<Col
							xs={12}
							sm={4}
							md={4}
							lg={4}
							className="text-center border"
						>
							<Card className="py-3 my-3 card">
								<img src={poke.image} className="img" />
								<Link href={poke.url}>
									<a>
										{poke.name
											.substring(0, 1)
											.toUpperCase()
											.concat(poke.name.substring(1))}
									</a>
								</Link>
							</Card>
						</Col>
					))}
				</Row>
			</main>
		</div>
	);
}
