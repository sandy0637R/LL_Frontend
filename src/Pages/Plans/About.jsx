import React from 'react';
import { FaUserTie } from 'react-icons/fa';

const DevelopersSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-white">Meet the Developers</h2>
      <div className="row justify-content-center">
        {/* Developer 1 */}
        <div className="col-md-5 col-lg-4 m-2">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <FaUserTie size={40} className="text-primary mb-3" />
              <h5 className="card-title text-primary">Deepak Pandey</h5>
              <p className="card-text">Second-year Computer Science student.</p>
              <a
                href="https://www.linkedin.com/in/deepak-pandey-189a2631b"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm mt-3"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Developer 2 */}
        <div className="col-md-5 col-lg-4 m-2">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <FaUserTie size={40} className="text-primary mb-3" />
              <h5 className="card-title text-primary">Sandesh Raut</h5>
              <p className="card-text">Second-year Computer Science student.</p>
              <a
                href="https://www.linkedin.com/in/sandesh-raut-3889b02ba"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm mt-3"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopersSection;
