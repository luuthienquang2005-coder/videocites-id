import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import ContactSupportPage from './pages/ContactSupportPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/analytics" element={<AnalyticsDashboardPage />} />
        <Route path="/contact" element={<ContactSupportPage />} />
      </Routes>
    </HashRouter>
  );
}
