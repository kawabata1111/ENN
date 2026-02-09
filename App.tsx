import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ConceptPage from './pages/ConceptPage';
import DestinationsPage from './pages/DestinationsPage';
import PlansPage from './pages/PlansPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concept" element={<ConceptPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Layout>
    </LanguageProvider>
  );
};

export default App;