export interface ResetPasswordFormData {
  email: string;
}

export interface ResetPasswordProps {
  onSubmit: (data: ResetPasswordFormData) => void;
  isLoading?: boolean;
  error?: string | null;
  success?: string | null;
}