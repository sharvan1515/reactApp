import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import { Provider } from 'react-redux'
import store from './redux/store';


import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import routes from './routes';
import ScrollToTop from './components/ScrollToTop';

function App() {

	return (

		<Provider store={store}> {/* Provide Redux store */}

			<ThemeProvider> {/* Provide Theme Context */}
				<Router>
					<ScrollToTop />
					<Suspense fallback={<div>Loading...</div>}>
						<Header />
						<main className="container">
							<Routes>
								{routes.map((route, index) => (
									<Route key={index} path={route.path} element={<route.component />} />
								))}
							</Routes>
						</main>
						<Footer />
					</Suspense>
				</Router>
			</ThemeProvider>

		</Provider>
	)
}
export default App
