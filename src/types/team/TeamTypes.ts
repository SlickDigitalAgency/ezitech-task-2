export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface TeamProps {
  title: string;
  subtitle: string;
  members: TeamMember[];
}

export interface OpenPosition {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
}

export interface JoinTeamProps {
  title: string;
  description: string;
  positions: OpenPosition[];
}