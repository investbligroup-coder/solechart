import { create } from 'zustand';
import { Release } from './types';

interface PlayerState {
    currentTrack: Release | null;
    isPlaying: boolean;
    setTrack: (track: Release) => void;
    togglePlay: () => void;
    setIsPlaying: (isPlaying: boolean) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
    currentTrack: null,
    isPlaying: false,
    setTrack: (track) => set({ currentTrack: track, isPlaying: true }),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
}));
