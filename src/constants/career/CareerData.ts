import { CareerPageData } from '@/types/career/CareerTypes';

export const careerData: CareerPageData = {
  title: 'Career At Spydea',
  description: 'Nulla quis lorem ut libero male suada feugiat. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit.',
  benefits: {
    title: 'Why Working With Us?',
    description: 'Proin tempus mi nec dolor porta placerat. Inter dum et males suada fames ac ante ipsum primis in faucibus. Vestibulum ante sit amet quam.',
    items: [
      {
        id: '1',
        title: 'Flexible Hours',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        icon: 'clock'
      },
      {
        id: '2',
        title: '100% Remote',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        icon: 'globe'
      },
      {
        id: '3',
        title: 'Career Growth',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
        icon: 'trending-up'
      }
    ]
  }
};