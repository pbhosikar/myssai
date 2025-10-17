'use client';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname.startsWith('/home');
  const isWorkspace = pathname.startsWith('/my-workspace');
  const isMyHR = pathname.startsWith('/my-hr') || pathname.startsWith('/h-r');
  const isCompany =
    pathname.startsWith('/company') ||
    pathname.startsWith('/accounting-payroll') ||
    pathname.startsWith('/business-development') ||
    pathname.startsWith('/communications') ||
    pathname.startsWith('/employee-faqs') ||
    pathname.startsWith('/updated-pto-policy-frequently-asked-questions') ||
    pathname.startsWith('/information-technology') ||
    pathname.startsWith('/opportunities') ||
    pathname.startsWith('/quality-management-system') ||
    pathname.startsWith('/company-forms') ||
    pathname.startsWith('/strategy') ||
    pathname.startsWith('/travel') ||
    pathname.startsWith('/ssai-roundup');
  const isSearch = pathname.startsWith('/search');
  const isOmBahethi = pathname.startsWith('/om-bahethi');
  return (
    <header className="bg-white border-bottom border-light navbar navbar-light py-4 section-header">
      <div className="container d-flex align-items-center justify-content-between text-break">
        <div className="align-items-center d-flex flex-column flex-lg-row mt-3 mt-lg-0">
          <picture>
            <img
              alt="Logo Image"
              className="section-header-logo"
              src="/img/b5d2d137-b0e3-6708-d9d1-4f01c795b986_3f766572.png"
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
              <li className={`lfr-nav-item nav-item ${isHome ? 'selected active' : ''}`} role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="/home"
                  role="menuitem"
                >
                  <span className="text-truncate"> Home </span>
                </a>
              </li>
              <li className={`lfr-nav-item nav-item ${isWorkspace ? 'selected active' : ''}`} role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="/my-workspace"
                  role="menuitem"
                >
                  <span className="text-truncate"> My Workspace </span>
                </a>
              </li>
              <li className={`lfr-nav-item nav-item dropdown ${isMyHR ? 'selected active' : ''}`} role="presentation">
                <a
                  className="nav-link text-truncate dropdown-toggle"
                  href="/my-hr"
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
                    <a className="dropdown-item" href="/h-r/benefits">
                      Benefits
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="/h-r/health-safety">
                      Safety Corner
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      className="dropdown-item"
                      href="/h-r/knowledge-training"
                    >
                      Knowledge &amp; Training
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="/h-r/employee-rights">
                      Employee-rights
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`lfr-nav-item nav-item dropdown ${isCompany ? 'selected active' : ''}`} role="presentation">
                <a
                  className="nav-link text-truncate dropdown-toggle"
                  href="/company"
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
                    <a className="dropdown-item" href="/accounting-payroll">
                      Accounting &amp; Payroll
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="/business-development">
                      Business Development
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="/communications">
                      Communications
                    </a>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <a
                        className="dropdown-item"
                        href="/communications-survey-results"
                      >
                        Communications Survey Results
                      </a>
                    </li>
                  </ul>
                  <li role="presentation">
                    <a className="dropdown-item" href="/employee-faqs">
                      Employee FAQs
                    </a>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <a
                        className="dropdown-item"
                        href="/updated-pto-policy-frequently-asked-questions"
                      >
                        Updated PTO Policy FAQs
                      </a>
                    </li>
                  </ul>
                  <li role="presentation">
                    <a
                      className="dropdown-item"
                      href="/information-technology"
                    >
                      Information Technology
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="/opportunities">
                      Opportunities
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      className="dropdown-item"
                      href="/quality-management-system"
                    >
                      Quality Management System
                    </a>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <a className="dropdown-item" href="/company-forms">
                        Company Forms
                      </a>
                    </li>
                  </ul>
                  <li role="presentation">
                    <a className="dropdown-item" href="/strategy">
                      Strategy
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="/travel">
                      Travel
                    </a>
                  </li>
                  <li role="presentation">
                    <a className="dropdown-item" href="/ssai-roundup">
                      SSAI Roundup
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`lfr-nav-item nav-item ${isSearch ? 'selected active' : ''}`} role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="/search"
                  role="menuitem"
                >
                  <span className="text-truncate"> Search </span>
                </a>
              </li>
              <li className={`lfr-nav-item nav-item ${isOmBahethi ? 'selected active' : ''}`} role="presentation">
                <a
                  className="nav-link text-truncate"
                  href="/om-bahethi"
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
          <form action="/search" method="get" className="ml-lg-3 mt-4 mt-lg-0">
            <div className="input-group search-bar-suggestions">
              <div className="input-group-item">
                <div className="input-group">
                  <div className="search-input-wrapper w-full">
                    <input
                      aria-label="Search"
                      autoComplete="off"
                      name="q"
                      placeholder="Search..."
                      title="Search"
                      className="form-control input-group-inset input-group-inset-after search-bar-keywords-input search-input"
                      type="text"
                    />
                    <button className="btn btn-unstyled search-submit" type="submit" aria-label="Search">
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
