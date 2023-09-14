import { Col, Container, Row } from 'react-bootstrap';
import { figure01, figure02, figure03, figure04 } from '../assets';

const SeparatorAmiibos = () => {
  return (
    <>
      <div id='amiibos' className='bg-success px-2 pb-5'>
        <Container>
          <Row>
            <h2 className='text-center text-white text-shadow'>
              Featured Amiibo Figures
            </h2>
          </Row>
          <Row className='g-5'>
            <Col
              md={6}
              xl={3}
              className='d-flex align-items-center flex-column'
            >
              <img src={figure01} alt='...' />
              <div className='text-center'>
                <span className='amiibo-name h-5 p-2'>Isabelle</span>
              </div>
            </Col>
            <Col
              md={6}
              xl={3}
              className='d-flex align-items-center flex-column'
            >
              <img src={figure02} alt='...' />
              <div className='text-center'>
                <span className='amiibo-name h-5 p-2'>Kapp'n</span>
              </div>
            </Col>
            <Col
              md={6}
              xl={3}
              className='d-flex align-items-center flex-column'
            >
              <img src={figure03} alt='...' />
              <div className='text-center'>
                <span className='amiibo-name h-5 p-2'>Rover</span>
              </div>
            </Col>
            <Col
              md={6}
              xl={3}
              className='d-flex align-items-center flex-column'
            >
              <img src={figure04} alt='...' />
              <div className='text-center'>
                <span className='amiibo-name h-5 p-2'>Timmy and Tommy</span>
              </div>
            </Col>
          </Row>
          <Row className='py-5'>
            <Col sm={12} className='text-center'>
              <a className='btn btn-warning btn-lg link-dark rounded-pill p-2 font-weight-bold' href='/'>View Amiibo Catalog</a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SeparatorAmiibos;
