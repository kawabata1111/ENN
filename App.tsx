import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ConceptPage from './pages/ConceptPage';
import DestinationsPage from './pages/DestinationsPage';
import PlansPage from './pages/PlansPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};

export default App;