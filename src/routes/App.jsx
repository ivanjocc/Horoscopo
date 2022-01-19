import React from 'react';
import { Route, Routes, BrowserRouter, Switch, Link } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Acuario from '../pages/acuario';
import Aries from '../pages/aries';
import Cancer from '../pages/cancer';
import Capricornio from '../pages/capricornio';
import Escorpion from '../pages/escorpion';
import Geminis from '../pages/geminis';
import Leo from '../pages/leo';
import Libra from '../pages/libra';
import Piscis from '../pages/piscis';
import Sagitario from '../pages/sagitario';
import Tauro from '../pages/tauro';
import Virgo from '../pages/virgo';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/acuario" element={<Acuario />} />
					<Route exact path="/aries" element={<Aries />} />
					<Route exact path="/cancer" element={<Cancer />} />
					<Route exact path="/capricornio" element={<Capricornio />} />
					<Route exact path="/escorpion" element={<Escorpion />} />
					<Route exact path="/geminis" element={<Geminis />} />
					<Route exact path="/leo" element={<Leo />} />
					<Route exact path="/libra" element={<Libra />} />
					<Route exact path="/piscis" element={<Piscis />} />
					<Route exact path="/sagitario" element={<Sagitario />} />
					<Route exact path="/tauro" element={<Tauro />} />
					<Route exact path="/virgo" element={<Virgo />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
