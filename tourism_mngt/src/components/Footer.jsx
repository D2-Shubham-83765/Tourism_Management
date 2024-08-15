const Footer = ()=>{
 return (
  <div>

  <footer className="text-white text-center text-lg-start bg-dark">
    <div className="container p-4">
      <div className="row mt-3">
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About company</h5>

          <p>
          Shubhyatra is a leading provider of comprehensive travel management solutions. Our dedicated team of
            travel experts brings together years of industry experience and a genuine love for travel. We leverage our
            extensive network of partners and suppliers to offer you a diverse range of destinations, activities, and
            accommodations tailored to your preferences.
          </p>

          <p>
           
          </p>

        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4 pb-1">Contact Us</h5>

          <ul className="fa-ul">
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Hinjewadi, Pune(M.H), India</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contactus@shubhyatra.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 91 907 857 556 </span>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Follow us on</h5>
          <div className="mt-4">
            <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-facebook-f"></i></a>
            &nbsp;  &nbsp;
            <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-dribbble"></i></a>
            &nbsp; &nbsp;
            <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-twitter"></i></a>
            &nbsp;  &nbsp;
            <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-google-plus-g"></i></a>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center p-1">
      © 2024 Copyright:<span className="text-white"> ShubhYatra.com</span>
    </div>
  </footer>

</div>

 )
}
export default Footer;