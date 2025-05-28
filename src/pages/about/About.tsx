import React from 'react';
import AboutHero from '@/components/about/hero/AboutHero';
import ExperienceSpeaks from '@/components/about/experience/ExperienceSpeaks';
import Mission from '@/components/common/mission/Mission';
import Team from '@/components/team/Team';
import { teamMembers } from '@/constants/team/TeamData';
import JoinTeam from '@/components/team/JoinTeam';
import { openPositions } from '@/constants/team/JoinTeamData';

const About: React.FC = () => {
  return (
    <div>
      <AboutHero
        title="About Spydea"
        description="Vivamus arcu felis bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Vestibulum ante ipsum primis in faucibus."
      />

      <Mission
        visionTitle="We Have Our Vision"
        visionDescription="A World Financially Connected with Open Opportunities for All"
        ultimateTitle="We are The Ultimate"
        ultimateDescription="Connect the World Through a Smart, Free, and Financing App"
      />

      <ExperienceSpeaks
        title="Experience Speaks"
        description="Don't Take Our Word For It. Pellentesque in ipsum id orci porta dapibus. Titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum."
        stats={[
          { value: 94, suffix: '%', label: 'Client Retention' },
          { value: 70, suffix: 'M+', label: 'Emails Per Month' },
          { value: 10, suffix: 'K+', label: 'Monthly Campaigns' },
        ]}
      />
     <Team
        title="Amazing Team Behind The Spydea App"
        subtitle="Meet our talented team members"
        members={teamMembers}
      />
      <JoinTeam
        title="Spydea Open Positions"
        description="Pellen tesque in ipsum id orci porta dapibus. titor nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum"
        positions={openPositions}
      />
    </div>
  );
};

export default About;
