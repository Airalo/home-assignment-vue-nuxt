export interface ApiImage {
  width: number;
  height: number;
  url: string;
}

export interface Country {
  id: number;
  slug: string;
  title: string;
  image: ApiImage;
  seo?: string | null;
  package_count?: number;
}

export interface Region {
  id: number;
  slug: string;
  title: string;
  image: ApiImage;
  seo?: string | null;
  package_count?: number;
}

export type StyleTheme = 'dark' | 'light';

export type NavigationKey = 'auth' | 'language';

export interface Operator {
  id: number;
  title: string;
  style: StyleTheme;
  gradient_start: string;
  gradient_end: string;
  type: 'local' | 'global';
  image: ApiImage;
  countries: Country[];
}

export interface Package {
  id: number;
  slug: string;
  type: string;
  price: number;
  title: string;
  data: string;
  validity: string;
  day: number;
  amount: number;
  operator: Operator;
}

export interface FooterMenuSection {
  title: string;
  links: { title: string }[];
}

export interface FooterBottomLink {
  title: string;
  route: string;
}

export interface SocialLink {
  icon: string;
  route: string;
}

export interface TabItem {
  route: string;
  text: string;
}
