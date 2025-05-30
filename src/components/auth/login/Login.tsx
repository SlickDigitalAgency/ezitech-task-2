// src/components/auth/login/Login.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formAnimation, staggerChildren } from '@/lib/framer-animations';
import { LoginProps } from '@/types/auth/login/LoginTypes';
import AuthLayout from '@/components/common/AuthLayout';
import SocialButton from '@/components/ui/social-button';
import Divider from '@/components/ui/divider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Login: React.FC<LoginProps> = ({
  onSubmit,
  onGoogleLogin,
  isLoading = false,
  error = null
}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <AuthLayout title="Login">
      <p className="text-center text-gray-500 text-sm mb-6">
        Donec rutrum congue leo eget malesuada. Sed porttitor nibh. Cras
        ultricies ligula sed magna dictum porta. vestibulum
      </p>

      <motion.div 
        className="w-full space-y-6"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <SocialButton
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          }
          text="Login With Google"
          onClick={onGoogleLogin}
        />

        <Divider text="Or Login With Email" />

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={formAnimation}
        >
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            className={cn(
              "w-full bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2",
              isLoading && "opacity-70 cursor-not-allowed"
            )}
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
            <span className="ml-2">→</span>
          </Button>

          <div className="flex justify-between items-center pt-2 text-sm">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="font-medium text-black hover:underline">
                Sign Up
              </a>
            </p>
            <a href="/reset-password" className="font-medium text-black hover:underline">
              Reset Password
            </a>
          </div>
        </motion.form>
      </motion.div>
    </AuthLayout>
  );
};

export default Login;
