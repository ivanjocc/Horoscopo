import React, {useRef, useEffect} from 'react';
import aries from '../assets/img/aries.png';
import acuario from '../assets/img/acuario.png';
import cancer from '../assets/img/cancer.png';
import capricornio from '../assets/img/capricornio.png';
import escorpion from '../assets/img/escorpion.png';
import geminis from '../assets/img/geminis.png';
import leo from '../assets/img/leo.png';
import libra from '../assets/img/libra.png';
import piscis from '../assets/img/piscis.png';
import sagitario from '../assets/img/sagitario.png';
import tauro from '../assets/img/tauro.png';
import virgo from '../assets/img/virgo.png';
import { ReactComponent as FlechaIzq } from '../assets/icons/iconmonstr-arrow-64.svg';
import { ReactComponent as FlechaDer } from '../assets/icons/iconmonstr-arrow-25.svg';
import styled from 'styled-components';

const Slideshow = () => {

	const slideshow = useRef(null);
	const intervaloSlideshow = useRef(null);
	
	const siguiente = () => {
		// Comprobamos que el slide tenga elementos
		if(slideshow.current.children.length > 0) {

			// Obtenemos el primer elemento del slideshow
			const primerElemento = slideshow.current.children[0];

			// Establecemos la transicion del slideshow
			slideshow.current.style.transition = `1000ms ease-out all`;

			const tamañoSlide = slideshow.current.children[0].offsetWidth;

			// Movemos el slideshow
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				// Reiniciamos la posicion del slideshow
				slideshow.current.style.transition = `none`;
				slideshow.current.style.transform = `translateX(0)`;

				// Tomamos el primer elemento y lo mandamos al final
				slideshow.current.appendChild(primerElemento);

				slideshow.current.removeEventListener('transitionend', transicion);
			}

			// EventListener cuando termine la transicion
			slideshow.current.addEventListener('transitionend', transicion);
		}
	}

	const anterior = () => {

		if(slideshow.current.children.length > 0){

			// Obtenemos el ultimo elemento del slideshow
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

			slideshow.current.style.transition = `none`;
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			setTimeout(() => {
				slideshow.current.style.transition = `1000ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	useEffect(() => {
		intervaloSlideshow.current = setInterval(() => {
			siguiente();
		}, 3000);

		// Eliminamos los intervalos
		slideshow.current.addEventListener('mouseenter', () => {
			clearInterval(intervaloSlideshow.current);
		});

		// Volvemos a reanudar el intervalo al quitar el cursor
		slideshow.current.addEventListener('mouseleave', () => {
			intervaloSlideshow.current = setInterval(() => {
				siguiente();
			}, 3000);
		});
	}, []);

	return (
		<ContainerPrincipal>
			<ContainerSlideshow ref={slideshow}>
				<Slide>
					<a href="/aries">
						<img src={aries} alt="" />
					</a>
					<VerMas>
						<a href="/aries">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/acuario">
						<img src={acuario} alt="" />
					</a>
					<VerMas>
						<a href="/acuario">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/cancer">
						<img src={cancer} alt="" />
					</a>
					<VerMas>
						<a href="/cancer">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/capricornio">
						<img src={capricornio} alt="" />
					</a>
					<VerMas>
						<a href="/capricornio">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/escorpion">
						<img src={escorpion} alt="" />
					</a>
					<VerMas>
						<a href="/escorpion">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/geminis">
						<img src={geminis} alt="" />
					</a>
					<VerMas>
						<a href="/geminis">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/leo">
						<img src={leo} alt="" />
					</a>
					<VerMas>
						<a href="/leo">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/libra">
						<img src={libra} alt="" />
					</a>
					<VerMas>
						<a href="/libra">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/piscis">
						<img src={piscis} alt="" />
					</a>
					<VerMas>
						<a href="/piscis">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/sagitario">
						<img src={sagitario} alt="" />
					</a>
					<VerMas>
						<a href="/sagitario">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/tauro">
						<img src={tauro} alt="" />
					</a>
					<VerMas>
						<a href="/tauro">Ver más</a>
					</VerMas>
				</Slide>
				<Slide>
					<a href="/virgo">
						<img src={virgo} alt="" />
					</a>
					<VerMas>
						<a href="/virgo">Ver más</a>
					</VerMas>
				</Slide>
			</ContainerSlideshow>

			<Controles>
				<Boton onClick={anterior}>
					<FlechaIzq />
				</Boton>
				<Boton derecho onClick={siguiente}>
					<FlechaDer />
				</Boton>
			</Controles>
		</ContainerPrincipal>
	);
};

const ContainerPrincipal = styled.div`
	position: relative;
`;

const ContainerSlideshow = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: 0.3 ease all;
	z-index: 10;
	max-height: 500px;
	position: relative;
	height: 100%;

	img{
		width: 100%;
	}
`;

const VerMas = styled.div`
	background-color: yellow;
	border-radius: 10px;
	z-index: 20;
	position: absolute;
	width: 50%;
	text-align: center;
	bottom: 0;
	left: 25%;
	border: 2px solid blue;

	a{
		font-family: 'Roboto', sans-serif;
		text-decoration: none;
		text-transform: uppercase;
		color: black;
		font-size: 2rem;
		font-weight: 700;
		padding: 0 20px;

		@media (max-width: 400px){
			font-size: 1.5rem;
		}
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0%;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 98%;
	text-align: center;
	position: absolute;
	transition: 0.3 ease all;
	&:hover{
		background: rgba(0,0,0,0.2);

		path{
			fill: #000;
		}
	}
	
	path{
		fill: white;
	}

	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;

export default Slideshow;