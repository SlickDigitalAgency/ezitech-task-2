export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CareerPageData {
  title: string;
  description: string;
  benefits: {
    title: string;
    description: string;
    items: Benefit[];
  };
}

export interface JobPosition {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  aboutRole: string;
  aboutYou: string;
  responsibilities: string[];
  requirements: string[];
  weOffer: string[];
}

export interface CareerSingleData {
  breadcrumb: {
    home: string;
    career: string;
    position: string;
  };
  position: JobPosition;
}