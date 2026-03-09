import { Show, Release, Video, Milestone, Skill } from './types';

export const SHOWS: Show[] = [
  { id: '1', date: 'MAY 20, 2024', venue: 'Combattant Lillois', location: 'Lillois, BE', ticketsUrl: '#' },
  { id: '2', date: 'OCT 12, 2024', venue: 'The Echo', location: 'Los Angeles, CA', ticketsUrl: '#' },
  { id: '3', date: 'OCT 15, 2024', venue: 'Great American Music Hall', location: 'San Francisco, CA', ticketsUrl: '#' },
];

export const RELEASES: Release[] = [
  { id: '0', title: 'La Torten', type: 'Single', year: '2024', coverUrl: '/src/assets/la_torten_cover.jpg', spotifyUrl: '#', appleMusicUrl: '#' },
  { id: '1', title: 'Echoes of Silence', type: 'Album', year: '2024', coverUrl: '/src/assets/artist_headphones.png', spotifyUrl: '#', appleMusicUrl: '#' },
  { id: '2', title: 'Midnight Drive', type: 'Single', year: '2023', coverUrl: '/src/assets/portrait_sunglasses.jpg', spotifyUrl: '#', appleMusicUrl: '#' },
  { id: '3', title: 'Neon Dreams', type: 'EP', year: '2023', coverUrl: '/src/assets/artist_leather_full.png', spotifyUrl: '#', appleMusicUrl: '#' },
];

export const VIDEOS: Video[] = [
  { id: '1', title: 'La Torten (Official Video)', category: 'Music Video', thumbnailUrl: '/src/assets/la_torten_cover.jpg', videoUrl: '#' },
  { id: '2', title: 'Live at Combattant', category: 'Live Session', thumbnailUrl: '/src/assets/hero_stage.jpg', videoUrl: '#' },
  { id: '3', title: 'The Making of La Torten', category: 'Behind the Scenes', thumbnailUrl: '/src/assets/artist_garden.jpg', videoUrl: '#' },
];

export const MILESTONES: Milestone[] = [
  { year: '2018', event: 'First EP "Genesis" released independently.' },
  { year: '2019', event: 'Sold out first headline show in London.' },
  { year: '2021', event: 'Signed with Major Label. "Urban Jungle" goes viral.' },
  { year: '2022', event: 'Debut album "The Architect" released to critical acclaim.' },
  { year: '2024', event: 'World tour announced. "Echoes of Silence" hits #1.' },
];

export const SKILLS: Skill[] = [
  { name: 'Composition', level: 95 },
  { name: 'Production', level: 90 },
  { name: 'Writing', level: 85 },
  { name: 'Video Editing', level: 80 },
];
