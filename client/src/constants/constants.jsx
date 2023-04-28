import { HiOutlineHome, HiOutlineUserCircle } from 'react-icons/hi';
import { IoLanguage } from 'react-icons/io5';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { FaGithub, FaFacebook, FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';

const sidebarNavItems = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <HiOutlineHome className="sidebar-btn-icon" />,
  },
  {
    title: 'Characters',
    path: '/characters',
    icon: <IoLanguage className="sidebar-btn-icon" />,
  },
  {
    title: 'Leaderboards',
    path: '/leaderboards',
    icon: <MdOutlineLeaderboard className="sidebar-btn-icon" />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <HiOutlineUserCircle className="sidebar-btn-icon" />,
  },
];

// All links are placeholders except for Github
const socialLinks = [
  {
    title: 'Github',
    url: 'https://github.com/kt946/japanese-quiz-mern-app',
    icon: <FaGithub className="social-link" />,
  },
  {
    title: 'Discord',
    url: 'https://discord.com/',
    icon: <FaDiscord className="social-link" />,
  },
  {
    title: 'Facebook',
    url: 'https://facebook.com/',
    icon: <FaFacebook className="social-link" />,
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/',
    icon: <FaTwitter className="social-link" />,
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com/',
    icon: <FaInstagram className="social-link" />,
  },
];

const charBannerText = {
  Hiragana: 'Master Japanese with the basics',
  Katakana: 'Practice essential characters for loanwords',
  Kanji: 'Take your mastery to the next level',
};

export { sidebarNavItems, socialLinks, charBannerText };
