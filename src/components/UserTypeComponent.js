import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import OurService from './OurService';

function UserTypeComponent() {
  return (
    <>
      

      <div className='container'>
        <div className='row justify-content-center'>

          {/* Doctor */}
          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="/doctorhome" className="btn btn-primary btn-block">
                    Doctor Dashboard
                  </Link>
                </form>
              </div>
            </div>
          </div>

          {/* Patient */}
          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="" className="btn btn-primary btn-block">
                    Patient Dashboard
                  </Link>
                </form>
              </div>
            </div>
          </div>

          {/* Medical */}
          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="" className="btn btn-primary btn-block">
                    Medical Dashboard
                  </Link>
                </form>
              </div>
            </div>
          </div>

          {/* Pharma */}
          <div className='col-lg-3'>
            <div className='card mb-4'>
              <div className="card-body">
                <form className="form-horizontal">
                  <Link to="" className="btn btn-primary btn-block">
                    Pharma Dashboard
                  </Link>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default UserTypeComponent;
