'use client';

export default function CompanyFormsView() {
  return (
    <main>
      {/* Banner */}
      <div
        style={{
          backgroundImage: `url('/img/world-banner.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '280px',
        }}
        className="w-full"
      >
        <div className="mx-auto max-w-7xl w-full px-4 py-8 text-center justify-center items-center flex flex-col">
          <h1 className="text-3xl font-semibold text-white drop-shadow-md">Company-Wide Forms</h1>
          <p className="text-gray-700 mt-4" style={{ color: '#ffffff' }}>
            Welcome to the Company-Wide Forms Page! Here, you'll find a comprehensive collection of
            forms to support your needs across various departments and processes.
          </p>
          <p className="mt-2 text-gray-700 mt-4" style={{ color: '#ffffff' }}>
            Whether you're submitting a reimbursement, requesting resources, or managing approvals,
            our forms are designed to make your experience efficient and seamles.
          </p>
          <p className="mt-2 text-gray-700 mt-4" style={{ color: '#ffffff' }}>
            Be sure to check for eForms where available, as we transition to digital submissions for
            faster processing.
          </p>
        </div>
      </div>

      {/* Hero */}

      {/* Layout */}
      <div className="mx-auto max-w-7xl w-full px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          {/* Human Resources */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Human Resources</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681591730377"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Affidavit of Domestic Partnership (44HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Application for Educational Assistance (12HRM) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Application for Scholarship Program (15HRM) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Application for Training (51HRM) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681593092570"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Authorization to Use and/or Disclose Personal Health Plan Information (56HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1714787543423"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bomb Threat Instructions (37HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conflict of Interest (55HRM) (eForm)
                </a>
              </li>
              <li>Employee Safety Violation Warning Report (36HRM)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681602378074"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Employee Termination Benefit Summary (23HRM)
                </a>
              </li>
              <li>Ergonomics Screening Tool (40HRM)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681598918284"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hybrid Workers Agreement Form (41HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681602532561"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HR Payable Voucher (64HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1678604773771"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medical Accommodation Request Form (COVID) (60HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1761040108185"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Medical Inquiry Form in Response to an Accommodation Request (57HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681600043278"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Employee Orientation Checklist (27HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nomination for Award (13HRM) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nomination for SSAI Corporate Citizen Award (28HRM) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nomination for Early Career Achievement Award (09HRM) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nomination for Chairman’s Innovation Award (10HRM) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nomination for SSAI Leadership Award (16HRM) (eForm)
                </a>
              </li>
              <li>Occupational Illness or Injury Report-Analysis (34HRM)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Offer Request (62HRM) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681591799226"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Outside Employment Request and Approval Form (25HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681591346277"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Patents, Inventions and Copyrights (03HRM)
                </a>
              </li>
              <li>
                <span>
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://ssaihq.app.box.com/file/1681603271892"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PTO Donation Form (38HRM)
                  </a>
                  <span className="text-gray-600"> · </span>
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://ssaihq.app.box.com/file/1681594343555"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PTO Donation Request (39HRM)
                  </a>
                </span>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681598547700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reasonable Accommodation Request Form (58HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681595498069"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Religious Accommodation Request Form
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1701225695153"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request for Family and Medical Leave of Absence (06HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1813505958657"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request for Personal Leave of Absence (07HRM)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681600722506"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Requisition Request (61HRM)
                </a>
              </li>
              <li>Safety Program Evaluation Checklist (47HRM) (Excel)</li>
              <li>
                <span>
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://ssaihq.app.box.com/file/1681599213444"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Trade Secrets and Confidential Data-Information (04HRM)
                  </a>
                  <span className="text-gray-600"> · </span>
                  <a
                    className="text-blue-600 hover:underline"
                    href="https://ssaihq.app.box.com/file/1681600990987"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visa Processing Application (08HRM)
                  </a>
                </span>
              </li>
            </ul>
          </section>
          {/* Administrator's Forms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Administrator's Forms</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.box.com/s/xm9gwynczejgrobxaxwysyjvbhdgfjus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Business Card Request (10ADM) (eForm)
                </a>
              </li>
            </ul>
          </section>
          {/* Facilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Facility Forms</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681594681541"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Attendance Register (04FAC)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681594007982"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facilities Services Request (03FAC)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681605402432"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facilities After Hours HVAC Request (06FAC)
                </a>
              </li>
              <li>Government Equipment Transaction (01FAC)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681599709783"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Property Loan Agreement (05FAC)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681604206964"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visitors Register (02FAC)
                </a>
              </li>
            </ul>
          </section>

          {/* Procurement Forms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Procurement Forms</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>Employee vs. Independent Contractor Status Checklist (01PRO)</li>
              <li>Justification for Teaming Agreement (1.16PRO)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681590536909"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase Requisition (1.10PRO) (PDF)
                </a>
              </li>
              <li>Purchase Card Approval Form (1.11PRO)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681596453507"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Single/Sole Source Justification (2.06PRO)
                </a>
              </li>
              <li>Technical Evaluation Form (4.04PRO)</li>
              <li>Vendor Performance Rating Form (4.10PRO) (Excel)</li>
            </ul>
          </section>
        </div>
        <div className="">
          {/* Accounting */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Accounting</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>Accounts Payable Voucher (09ACCT)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681599426583"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Asset Disposition (29ACCT)
                </a>
              </li>
              <li>Capital Asset Requisition (28ACCT)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681590421609"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Requisition (08ACCT)
                </a>
              </li>
              <li>Local Travel Expense (01ACCT)</li>
              <li>Payroll Direct Deposit (15ACCT)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681594454145"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Electronic Funds Transfer Enrollment — Expense Deposits (05ACCT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681597568618"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  New Vendor Notification (31ACCT)
                </a>
              </li>
              <li>Non-Employee Travel &amp; Expense Form (03ACCT-02) (Excel)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681597280493"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Petty Cash Voucher (20ACCT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681599722363"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PI Budget Information Sheet
                </a>
              </li>
              <li>Receiving Report Log (27ACCT)</li>
              <li>Request for Extended Work Week(s) (06ACCT)</li>
              <li>Travel &amp; Expense Report (03ACCT)</li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681594343783"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel &amp; Expense Report (Excel)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1751511767770"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Travel Request (02ACCT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline break-all"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trip Report (25ACCT) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline break-all"
                  href="https://fr.ssai.app/forms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voucher (04ACCT) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline break-all"
                  href="https://ssaihq.app.box.com/file/1681594418399"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voucher Correction (33ACCT) (PDF)
                </a>
              </li>
            </ul>
          </section>
          {/* Contract Forms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">Contract Forms</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681589192782"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contract Closeout Cover Sheet (01CNT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681599777412"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Firm Fixed Price Subcontract Milestone Payment Approval (07CNT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681594178275"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Government Contract Closeout Checklist (03CNT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681592041435"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Performance Evaluation Survey (05CNT)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.box.com/s/4fggywerzcjtfmzqb6f4n45wmc5bmull"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request for Extended Work Week (09CNT) (eForm)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681595349435"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Work Authorization (06CNT)
                </a>
              </li>
            </ul>
          </section>
          {/* IT Forms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">IT Forms</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681595434939"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Laptop Request for New Hires (04ITI)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681605887291"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SSAI New Employee IT Equipment Agreement (05ITI)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681598598908"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Uniform Service Authorization (01ITI)
                </a>
              </li>
            </ul>
          </section>

          {/* QMS Forms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">QMS Forms</h2>
            <ul className="mt-3 list-disc list-inside space-y-2 text-gray-700">
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681592565374"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  QMS Procedure Checklist (04QMS)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681599184171"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  QMS Procedure Template (QMP-001-T1)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1701245416333"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quality Action Request Form (06QMS)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681592886954"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quality Management Review (01QMS)
                </a>
              </li>
              <li>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://ssaihq.app.box.com/file/1681592944554"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SSAI Internal Audit Template (QMP-003-T1)
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="">
          <section className="p-4">
            <div className="flex items-center gap-4">
              <img
                src="/img/josie-pearson.jpg"
                alt="Josie Pearson"
                className="w-20 h-20 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Josie Pearson</h3>
                <p className="text-gray-700">Office: 757-951-1607</p>
                <p className="text-gray-700">
                  Email: {" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="mailto:josie.pearson@ssaihq.com"
                  >
                    josie.pearson@ssaihq.com
                  </a>
                </p>
              </div>
            </div>

            <img
              src="/img/pngtree-gears-background-cog-wheel-png-image_9954527.png"
              alt="E-Forms gear"
              className="mt-8 mx-auto w-full max-w-sm sm:max-w-md"
            />

            <h3 className="mt-10 text-3xl sm:text-4xl font-semibold text-blue-600">
              <a
                className="hover:underline"
                href="https://my.ssai.app/e-forms"
                target="_blank"
                rel="noopener noreferrer"
              >
                E-Forms
              </a>
            </h3>

            <div className="mt-4 text-gray-700 space-y-4 leading-relaxed">
              <p>
                <strong>Disclaimer:</strong> If “eForm” is listed by the form title, please use this
                digital version instead of the paper form. By clicking on forms marked with “eForm,”
                you will be redirected to the eForm subpage which will have a link redirecting to the
                eForm platform to complete your submission.
              </p>
              <p>
                Note that most of these forms will soon be removed from the company-wide forms subpage
                and will be accessible solely on the eForm platform.
              </p>
              <p>Thank you for helping us streamline processing and improve accuracy.</p>

              <div className="pt-2">
                <p className="font-semibold">Launched eForms</p>
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                  <li>Voucher — 09/30/2024</li>
                  <li>Trip Report — 12/02/2024</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
