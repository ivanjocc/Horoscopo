import React from 'react';
import horoscopo from '../assets/img/horoscopo-modified.png';
import '../styles/Bienvenida.scss';

const Bienvenida = () => {
	return (
		<div className="bienvenida" id='bienvenida'>
			<img src={horoscopo} alt="" className="horoscopo" />
		</div>
	);
};

export default Bienvenida;