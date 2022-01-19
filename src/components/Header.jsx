import React, {useState} from 'react';
import logo from '../assets/logos/logo.jpg';
import '../styles/Header.scss';
import { BiMenu } from "react-icons/bi";
import Menu from './Menu';

const Header = () => {

	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle(!toggle);
	}

	return (
		<nav>
			<a href="/Horoscopo">
				<img src={logo} alt="" className="logo" />
			</a>
			<div className="nav-bar">
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
						<a href="/escribenos" className="nav-link">Escribenos</a>
					</li>
				</ul>
				<BiMenu className='menu' onClick={handleToggle}/>
			</div>
			{toggle && <Menu />}
		</nav>
	);
};

export default Header;