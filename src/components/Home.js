import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={10} className="d-flex align-items-center " style={{ backgroundColor: "#EDF4F2", margin: '5rem 0', padding: '2rem',borderRadius:"60px" }}>
          <div className='me-5 ms-5'>
            <div>
              <h4  className='fs-4 f'>Hi and welcome to</h4>
              <h3 className='fs-1 fw-bolder '>My portfolio website</h3>
            </div>
            <p>Iam your friendly neighbourhood osm developer</p>
          </div>
          <div className='ms-5'>
            <img className='w-75 ms-5' style={{borderRadius:'20px'}} src="https://img.freepik.com/free-vector/software-developing-programmers-investigates-code_90220-174.jpg?t=st=1716293279~exp=1716296879~hmac=483594e6452772e52b4362768311ba6adb970e523d9828ec8940f711983055c6&w=826" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home