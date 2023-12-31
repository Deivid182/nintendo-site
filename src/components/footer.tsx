
const Footer = () => {
  return (
    <div id="footer" className="p-5">
      <div className="container w-50 pt-5">
        <div className="row row-cols-md-2 justify-content-md-center">
          <div className="col text-center">
            <a href="#">
              <button className="btn btn-lg rounded-pill btn-warning w-100  p-3 shadow-sm font-weight-bold">Customer Support</button>
            </a>
            
          </div>
        </div>
        <div className="row justify-content-md-center py-5">
          <div className="col text-center font-weight-light">
            <p>For Nintendo 3DS systems, use Parental Controls to restrict 3D mode for children 6 and under.</p>
            <p>Internet access required for online features. For more info, go to support.nintendo.com.</p>
            <p>Games and amiibo accessories sold separately. Figures shown not actual size. Compatibility and functionality of amiibo may vary per game. Visit amiibo.com for specific details on how each amiibo works.</p>
            <p>© 2001 - 2020 Nintendo. Nintendo properties are trademarks of Nintendo.</p>
          </div>
          
        </div>
        <div className="row"></div>
      </div>
    </div>
  )
}

export default Footer