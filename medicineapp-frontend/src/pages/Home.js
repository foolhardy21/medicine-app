import React from 'react'
import { Link } from 'react-router-dom';
import DonorForm from '../components/Donor'
import first from '../assets/fourth.jpg'
import second from '../assets/two.jpg'
import third from '../assets/three.jpg'


function Home() {
  return (
    <div>
      <DonorForm/>

      <div className="carousel slide m-4"  id="carouselControls" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselControls" data-slide-to="0" className="active bg-danger"></li>
          <li data-target="#carouselControls" data-slide-to="1" className="bg-danger"></li>
          <li data-target="#carouselControls" data-slide-to="2" className="bg-danger"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active border">
            <img className="d-block w-100" src={first} height="400"  alt="first slide"/>
          </div>
          <div className="carousel-item border">
            <img className="d-block w-100" src={second} height="400" alt="second slide"/>
          </div>
          <div className="carousel-item border">
            <img className="d-block w-100" src={third} height="400" alt="third slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
  
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          | <Link to="/">Home</Link>  | <Link to="/about">About</Link> | <Link to="/about">Testimonials</Link> | 
        </div>
        <div className="text-center p-3">
          &copy;2021 Copyright:
          <a class="text-white" href="https://www.persistentfoundation.org/about/"> Persistent Systems foundation</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
