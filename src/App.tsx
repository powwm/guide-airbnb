import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { I18nextProvider } from 'react-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Success from './pages/Success';
import GuideForm from './pages/GuideForm';
import i18n from './i18n';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<GuideForm />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
