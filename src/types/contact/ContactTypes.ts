export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  purpose: string;
  message: string;
}

export interface ContactProps {
  onSubmit: (data: ContactFormData) => void;
  isLoading?: boolean;
  error?: string | null;
  success?: string | null;
}