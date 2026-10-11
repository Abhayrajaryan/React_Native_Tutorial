import TrackPlayer from '@rntp/player';
import { playListData } from './src/constants';

let isInitialized = false;

export async function initializePlayer() {
  if (isInitialized) return;

  TrackPlayer.setupPlayer({
    contentType: 'music',
    handleAudioBecomingNoisy: true,
  });

  TrackPlayer.setMediaItems(
    playListData.map(({ id, album, artwork, ...track }) => ({
      ...track,
      mediaId: String(id),
      albumTitle: album,
      artworkUrl: artwork,
    })),
  );

  isInitialized = true;
}

export async function playMusic() {
  await initializePlayer();
  TrackPlayer.play();
}

export function pauseMusic() {
  TrackPlayer.pause();
}
