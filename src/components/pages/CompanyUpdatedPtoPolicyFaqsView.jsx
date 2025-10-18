'use client';

export default function CompanyUpdatedPtoPolicyFaqsView() {
  return (
    <> 
      <section className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/FAQbanner.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 container mx-auto max-w-5xl px-4 h-full flex items-center">
          <h1 className="text-white text-2xl md:text-3xl font-semibold">Employee FAQs</h1>
        </div>
      </section>
      <main className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold text-gray-900">Updated PTO Policy-Frequently Asked Questions</h1>

      <ul className="mt-4 list-disc pl-6 text-gray-800 space-y-2">
        <li><a className="text-blue-600 hover:text-blue-800" href="#q1">Q.1 Why is SSAI changing the PTO rollover and accrual policies?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q2">Q.2 What are the new PTO carryover limits?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q3">Q.3 Will the 40-hour PTO buy-back limit be adjusted?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q4">Q.4 Is this policy permanent?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q5">Q.5 How does this affect employees with caregiving responsibilities or health concerns?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q6">Q.6 What if I need to take an extended vacation or visit family overseas?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q7">Q.7 Has the industry standard for PTO changed that much in recent years?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q8">Q.8 Why is taking PTO important for the organization?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q9">Q.9 Does this affect how PTO is earned?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q10">Q.10 What if I need more time off than I’ve accrued?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q11">Q.11 When does the carryover take effect?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q12">Q.12 Who can I talk to if I have concerns or need help planning my time off?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q13">Q.13 Is the PTO donation bank to other employees still available? Can I donate my potential unused PTO to specific employees who may not be at the max? Or even donate to a general bank for others to use as needs arise?</a></li>
        <li><a className="text-blue-600 hover:text-blue-800" href="#q14">Q.14 If people are laid off, or resign, will PTO be paid out?</a></li>
      </ul>

      <p className="mt-4 italic text-gray-600">Look below for answers in sequential order:</p>

      <h2 className="mt-8 text-xl font-semibold text-gray-900">Frequently Asked Questions with Answers</h2>

      <div className="mt-8 space-y-10">
        <section id="q1" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.1 Why is SSAI changing the PTO rollover and accrual policies?</h2>
          <p className="mt-3 text-gray-700">
            This change was made to better support work-life balance by encouraging employees to use available
            time off for rest and renewal. It is also in response to the current budgetary environment with NASA.
            By encouraging employees to take PTO, we help extend contract funding, which can directly impact
            job security. The policy also aims to align with evolving industry practices and ensure long-term
            sustainability for SSAI and its employees.
          </p>
        </section>

        <section id="q2" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.2 What are the new PTO carryover limits?</h2>
          <p className="mt-3 text-gray-700">Effective immediately, employees may carry over unused PTO as follows:</p>
          <ul className="mt-3 list-disc pl-6 text-gray-700">
            <li>Full-Time (40 hours/week): Up to 120 hours</li>
            <li>Full-Time (30 hours/week): Up to 90 hours</li>
            <li>Part-Time (20 hours/week): Up to 60 hours</li>
          </ul>
          <p className="mt-3 text-gray-700">
            These limits are designed to provide more flexibility while balancing operational needs.
          </p>
        </section>

        <section id="q3" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.3 Will the 40-hour PTO buy-back limit be adjusted?</h2>
          <p className="mt-3 text-gray-700">
            At this time, there are no changes to the PTO buy-back limit. The current limit of 40 hours will
            remain in place, and employees may continue to utilize the existing buy-back option as outlined in the
            PTO Exchange policy.
          </p>
        </section>

        <section id="q4" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.4 Is this policy permanent?</h2>
          <p className="mt-3 text-gray-700">
            The current changes are expected to continue until our operating environment dictates an update.
          </p>
        </section>

        <section id="q5" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.5 How does this affect employees with caregiving responsibilities or health concerns?</h2>
          <p className="mt-3 text-gray-700">
            We understand that PTO is used for vacations, medical appointments, and unplanned sick leave. For
            employees facing health challenges or caregiving duties, additional options are available:
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-700">
            <li>FMLA or qualifying medical absences and/or Short-Term Disability which provides income replacement during qualifying medical absences.</li>
            <li>PTO Donation Bank</li>
            <li>Negative PTO usage (up to -40 hours with manager approval)</li>
          </ul>
          <p className="mt-3 text-gray-700">These resources are in place to support employees during times of hardship.</p>
        </section>

        <section id="q6" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.6 What if I need to take an extended vacation or visit family overseas?</h2>
          <p className="mt-3 text-gray-700">
            We recognize that longer trips are meaningful and sometimes necessary. While the updated limits may
            make extended leave more challenging, employees are encouraged to:
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-700">
            <li>Plan PTO usage across calendar years</li>
            <li>Request unpaid time off</li>
            <li>Utilize negative PTO hours (with approval and up to the allowed limit)</li>
          </ul>
          <p className="mt-3 text-gray-700">
            Managers are encouraged to work with employees to find solutions that meet both personal and operational needs.
          </p>
        </section>

        <section id="q7" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.7 Has the industry standard for PTO changed that much in recent years?</h2>
          <p className="mt-3 text-gray-700">
            While core PTO principles remain consistent, many organizations have adjusted policies in response
            to economic pressures, workforce trends, and operational needs. SSAI’s policy reflects a review of
            these factors and aims to remain competitive while supporting employees and customers. We will
            continue to monitor industry practices and evaluate our policies to ensure they remain fair,
            balanced, and in alignment with best practices.
          </p>
        </section>

        <section id="q8" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.8 Why is taking PTO important for the organization?</h2>
          <p className="mt-3 text-gray-700">
            Taking PTO not only supports employee well-being—it also saves contract dollars, which can help
            extend funding and preserve jobs. We encourage all employees to use their PTO regularly and responsibly.
          </p>
        </section>

        <section id="q9" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.9 Does this affect how PTO is earned?</h2>
          <p className="mt-3 text-gray-700">
            No. PTO accrual rates remain the same and employees will continue to earn PTO based on their current
            schedule. The changes only affect the maximum carryover and the annual accrual cap:
          </p>
          <ul className="mt-3 list-disc pl-6 text-gray-700">
            <li>Maximum Year-End Carryover: Beginning this year, the maximum amount of PTO that may be carried over will be reduced.</li>
            <li>2025 Transition Year: In 2025, employees will continue to accrue PTO even if their balance exceeds the annual PTO accrual limit.</li>
            <li>Annual Accrual Cap (Effective 1/1/2026): Starting January 1, 2026, once an employee reaches their annual PTO accrual limit, no additional PTO will accrue until some PTO is used.</li>
          </ul>
          <p className="mt-3 text-gray-700">
            In short, the way PTO is earned does not change—only the maximum amounts that can be carried over or accrued will be affected.
          </p>
        </section>

        <section id="q10" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.10 What if I need more time off than I’ve accrued?</h2>
          <p className="mt-3 text-gray-700">
            We encourage employees to speak with their manager or HR about options such as unpaid leave or flexible
            scheduling. We’re committed to supporting employees during challenging times.
          </p>
        </section>

        <section id="q11" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.11 When does the carryover take effect?</h2>
          <p className="mt-3 text-gray-700">
            The new carryover limits apply at the end of the current calendar year and will be reflected in your PTO
            balance starting January 1st of the following year.
          </p>
        </section>

        <section id="q12" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.12 Who can I talk to if I have concerns or need help planning my time off?</h2>
          <p className="mt-3 text-gray-700">
            Please reach out to your manager or Human Resources{' '}
            <a className="text-blue-600 hover:text-blue-800" href="mailto:hr-lanham@ssaihq.com" target="_blank" rel="noopener noreferrer">
              hr-lanham@ssaihq.com
            </a>
            . We are here to support you and help navigate individual circumstances.
          </p>
        </section>

        <section id="q13" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.13 Is the PTO donation bank to other employees still available? Can I donate my potential unused PTO to specific employees who may not be at the max? Or even donate to a general bank for others to use as needs arise?</h2>
          <p className="mt-3 text-gray-700">
            Yes, the PTO donation bank is still available. Employees can donate unused PTO hours to the general donation
            bank, which is then used to support employees with qualifying needs. Donations can’t be directed to specific
            individuals — all contributions go into the shared bank and are distributed according to policy guidelines.
          </p>
        </section>

        <section id="q14" className="scroll-mt-24">
          <h2 className="text-xl font-semibold text-gray-900">Q.14 If people are laid off, or resign, will PTO be paid out?</h2>
          <p className="mt-3 text-gray-700">
            Yes, employees who separate from the company — whether through resignation or layoff — will be paid for their
            accrued, unused PTO, consistent with company policy and in compliance with applicable state laws.
          </p>
        </section>
      </div>
    </main>
    </>
  );
}