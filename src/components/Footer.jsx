function Footer({ links, contact }) {
  return (
    <footer className="bg-dark text-white mt-4 pt-4">
      <div className="container">
        <div className="row px-lg-4">
          <div className="col-md-6 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled mb-0">
              {links.map((link) => (
                <li key={link}><a className="footer-link" href="#!">{link}</a></li>
              ))}
            </ul>
          </div>
          <div className="col-md-6 mb-3">
            <h5>Contact Info</h5>
            <ul className="list-unstyled mb-0">
              <li><a className="footer-link" href="#!">Contact Us</a></li>
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
            </ul>
          </div>
        </div>
        <hr className="border-secondary" />
        <p className="text-center pb-3 mb-0">
          &copy; 2024 StudentPortal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
