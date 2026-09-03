import {
  Award,
  BadgeCheck,
  Building2,
  Bus,
  CalendarDays,
  Car,
  ClipboardList,
  Code2,
  Facebook,
  FileBadge,
  Instagram,
  Linkedin,
  MapPin,
  Presentation,
  ScrollText,
  Train,
  Trophy,
  UsersRound,
  Youtube,
  Zap,
} from 'lucide-react';

export const quickFacts = [
  { icon: Building2, title: 'Offline', text: 'Campus Event' },
  { icon: BadgeCheck, title: 'Rs.300', text: 'Per Team' },
  { icon: FileBadge, title: 'Certificate', text: 'For Everyone' },
];

export const aboutChips = [
  { icon: Trophy, title: 'State Level' },
  { icon: Building2, title: 'Open to All Colleges' },
  { icon: Award, title: 'Trophy + Cash Prize' },
];

export const highlights = [
  { title: 'Live AI Solution Demo', crop: 'hero-crop-one' },
  { title: 'National Level Winner', crop: 'hero-crop-two' },
  { title: 'Awards & Recognition', crop: 'hero-crop-three' },
];

export const reasons = [
  {
    icon: Code2,
    title: 'Build & Demo',
    text: 'Build real AI solutions and showcase your creativity.',
  },
  {
    icon: Presentation,
    title: 'Present Research',
    text: 'Present your ideas and technical papers with confidence.',
  },
  {
    icon: Trophy,
    title: 'Compete Statewide',
    text: 'Face top talent from colleges across the state.',
  },
  {
    icon: Award,
    title: 'Win & Get Certified',
    text: 'Win exciting prizes and certificates for all participants.',
  },
];

export const participantInfo = [
  { icon: UsersRound, title: 'Cross-college teams allowed' },
  { icon: ClipboardList, title: 'Both events allowed' },
  { icon: Car, title: 'No travel reimbursement' },
  { icon: Zap, title: 'No accommodation' },
];

export const transport = [
  { icon: Train, label: 'Railway', detail: '' },
  { icon: Bus, label: 'Bus', detail: '' },
  { icon: Car, label: 'Auto', detail: '' },
];

export const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/company/aiktc-extc/?originalSubdomain=in' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/co.arkp/' },

  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@AIKTCTV' },
];

export const bottomNav = [
  { icon: CalendarDays, label: 'Events', href: '#events', section: 'events' },
  { icon: ScrollText, label: 'FAQ', href: '#faq', section: 'faq' },
  { icon: MapPin, label: 'Venue', href: '#venue', section: 'venue' },
  { icon: ClipboardList, label: 'Register', href: '#events', section: 'events' },
];

export const venueAddress =
  'A. R. Kalsekar Polytechnic Campus, Plot No. 2 & 3, Khanda Gaon, Near Thana Naka, New Panvel, Navi Mumbai 410206';
