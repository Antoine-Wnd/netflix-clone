import './App.scss';
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './config/requests';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Video from './components/Video';





function App() {
  return (
    <div className="App">

      <Router>

        <Routes>

          <Route path="/" element={

            <React.Fragment>
              <Nav />
              <Banner />
              <Row title="Programmes originaux Netflix" fetchUrl={requests.fetchNetflixOriginals} isPoster={true} />
              <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending} />
              <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
              <Row title="Film d'horreur" fetchUrl={requests.fetchHorrorMovies} />
              <Row title="Film d'action" fetchUrl={requests.fetchActionMovies} />
              <Footer />
            </React.Fragment>
          } />


          <Route path="/video/:id" element={<Video />} />
          <Route path="*" element={<Navigate replace to="/" />} />

        </Routes>

      </Router>




    </div >
  );
}

export default App;
