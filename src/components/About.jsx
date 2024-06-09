import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import DocumentTitle from '../changeTitle';
import { MyContext } from '../context/MyContext';

const About = () => {
  DocumentTitle("About || Bajrang Computers")
  const { state, setState } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="container-fluid p-0 mt-5 mb-5">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/AboutOurVision.webp" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
              Our vision at undefined is to be the leading provider of online computer services globally. We aim to achieve this by providing innovative and reliable services that meet the evolving needs of our clients.              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card">
            <img src="/assets/OurExpertise.webp" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Our Expertise</h5>
              <p className="card-text">
              Our team of experts at undefined has years of experience in the computer industry. We are well-equipped to handle any challenge that comes our way, and we are always up-to-date with the latest technology trends.
              </p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div onClick={() => navigate('/services')} className="col-md-4">
          <div className="card">
            <img src="/assets/OurServices.webp" className="card-img-top" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Our Services</h5>
              <p className="card-text">
              We offer a variety of services such as hardware repair, network setup, system optimization, and cybersecurity. Our services are designed to help our clients get the most out of their computer systems.
              </p>
              <a href="#" className="btn btn-primary">Services</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

