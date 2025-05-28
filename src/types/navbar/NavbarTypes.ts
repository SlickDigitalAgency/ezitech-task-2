export interface NavbarLink {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export interface LanguageOption {
  code: string;
  label: string;
  flag?: string;
}

export interface NavbarButton {
  id: string;
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface NavbarData {
  logo: {
    text: string;
    icon: string;
  };
  navigation: NavbarLink[];
  languages: LanguageOption[];
  buttons: NavbarButton[];
}

export interface NavbarProps {
  className?: string;
}