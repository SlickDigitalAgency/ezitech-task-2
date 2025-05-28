// src/App.tsx
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Home from '@/pages/home/Home';
import Navbar from './components/global/navbar/Navbar';
import Footer from './components/global/footer/Footer';
import Cta from './components/common/cta/Cta';

import Login from './components/auth/login/Login';
import Signup from './components/auth/singup/Signup';
import Reset from './components/auth/reset/Reset';
import Contact from './components/contact/Contact';

import { LoginFormData } from './types/auth/login/LoginTypes';
import { SignupFormData } from './types/auth/signup/SignupTypes';
import { ResetPasswordFormData } from './types/auth/reset/ResetTypes';
import { ContactFormData } from './types/contact/ContactTypes';
import About from './pages/about/About';
import Blogs from './pages/blog/Blogs';
import Integrations from './pages/integrations/Integrations';
import IntegrationsSingle from './pages/integrations/IntegrationSingle';
import Career from './pages/career/Career';
import CareerSingle from './pages/career/CareerSingle';
import Pricing from './pages/pricing/Pricing';
import AuthorsSingle from './pages/author/AuthorsSingle';
import Authors from './pages/author/Authors';
import BlogSingle from './pages/blog/BlogSingle';
import NotFound from './pages/404/404';
import TermsCondition from './pages/terms/TermsCondition';

function App() {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleLogin = (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);
    console.log('Login data:', data);

    setTimeout(() => {
      setIsLoading(false);
      if (!data.email.includes('@')) {
        setError('Please enter a valid email address');
      } else {
        console.log('Login successful');
      }
    }, 1500);
  };

  const handleSignup = (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);
    console.log('Signup data:', data);

    setTimeout(() => {
      setIsLoading(false);
      if (data.password.length < 6) {
        setError('Password must be at least 6 characters');
      } else {
        console.log('Signup successful');
      }
    }, 1500);
  };

  const handleResetPassword = (data: ResetPasswordFormData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);
    console.log('Reset password data:', data);

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(`Password reset instructions sent to ${data.email}`);
    }, 1500);
  };

  const handleContactSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data);
    // You can add API integration or feedback here
  };

  const handleGoogleAuth = () => {
    console.log('Google authentication triggered');
  };

  const hideLayoutPaths = ['/login', '/signup', '/reset-password'];
  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/integration" element={<Integrations />} />
        <Route path="/integration/single" element={< IntegrationsSingle/>} />
        <Route path="/career" element={< Career/>} />
        <Route path="/career/single" element={< CareerSingle/>} />
        <Route path="/pricing" element={< Pricing/>} />
        <Route path="/authors" element={< Authors/>} />
        <Route path="/author/single" element={< AuthorsSingle/>} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/single" element={<BlogSingle />} />
         <Route path="/terms" element={<TermsCondition />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/contact"
          element={
            <Contact onSubmit={handleContactSubmit} />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              onSubmit={handleLogin}
              onGoogleLogin={handleGoogleAuth}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              onSubmit={handleSignup}
              onGoogleSignup={handleGoogleAuth}
              isLoading={isLoading}
              error={error}
            />
          }
        />
        <Route
          path="/reset-password"
          element={
            <Reset
              onSubmit={handleResetPassword}
              isLoading={isLoading}
              error={error}
              success={success}
            />
          }
        />
      </Routes>

      {!shouldHideLayout && (
        <>
          <Cta />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
