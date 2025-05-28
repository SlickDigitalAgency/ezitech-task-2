export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface FAQsData {
  title: string;
  description: string;
  faqs: FAQ[];
}