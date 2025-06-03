// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'
// import { BrowserRouter, Router, Route, Routes, Outlet } from 'react-router-dom'
// import Home from './Components/Home'
// import About from './Components/About'
// import Events from './Components/Events'
// import Stories from './Components/Stories'
// import Gallery from './Components/Gallery'
// import Testimonials from './Components/Testimonials'
// import Contact from './Components/Contact'
// import Navbar from './Components/Navbar'
// import Backdrop from './assets/backdrop.jpg'



// // Layout component that includes the Navbar and renders the current route
// function Layout() {
// 	return (
// 		<>
// 			<Navbar />
// 			<Outlet /> {/* This renders the child route component */}
// 		</>
// 	);
// }

// function App() {
// 	return (
// 		<div style={{ position: 'relative' }}>
// 			<img
// 				src={Backdrop}
// 				alt="backdrop"
// 				style={{
// 					position: 'fixed',
// 					top: 0,
// 					left: 0,
// 					width: '100%',
// 					height: '100%',
// 					objectFit: 'cover',
// 					zIndex: -1,
// 				}}
// 			/>
// 			<BrowserRouter>
// 				<Routes>
// 					<Route path="/" element={<Layout />}>
// 						<Route index element={<Home />} />
// 						<Route path="about" element={<About />} />
// 						<Route path="events" element={<Events />} />
// 						<Route path="life-stories" element={<Stories />} />
// 						<Route path="gallery" element={<Gallery />} />
// 						<Route path="testimonials" element={<Testimonials />} />
// 						<Route path="contact" element={<Contact />} />
// 					</Route>
// 				</Routes>
// 			</BrowserRouter>
// 		</div>
// 	);
// }

// export default App;


import React from "react";
import { Helmet } from "react-helmet";
import Home from './Components/Home'
import About from './Components/About'
import Events from './Components/Events'
import Stories from './Components/Stories'
import Gallery from './Components/Gallery'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
// import Navbar from './Components/Navbar'
// import Backdrop from './assets/backdrop.jpg'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
// Screens
import TopNavbar from "./components/Navbar/TopNavbar.jsx";
import Footer from "./Components/Footer.jsx";
// import ScrollingText from "./components/Nav/ScrollingText.jsx";
// import FloatingContactForm from "./components/Elements/FloatingContactForm.jsx";
// import SchoolCarousel from "./screens/SchoolCarousel.jsx";
// import CoursesPage from "./components/Sections/Courses/CoursesPage.js";
// import AboutUs from "./modules/AboutUs/index.jsx";
// import Footer from "./screens/Sections/Footer.jsx";
// import ContactUs from "./modules/ContactUs/index.jsx";
// import Webinars from "./modules/Events/Webinars.jsx";
// import Workshops from "./modules/Events/Workshops.jsx";
// import Hackathons from "./modules/Events/Hackathons.jsx";
// import Home from "./modules/AboutUs/Home/Home.jsx";
// import Service from "./modules/Events/services/Service.jsx";
// import Courses from "./modules/AboutUs/Courses/Course.jsx";
// import Course from "./modules/AboutUs/Courses/Course.jsx";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

export default function App() {
	return (
		<>
			<Helmet>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
					rel="stylesheet"
				/>
			</Helmet>

			<Router>
				{/* <ScrollingText /> */}
				<TopNavbar />
				{/* <FloatingContactForm /> */}
				{/* <ScrollToTop /> */}
				<Routes>
					<Route path="/" element={<Home />}  />
					<Route path="/home" element={<Navigate to="/" />} />
					<Route path="/about" element={<About />} />
					<Route path="/events" element={<Events />} />
					<Route path="/life-stories" element={<Stories />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/testimonials" element={<Testimonials />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				{/* <Footer /> */}
				<Footer />
			</Router>
		</>
	);
}
