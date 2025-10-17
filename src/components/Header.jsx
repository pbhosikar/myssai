'use client';
import ClientLink from '@/components/ClientLink';
export default function Header() {
  return (
    <header className="bg-white border-bottom border-light navbar navbar-light py-4 section-header">
      <div className="container d-flex align-items-center justify-content-between text-break">
        <div className="align-items-center d-flex flex-column flex-lg-row mt-3 mt-lg-0">
          <picture>
            <img
              alt="SSAI Logo"
              className="section-header-logo"
              src="/img/ssai_logo.svg"
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
                <ClientLink
                  className="nav-link text-truncate"
                  to="/home"
                  role="menuitem"
                >
                  <span className="text-truncate"> Home </span>
                </ClientLink>
              </li>
              <li className="lfr-nav-item nav-item" role="presentation">
                <ClientLink
                  className="nav-link text-truncate"
                  to="/my-workspace"
                  role="menuitem"
                >
                  <span className="text-truncate"> My Workspace </span>
                </ClientLink>
              </li>
              <li className="lfr-nav-item nav-item dropdown" role="presentation">
                <ClientLink
                  className="nav-link text-truncate dropdown-toggle"
                  to="/my-hr"
                  role="menuitem"
                  aria-haspopup="true"
                >
                  <span className="text-truncate">
                    My HR
                    <span className="lfr-nav-child-toggle ml-1">
                      <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </span>
                </ClientLink>
                <ul aria-expanded="false" className="child-menu dropdown-menu" role="menu">
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/my-hr/benefits">
                      Benefits
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/my-hr/health-safety">
                      Safety Corner
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/my-hr/knowledge-training">
                      Knowledge &amp; Training
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/my-hr/employee-rights">
                      Employee-rights
                    </ClientLink>
                  </li>
                </ul>
              </li>
              <li className="lfr-nav-item nav-item dropdown" role="presentation">
                <ClientLink
                  className="nav-link text-truncate dropdown-toggle"
                  to="/company"
                  role="menuitem"
                  aria-haspopup="true"
                >
                  <span className="text-truncate">
                    Company
                    <span className="lfr-nav-child-toggle ml-1">
                      <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </span>
                </ClientLink>
                <ul aria-expanded="false" className="child-menu dropdown-menu" role="menu">
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/accounting-payroll">
                      Accounting &amp; Payroll
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/business-development">
                      Business Development
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/communications">
                      Communications
                    </ClientLink>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <ClientLink className="dropdown-item" to="/company/communications-survey-results">
                        Communications Survey Results
                      </ClientLink>
                    </li>
                  </ul>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/employee-faqs">
                      Employee FAQs
                    </ClientLink>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <ClientLink className="dropdown-item" to="/company/updated-pto-policy-frequently-asked-questions">
                        Updated PTO Policy FAQs
                      </ClientLink>
                    </li>
                  </ul>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/information-technology">
                      Information Technology
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/opportunities">
                      Opportunities
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/quality-management-system">
                      Quality Management System
                    </ClientLink>
                  </li>
                  <ul className="list-unstyled pl-3">
                    <li role="presentation">
                      <ClientLink className="dropdown-item" to="/company/company-forms">
                        Company Forms
                      </ClientLink>
                    </li>
                  </ul>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/strategy">
                      Strategy
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/travel">
                      Travel
                    </ClientLink>
                  </li>
                  <li role="presentation">
                    <ClientLink className="dropdown-item" to="/company/ssai-roundup">
                      SSAI Roundup
                    </ClientLink>
                  </li>
                </ul>
              </li>
              <li className="lfr-nav-item nav-item" role="presentation">
                <ClientLink
                  className="nav-link text-truncate"
                  to="/search"
                  role="menuitem"
                >
                  <span className="text-truncate"> Search </span>
                </ClientLink>
              </li>
              <li className="lfr-nav-item nav-item" role="presentation">
                <ClientLink
                  className="nav-link text-truncate"
                  to="/om-bahethi"
                  role="menuitem"
                >
                  <span className="text-truncate"> Om Bahethi </span>
                </ClientLink>
              </li>
              <li className="lfr-nav-item nav-item" role="presentation">
                <ClientLink
                  className="nav-link text-truncate"
                  to="/login"
                  role="menuitem"
                >
                  <span className="text-truncate"> Login </span>
                </ClientLink>
              </li>
            </ul>
          </nav>
          {/* Search bar matching legacy structure */}
          <form action="/search" method="get" className="ml-lg-3 mt-4 mt-lg-0">
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
