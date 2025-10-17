export default function Header() {
  return (
    <header className="bg-white border-bottom border-light navbar navbar-light py-4 section-header">
      <div className="container d-flex align-items-center justify-content-between text-break">
        <div className="align-items-center d-flex flex-column flex-lg-row mt-3 mt-lg-0">
          <picture>
            <img
              alt="Logo Image"
              className="section-header-logo"
              src="http://localhost:4040/documents/32054/0/ssai_logo.png/b5d2d137-b0e3-6708-d9d1-4f01c795b986?version=1.0&t=1712849313894"
            />
          </picture>
          <div className="section-header-title">mySSAI</div>
        </div>
        <div className="align-items-center d-flex flex-column flex-lg-row mt-3 mt-lg-0">
          <nav>
            <ul
              aria-label="Site Pages"
              className="navbar-blank navbar-nav navbar-site"
              role="menubar"
            >
              <li className="lfr-nav-item nav-item selected active" role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="http://localhost:4040/home"
                  role="menuitem"
                >
                  x<span className="text-truncate"> Home </span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item" role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="http://localhost:4040/my-workspace"
                  role="menuitem"
                >
                  <span className="text-truncate"> My Workspace </span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item dropdown" role="presentation">
                <a
                  className="nav-link text-truncate dropdown-toggle"
                  href="http://localhost:4040/my-hr"
                  role="menuitem"
                  aria-haspopup="true"
                >
                  <span className="text-truncate">
                    My HR
                    <span className="lfr-nav-child-toggle ml-1">
                      <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </span>
                </a>
                <ul aria-expanded="false" className="child-menu dropdown-menu" role="menu">
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/h-r/benefits">
                      Benefits
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/h-r/health-safety">
                      Safety Corner
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      className="dropdown-item"
                      href="http://localhost:4040/h-r/knowledge-training"
                    >
                      Knowledge &amp; Training
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/h-r/employee-rights">
                      Employee-rights
                    </a>
                  </li>
                </ul>
              </li>
              <li className="lfr-nav-item nav-item dropdown" role="presentation">
                <a
                  className="nav-link text-truncate dropdown-toggle"
                  href="http://localhost:4040/company"
                  role="menuitem"
                  aria-haspopup="true"
                >
                  <span className="text-truncate">
                    Company
                    <span className="lfr-nav-child-toggle ml-1">
                      <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </span>
                </a>
                <ul aria-expanded="false" className="child-menu dropdown-menu" role="menu">
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/accounting-payroll">
                      Accounting &amp; Payroll
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/business-development">
                      Business Development
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/communications">
                      Communications
                    </a>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <a
                        className="dropdown-item"
                        href="http://localhost:4040/communications-survey-results"
                      >
                        Communications Survey Results
                      </a>
                    </li>
                  </ul>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/employee-faqs">
                      Employee FAQs
                    </a>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <a
                        className="dropdown-item"
                        href="http://localhost:4040/updated-pto-policy-frequently-asked-questions"
                      >
                        Updated PTO Policy FAQs
                      </a>
                    </li>
                  </ul>
                  <li role="presentation">
                    <a
                      className="dropdown-item"
                      href="http://localhost:4040/information-technology"
                    >
                      Information Technology
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/opportunities">
                      Opportunities
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      className="dropdown-item"
                      href="http://localhost:4040/quality-management-system"
                    >
                      Quality Management System
                    </a>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <a className="dropdown-item" href="http://localhost:4040/company-forms">
                        Company Forms
                      </a>
                    </li>
                  </ul>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/strategy">
                      Strategy
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/travel">
                      Travel
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="http://localhost:4040/ssai-roundup">
                      SSAI Roundup
                    </a>
                  </li>
                </ul>
              </li>
              <li className="lfr-nav-item nav-item" role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="http://localhost:4040/search"
                  role="menuitem"
                >
                  <span className="text-truncate"> Search </span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item" role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="http://localhost:4040/om-bahethi"
                  role="menuitem"
                >
                  <span className="text-truncate"> Om Bahethi </span>
                </a>
              </li>
              <li className="lfr-nav-item nav-item" role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="http://localhost:4040/openid/-/login/openid_connect_request?p_p_state=maximized&_com_liferay_login_web_portlet_LoginPortlet_saveLastPath=false&_com_liferay_login_web_portlet_LoginPortlet_redirect=/&_com_liferay_login_web_portlet_LoginPortlet_OPEN_ID_CONNECT_PROVIDER_NAME=Azure%20OIDC"
                  role="menuitem"
                >
                  <span className="text-truncate"> Login </span>
                </a>
              </li>
            </ul>
          </nav>
          {/* Search bar matching legacy structure */}
          <form action="http://localhost:4040/search" method="get" className="ml-lg-3 mt-4 mt-lg-0">
            <div className="input-group search-bar-suggestions">
              <div className="input-group-item">
                <div className="input-group">
                  <input
                    aria-label="Search"
                    autoComplete="off"
                    name="q"
                    placeholder="Search..."
                    title="Search"
                    className="form-control input-group-inset input-group-inset-after search-bar-keywords-input"
                    type="text"
                  />
                  <div className="input-group-inset-item input-group-inset-item-after">
                    <button className="btn btn-unstyled" type="submit" aria-label="Search">
                      <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          {/* Personal menu button to mirror legacy */}
          <span className="ml-lg-3 mt-4 mt-lg-0">
            <div className="personal-menu-dropdown lfr-tooltip-scope">
              <div className="dropdown">
                <button
                  className="dropdown-toggle btn btn-unstyled"
                  type="button"
                  aria-label="User Profile"
                  title="User Profile Menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sticker user-icon-color-6 sticker-circle sticker-lg">
                    <span className="sticker-overlay">
                      <i className="fa-solid fa-user" aria-hidden="true"></i>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </span>
        </div>
      </div>
    </header>
  );
}
