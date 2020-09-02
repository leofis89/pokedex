import { useState } from 'react';
import { useRouter } from 'next/router';
import { Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Link from 'next/link';

export async function getStaticProps({ params }) {
	const data = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${params.id}`
	).then((resp) => {
		console.log(resp);
		console.log(params);
		return resp.json();
	});

	return {
		props: {
			data,
		},
	};
}

export async function getStaticPaths() {
	// const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
	// const { results } = await res.json();
	// console.log(results);

	// const paths = results.map((result) => ({
	// 	params: { id: result.name.toString() },
	// }));
	return {
		paths: [
			{
				params: {
					id: '1',
				},
			},
			{
				params: {
					id: '2',
				},
			},
			{
				params: {
					id: '3',
				},
			},
			{
				params: {
					id: '4',
				},
			},
		],

		fallback: false,
	};
}

export default function Id({ data }) {
	const router = useRouter();
	const [dados, setDados] = useState();
	const [url, setUrl] = useState();
	console.log(router);
	async function fetchData() {
		const { data } = await axios.get(
			`https://pokeapi.co/api/v2/pokemon/${router.query.id}`
		);

		const imagens = data.sprites.front_default;
		console.log(imagens);
		setUrl(imagens);
		// 	results.map((dado) => {
		// 		setUrl(dado.url);
		// 	});
	}
	fetchData();
	return (
		<div id="mainId">
			<Card className=" container-fluid py-3 cardId">
				<Row className=" ">
					<Col xs={12} id="coltot">
						<Row id="row_primeira">
							<Col xs={4}>
								<h6> Nome</h6>
								<h4>
									{data.name
										.substring(0, 1)
										.toUpperCase()
										.concat(data.name.substring(1))}
								</h4>
								<br />
								<h6>Tipo</h6>
								<h4>
									{data.types[0].type.name
										.substring(0, 1)
										.toUpperCase()
										.concat(
											data.types[0].type.name.substring(1)
										)}
								</h4>

								<br />
								{/* <h6> Ataques</h6>
								<p>
									{data.abilities[0].ability.name
										.substring(0, 1)
										.toUpperCase()
										.concat(
											data.abilities[0].ability.name.substring(
												1
											)
										)}
									<br />
									{data.abilities[1].ability.name
										.substring(0, 1)
										.toUpperCase()
										.concat(
											data.abilities[1].ability.name.substring(
												1
											)
										)}
								</p> */}
							</Col>
							<Col className="imagem">
								<img src={url} id="img" />
							</Col>
							<Col xs={3} className="col_btn">
								{' '}
								<Button variant="success">
									<Link href="/">
										<a>Voltar</a>
									</Link>
								</Button>
							</Col>
						</Row>

						<Row id="row">
							<Col xs={4}>
								{' '}
								<p>
									{' '}
									HP
									<br />
									<span className="valores">
										{data.stats[0].base_stat}
									</span>
								</p>
								<p>
									<span className="valores">
										ATK <br /> {data.stats[1].base_stat}
									</span>
								</p>
							</Col>
							<Col xs={4}>
								<p>
									{' '}
									ESP-ATK <br />
									<span className="valores">
										{data.stats[3].base_stat}
									</span>
								</p>
								<p>
									{' '}
									DEF <br />
									<span className="valores">
										{data.stats[2].base_stat}
									</span>
								</p>
							</Col>
							<Col xs={4}>
								<p>
									ESP-DEF <br />
									<span className="valores">
										{data.stats[4].base_stat}{' '}
									</span>
								</p>
								<p>
									VEL
									<br />
									<span className="valores">
										{data.stats[5].base_stat}
									</span>
								</p>
							</Col>
							<p> {data.forms.url}</p>
						</Row>
					</Col>
				</Row>
			</Card>
		</div>
	);
}
