import { isabelle, ph01, ph02, ph03, ph04 } from '../assets';

const PlayNintendo = () => {
  return (
    <div id='play'>
      <div className='container-sm p-5'>
        <h3 className='text-center h1'>
          Isabelle and friends on Play Nintendo
        </h3>
        <div className='row justify-content-center align-items-center'>
          <div className='col-3 d-none d-md-block'>
            <img src={isabelle} className='w-100' />
          </div>
          <div className='col-9'>
            <div className='row justify-content-md-center'>
              <div className='col p-1'>
                <div className='card bg-primary text-white'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src={ph01} className='w-100' alt='...' />
                    </div>
                    <div className='col-md-6'>
                      <div className='card-body'>
                        <h5 className='card-title'>Card title</h5>
                        <p className='card-text'>
                          This is a wider card with supporting text below.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col p-1'>
                <div className='card bg-warning text-white'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='card-body'>
                        <h5 className='card-title'>Card title 2</h5>
                        <p className='card-text'>
                          This is a wider card with supporting text below.
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <img src={ph02} className='w-100' alt='...' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row  justify-content-md-center'>
              <div className='col p-1'>
                <div className='card bg-danger text-white'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <img src={ph03} className='w-100' alt='...' />
                    </div>
                    <div className='col-md-6'>
                      <div className='card-body'>
                        <h5 className='card-title'>Card title</h5>
                        <p className='card-text'>
                          This is a wider card with supporting text below.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col p-1'>
                <div className='card bg-success text-white'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='card-body'>
                        <h5 className='card-title'>Card title</h5>
                        <p className='card-text'>
                          This is a wider card with supporting text below.
                        </p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <img src={ph04} className='w-100' alt='...' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayNintendo;
