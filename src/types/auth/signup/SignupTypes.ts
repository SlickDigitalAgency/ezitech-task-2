export interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
}

export interface SignupProps {
  onSubmit: (data: SignupFormData) => void;
  onGoogleSignup: () => void;
  isLoading?: boolean;
  error?: string | null;
}