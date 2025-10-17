export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col ssai-footer-logo ">
            <figure>
              <a href="https://www.ssaihq.com/">
                <img src="/img/ssai_logo_white.svg" alt="SSAI Logo" />
              </a>
            </figure>
          </div>
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="/web/ssaihq/home">Science Systems and Applications, Inc.</a>
              </li>
              <li>
                <a href="https://my.ssai.app/home">MySSAI Home</a>
              </li>
              <li>
                <a href="https://my.ssai.app/my-hr">My HR</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>&nbsp;</h4>
            <ul>
              <li>
                <a href="https://my.ssai.app/my-workspace">My Workspace</a>
              </li>
              <li>
                <a href="https://my.ssai.app/company">Company</a>
              </li>
              <li>
                <a href="https://my.ssai.app/search">Search</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links" aria-label="Follow SSAI on social media">
              <a
                href="https://www.linkedin.com/company/ssai/posts/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/ssaihq/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.facebook.com/SciSysApp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
              >
                <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a
                href="https://twitter.com/ssaihq"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter-icon"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="16"
                  height="16"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                  role="img"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ScienceSystemsandApplicationsI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
              >
                <i className="fa-brands fa-youtube" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
