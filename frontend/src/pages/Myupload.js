import React from 'react';
import './myupload.css'
import womenhand from '../images/womenhand.avif';
import menshand from '../images/menshand.avif';
import smarthand from '../images/smarthand.avif';

import {Link} from 'react-router-dom'


const Myupload = () => {
  return (
    <section>
      <div className="row  myupload h-100 w-100">

        <div className="col-lg-4 menup">
          <div className="image-container">
            <img src={menshand} alt="menshand" width={420} height={600} />
            <Link className="textoverimage" to="/upload">Click here to Upload more on men</Link>
          </div>
        </div>
        <div className="col-lg-4 womenup">
          <div className="image-container">
            <img src={womenhand} alt="womenhand" width={420} height={600} />
            
            <Link className="textoverimage" to="/uploadwomen">Click here to Upload more on women</Link>

           
          </div>
        </div>
          <div className="col-lg-4 womenup">
          <div className="image-container">
            <img src={smarthand} alt="smarthand" width={419} height={600} />
            
            <Link className="textoverimage" to="/uploadsmart">Click here to Upload more on smart</Link>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Myupload;
