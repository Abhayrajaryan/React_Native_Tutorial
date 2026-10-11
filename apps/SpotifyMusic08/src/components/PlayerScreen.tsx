import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TrackPlayer, {
  RepeatMode,
  useActiveMediaItem,
  useIsPlaying,
  useProgress,
} from '@rntp/player';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { playListData } from '../constants';
import AlbumArtwork from './AlbumArtwork';
import PlaybackControls from './PlaybackControls';
import PlayerHeader from './PlayerHeader';

function PlayerScreen() {
  const activeMediaItem = useActiveMediaItem();
  const isPlaying = useIsPlaying();
  const { position, duration } = useProgress(0.5);
  const [isLiked, setIsLiked] = React.useState(false);
  const [repeatEnabled, setRepeatEnabled] = React.useState(false);
  const currentTrack =
    playListData.find(track => track.title === activeMediaItem?.title) ??
    playListData[0];

  const toggleRepeat = () => {
    const nextRepeatEnabled = !repeatEnabled;
    setRepeatEnabled(nextRepeatEnabled);
    TrackPlayer.setRepeatMode(
      nextRepeatEnabled ? RepeatMode.One : RepeatMode.Off,
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <PlayerHeader />

      <View style={styles.artworkSection}>
        <AlbumArtwork uri={currentTrack.artwork} />
      </View>

      <View style={styles.trackInfo}>
        <View style={styles.trackCopy}>
          <Text numberOfLines={1} style={styles.title}>
            {currentTrack.title}
          </Text>
          <Text numberOfLines={1} style={styles.artist}>
            {currentTrack.artist}
          </Text>
        </View>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={isLiked ? 'Remove from liked songs' : 'Like song'}
          onPress={() => setIsLiked(liked => !liked)}
          style={styles.likeButton}
        >
          <MaterialCommunityIcons
            name={isLiked ? 'heart' : 'heart-outline'}
            size={25}
            color={isLiked ? '#c8f27c' : '#dce1db'}
          />
        </TouchableOpacity>
      </View>

      <PlaybackControls
        isPlaying={isPlaying}
        position={position}
        duration={duration}
        repeatEnabled={repeatEnabled}
        onTogglePlayback={() =>
          isPlaying ? TrackPlayer.pause() : TrackPlayer.play()
        }
        onSkipPrevious={() => TrackPlayer.skipToPrevious()}
        onSkipNext={() => TrackPlayer.skipToNext()}
        onSeek={value => TrackPlayer.seekTo(value)}
        onToggleRepeat={toggleRepeat}
      />

      <View style={styles.footer}>
        <View style={styles.deviceInfo}>
          <MaterialCommunityIcons
            name="speaker-wireless"
            size={17}
            color="#c8f27c"
          />
          <Text style={styles.deviceText}>Listening on this device</Text>
        </View>
        <MaterialCommunityIcons name="share-variant-outline" size={20} color="#a2aaa3" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 22,
  },
  artworkSection: {
    marginTop: 24,
  },
  trackInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 26,
  },
  trackCopy: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    color: '#f4f5f2',
    fontSize: 23,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  artist: {
    color: '#a2aaa3',
    fontSize: 14,
    marginTop: 6,
  },
  likeButton: {
    padding: 5,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28,
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deviceText: {
    color: '#c8f27c',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default PlayerScreen;
