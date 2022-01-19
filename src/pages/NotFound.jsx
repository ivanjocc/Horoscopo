import React from 'react';
import styled from 'styled-components';
import imgError from '../assets/img/img-error.png';

const NotFound = () => {
	return (
		<ErrorPage>
			<h2>Página no encontrada</h2>
			<img src={imgError} alt="" />
		</ErrorPage>
	);
};

const ErrorPage = styled.div`
	margin: 5% 0;
	margin-left: 10%;
	margin-right: 10%;

	h2{
		font-size: 2rem;
		text-align: center;
		text-transform: uppercase;
		color: blue;
	}
	img{
		width: 100%;
		max-height: 500px;
	}
`;

export default NotFound;