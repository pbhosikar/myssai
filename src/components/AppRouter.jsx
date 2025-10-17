'use client';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '@/components/pages/HomeView';
import MyHRView from '@/components/pages/MyHRView';
import CompanyView from '@/components/pages/CompanyView';
import OmBahethiView from '@/components/pages/OmBahethiView';
import NotFoundView from '@/components/pages/NotFoundView';
import UnderDevelopmentView from '@/components/pages/UnderDevelopmentView';
import HRBenefitsView from '@/components/pages/HRBenefitsView';
import HRHealthSafetyView from '@/components/pages/HRHealthSafetyView';
import HRKnowledgeTrainingView from '@/components/pages/HRKnowledgeTrainingView';
import HREmployeeRightsView from '@/components/pages/HREmployeeRightsView';
import CompanyAccountingPayrollView from '@/components/pages/CompanyAccountingPayrollView';
import CompanyBusinessDevelopmentView from '@/components/pages/CompanyBusinessDevelopmentView';
import CompanyCommunicationsView from '@/components/pages/CompanyCommunicationsView';
import CompanyCommunicationsSurveyResultsView from '@/components/pages/CompanyCommunicationsSurveyResultsView';
import CompanyEmployeeFaqsView from '@/components/pages/CompanyEmployeeFaqsView';
import CompanyUpdatedPtoPolicyFaqsView from '@/components/pages/CompanyUpdatedPtoPolicyFaqsView';
import CompanyInformationTechnologyView from '@/components/pages/CompanyInformationTechnologyView';
import CompanyOpportunitiesView from '@/components/pages/CompanyOpportunitiesView';
import CompanyQualityManagementSystemView from '@/components/pages/CompanyQualityManagementSystemView';
import CompanyFormsView from '@/components/pages/CompanyFormsView';
import CompanyStrategyView from '@/components/pages/CompanyStrategyView';
import CompanyTravelView from '@/components/pages/CompanyTravelView';
import CompanySsaiRoundupView from '@/components/pages/CompanySsaiRoundupView';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomeView />} />
      <Route path="/my-hr" element={<MyHRView />} />
      <Route path="/my-hr/benefits" element={<HRBenefitsView />} />
      <Route path="/my-hr/health-safety" element={<HRHealthSafetyView />} />
      <Route path="/my-hr/knowledge-training" element={<HRKnowledgeTrainingView />} />
      <Route path="/my-hr/employee-rights" element={<HREmployeeRightsView />} />
      <Route path="/company/accounting-payroll" element={<CompanyAccountingPayrollView />} />
      <Route path="/company/business-development" element={<CompanyBusinessDevelopmentView />} />
      <Route path="/company/communications" element={<CompanyCommunicationsView />} />
      <Route path="/company/communications-survey-results" element={<CompanyCommunicationsSurveyResultsView />} />
      <Route path="/company/employee-faqs" element={<CompanyEmployeeFaqsView />} />
      <Route path="/company/updated-pto-policy-frequently-asked-questions" element={<CompanyUpdatedPtoPolicyFaqsView />} />
      <Route path="/company/information-technology" element={<CompanyInformationTechnologyView />} />
      <Route path="/company/opportunities" element={<CompanyOpportunitiesView />} />
      <Route path="/company/quality-management-system" element={<CompanyQualityManagementSystemView />} />
      <Route path="/company/company-forms" element={<CompanyFormsView />} />
      <Route path="/company/strategy" element={<CompanyStrategyView />} />
      <Route path="/company/travel" element={<CompanyTravelView />} />
      <Route path="/company/ssai-roundup" element={<CompanySsaiRoundupView />} />
      <Route path="/company" element={<CompanyView />} />
      <Route path="/om-bahethi" element={<OmBahethiView />} />
      <Route path="/my-workspace" element={<UnderDevelopmentView />} />
      <Route path="/search" element={<UnderDevelopmentView />} />
      <Route path="/login" element={<UnderDevelopmentView />} />
      <Route path="/under-development" element={<UnderDevelopmentView />} />
      {/* Fallback to NotFound for unmatched routes */}
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}