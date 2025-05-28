import { NavbarData } from '../../types/navbar/NavbarTypes';

export const navbarData: NavbarData = {
  logo: {
    text: "Spydea",
    icon: "⚡"
  },
  navigation: [
    {
      id: "home",
      label: "Home",
      href: "/"
    },
    {
      id: "about",
      label: "About",
      href: "/about"
    },
    {
      id: "blog",
      label: "Blog",
      href: "/blog"
    },
    {
      id: "pages",
      label: "Pages",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          id: "integration",
          label: "Integration",
          href: "/integration",
          description: "Connect with your favorite tools"
        },
        {
          id: "integration-single",
          label: "Integration Single",
          href: "/integration/single",
          description: "Individual integration details"
        },
        {
          id: "career",
          label: "Career",
          href: "/career",
          description: "Join our growing team"
        },
        {
          id: "career-single",
          label: "Career Single",
          href: "/career/single",
          description: "Specific job opportunities"
        },
        {
          id: "pricing",
          label: "Pricing",
          href: "/pricing",
          description: "Choose the right plan"
        },
        {
          id: "all-author",
          label: "All Author",
          href: "/authors",
          description: "Meet our content creators"
        },
        {
          id: "author-single",
          label: "Author Single",
          href: "/author/single",
          description: "Individual author profiles"
        },
        {
          id: "blog-single",
          label: "Blog Single",
          href: "/blog/single",
          description: "Individual blog posts"
        },
        {
          id: "contact",
          label: "Contact",
          href: "/contact",
          description: "Get in touch with us"
        },
        {
          id: "signup",
          label: "Signup",
          href: "/signup",
          description: "Create your account"
        },
        {
          id: "terms",
          label: "Terms & Condition",
          href: "/terms",
          description: "Legal information"
        },
        {
          id: "404",
          label: "404",
          href: "/404",
          description: "Page not found"
        }
      ]
    }
  ],
  languages: [
    {
      code: "EN",
      label: "EN",
      flag: "🇺🇸"
    },
    {
      code: "FR",
      label: "FR",
      flag: "🇫🇷"
    }
  ],
  buttons: [
    {
      id: "login",
      label: "Login",
      href: "/login",
      variant: "secondary"
    },
    {
      id: "get-started",
      label: "Get Started",
      href: "/contact",
      variant: "primary"
    }
  ]
};