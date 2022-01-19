import React from 'react';
import logo from '../assets/logos/logo.jpg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import '../styles/Footer.scss';


const Footer = () => {
	return (
		<footer>
			<div className="col-izq">
				<a href="/Horoscopo">
					<img src={logo} alt="" className="logo-2" />
				</a>
			</div>
			<div className="col-der">
				<div className="social">
					<a href="http://www.facebook.com" target="_blank">
						<FaFacebook />
					</a>
					<a href="http://www.instagram.com" target="_blank">
						<FaInstagram />
					</a>
					<a href="http://www.twitter.com" target="_blank">
						<FaTwitter />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;