import React from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block text-white'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset text-white'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>
                <MDBIcon icon="gem" className="me-3 " />
                RED DONOR
              </h6>
              <p className='text-white'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Useful links</h6>
              <p className='text-white'>
                <a href='/Signup' className='text-reset '>
                  User Signup
                </a>
              </p>
              <p className='text-white'> 
                <a href='/SignupA' className='text-reset '>
                Admin Signup
                </a>
              </p>
              <p className='text-white'>
                <a href='/Login' className='text-reset '>
                User Login
                </a>
              </p>
              <p className='text-white'>
                <a href='/LoginA' className='text-reset '>
                Admin Login
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact</h6>
              <p className='text-white'>
                <MDBIcon icon="home" className="me-2 text-white" />
                C1,Janakpuri,Delhi
              </p>
              <p className='text-white'>
                <MDBIcon icon="envelope" className="me-3 text-white" />
                redDonor@gmail.com
              </p>
              <p className='text-white'>
                <MDBIcon icon="phone" className="me-3 text-white" /> + 011 234 567 88
              </p>
              <p className='text-white'>
                <MDBIcon icon="print" className="me-3 text-white" /> + 011 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold ' href=''>
          RedDonor.com
        </a>
      </div>
    </MDBFooter>
  );
}