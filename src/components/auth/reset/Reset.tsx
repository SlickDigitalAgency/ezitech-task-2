import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { formAnimation } from '@/lib/framer-animations';
import { ResetPasswordProps } from '@/types/auth/reset/ResetTypes';
import AuthLayout from '@/components/common/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const Reset: React.FC<ResetPasswordProps> = ({
  onSubmit,
  isLoading = false,
  error = null,
  success = null
}) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ email });
  };

  return (
    <AuthLayout title="Reset Password">
      <p className="text-center text-gray-600 text-sm mb-6">
        To reset your password, enter your account's email address below.
        We'll send you an email with instructions for creating a new password.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 w-full"
        variants={formAnimation}
        initial="hidden"
        animate="visible"
      >
        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">
            {success}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          {isLoading ? 'Processing...' : 'Reset Password'}
          <span className="ml-2">→</span>
        </Button>

        <div className="flex justify-center pt-2 text-sm">
          <a href="/login" className="font-medium text-black hover:underline">
            Back to Login
          </a>
        </div>
      </motion.form>
    </AuthLayout>
  );
};

export default Reset;