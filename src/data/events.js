import {
  Banknote,
  Clock3,
  FileQuestion,
  Laptop,
  MonitorPlay,
  Presentation,
  UsersRound,
} from 'lucide-react';

export const events = [
  {
    number: '01',
    slug: 'promptignite',
    title: 'PromptIgnite',
    category: 'AI Hackathon',
    iconLabel: 'AI',
    description:
      'Build an AI-powered solution using any models or tools, then demonstrate it live.',
    meta: [
      { label: '3 members', icon: UsersRound },
      { label: 'Rs.300 per team', icon: Banknote },
      { label: 'Bring laptop', icon: Laptop },
      { label: 'Live demo', icon: MonitorPlay },
    ],
    note: 'Open to all colleges',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScvldWCSomOXshOVAXmOQQOoufoeJN-g6Ac6ooAOZwjmaagkA/viewform',
  },
  {
    number: '02',
    slug: 'paper-presentation',
    title: 'Technical Paper Presentation',
    category: 'Research & Presentation',
    icon: Presentation,
    description:
      'Present a research or technical paper through slides, followed by questions from the judges.',
    meta: [
      { label: '2 members', icon: UsersRound },
      { label: 'Rs.300 per team', icon: Banknote },
      { label: '6-8 minutes', icon: Clock3 },
      { label: 'Slides + Q&A', icon: FileQuestion },
    ],
    note: 'Bring college ID & presentation',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe5vr-X5kz8I2EqhEz_OJcDHlG5u5-AQmqVUipMsS4YJdfvew/viewform?usp=send_form',
  },
];
