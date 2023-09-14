import { Card, Col, Container, Row } from 'react-bootstrap';
import { card01, card02, card03 } from '../assets';

const Games = () => {
  return (
    <>
      <div id='games'>
        <Container className='py-5'>
          <Row className='pt-5'>
            <h3 className='text-center text-capitalize pb-5 pt-5 h1'>
              Featured animal crossing games
            </h3>
          </Row>
          <Row className='g-4'>
            <Col md={4}>
              <Card className='card card-border w-100'>
                <Card.Img variant='top' src={card01} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className='card card-border w-100'>
                <Card.Img variant='top' src={card02} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className='card card-border w-100'>
                <Card.Img variant='top' src={card03} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='pt-2 pb-5'>
          <Col>
            <h3 className='text-center' style={{color: 'var(--bs-blue)'}}>More game on Nintendo.com</h3>
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={2}>
            <a href='/' className='text-center'>Nintendo Switch</a>
          </Col>
          <Col md={2}>
            <a href='/' className='text-center'>Nintendo 3DS</a>
          </Col>
          <Col md={1}>
            <a href='/' className='text-center'>Wii U</a>
          </Col>
          <Col md={1}>
            <a href='/' className='text-center'>Mobile</a>
          </Col>
          <Col md={1}>
            <a href='/' className='text-center'>Retro</a>
          </Col>
        </Row>
      </Container>
      <div id='separator-amiibos'>
        <div className='content bg-success' />
      </div>
    </>
  );
};

export default Games;
