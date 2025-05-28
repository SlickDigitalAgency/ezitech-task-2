export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginProps {
  onSubmit: (data: LoginFormData) => void;
  onGoogleLogin: () => void;
  isLoading?: boolean;
  error?: string | null;
}