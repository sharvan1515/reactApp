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
					<Suspense fallback={<div className="flex justify-center items-center">
						{/* Tailwind CSS spinner */}
						<div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
					</div>}>
						<Header />
						<main className="">
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
