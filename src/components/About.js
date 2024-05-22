import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    
     
      
  
        <Container >
          <Row className="justify-content-center  mt-5 ms-4 me-4  "  >
            
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center " style={{ backgroundColor: "#EDF4F2", padding: '2rem',marginTop:"4rem" }}>
            <img className='w-75' style={{borderRadius:'20px'}}  src="https://img.freepik.com/premium-vector/programmer-work-laptop-computer-website-code-program-concept_133260-5402.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1715904000&semt=ais_user" alt="" />
            </Col>
            <Col xs={12} md={6} className="d-flex align-items-center" style={{ backgroundColor: "#EDF4F2", padding: '2rem',marginTop:"4rem" }}>
              <div>
                
                <h3 className='fw-bold ' style={{fontSize:'40px'}}>About Me :)</h3>
                <p>
I am passionate about coding and continuously exploring new technologies to expand my skill set. With a strong foundation built through self-learning, I am always ready to tackle new challenges and develop innovative solutions. My enthusiasm for development drives me to stay updated with industry trends and continuously enhance my capabilities. Eager to grow and contribute, I am committed to creating efficient and impactful software solutions</p>
              </div>
            </Col>
            
           
          </Row>
        </Container>
    
    
    
    
    
      
    
  )
}

export default About