import { image01 } from '../assets';
import { Col, Container, Row } from 'react-bootstrap';

const Ribbon = () => {
  return (
    <>
      <div id='ribbon'>
        <Container fluid id='birthday' className='w-50 rounded-3'>
          <Row className='align-items-center'>
            <Col sm={6} className='p-3'>
              <img
                src={image01}
                alt='isabelle'
                className='w-75 mx-auto d-block'
              />
            </Col>
            <Col sm={6} className='p-3 text-light text-center'>
              <p className='text-warning h3'>Today is</p>
              <h4 className='text-shadow'>Samson's Birthday</h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div id='separator-ribbon'>
        <div className='content bg-warning'></div>
      </div>
    </>
  );
};

export default Ribbon;
