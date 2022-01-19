import React from 'react';
import styled from 'styled-components';

const Menu = () => {
	return (
		<Hamburguer className="hamburguer-menu">
			<ul>
				<li>
					<a href="#bienvenida" className="nav-link">Bienvenida</a>
				</li>
				<li>
					<a href="#nosotros" className="nav-link">Nosotros</a>
				</li>
				<li>
					<a href="#signos" className="nav-link">Signos</a>
				</li>
				<li>
					<a href="#" className="nav-link">Escribenos</a>
				</li>
			</ul>
		</Hamburguer>
	);
};

const Hamburguer = styled.div`
	position: absolute;
	right: 20px;
	top: 60px;
	ul{
		display: block;
		margin: 0 auto;
		padding: 0;
		border: 2px solid blue;
		border-radius: 5px;
	  li{
		  list-style: none;
		  text-align: center;
		  line-height: 2;
		  border-bottom: 1px solid gray;
		  padding: 5px 20px;
		  font-weight: 500;

		  &:hover{
			background: aqua;
		  }

		  &:last-child{
			  border: none;
		  }
		  
		  a{
			  text-decoration: none;
			  color: #000;


			  }
		  }
	  }
  }
`

export default Menu;