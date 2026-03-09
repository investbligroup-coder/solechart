export interface Show {
  id: string;
  date: string;
  venue: string;
  location: string;
  ticketsUrl: string;
}

export interface Release {
  id: string;
  title: string;
  type: 'Album' | 'Single' | 'EP';
  year: string;
  coverUrl: string;
  spotifyUrl: string;
  appleMusicUrl: string;
}

export interface Video {
  id: string;
  title: string;
  category: 'Music Video' | 'Live Session' | 'Behind the Scenes';
  thumbnailUrl: string;
  videoUrl: string;
}

export interface Milestone {
  year: string;
  event: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}
