import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type PlaybackControlsProps = {
  isPlaying: boolean;
  position: number;
  duration: number;
  repeatEnabled: boolean;
  onTogglePlayback: () => void;
  onSkipPrevious: () => void;
  onSkipNext: () => void;
  onSeek: (position: number) => void;
  onToggleRepeat: () => void;
};

function formatTime(seconds: number) {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;

  return `${minutes}:${remainder.toString().padStart(2, '0')}`;
}

function PlaybackControls({
  isPlaying,
  position,
  duration,
  repeatEnabled,
  onTogglePlayback,
  onSkipPrevious,
  onSkipNext,
  onSeek,
  onToggleRepeat,
}: PlaybackControlsProps) {
  const safeDuration = Math.max(duration, 1);

  return (
    <View>
      <Slider
        accessibilityLabel="Playback position"
        minimumValue={0}
        maximumValue={safeDuration}
        value={Math.min(position, safeDuration)}
        minimumTrackTintColor="#c8f27c"
        maximumTrackTintColor="#414842"
        thumbTintColor="#f3f8eb"
        onSlidingComplete={onSeek}
        style={styles.slider}
      />
      <View style={styles.timeLabels}>
        <Text style={styles.time}>{formatTime(position)}</Text>
        <Text style={styles.time}>-{formatTime(Math.max(duration - position, 0))}</Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={repeatEnabled ? 'Turn repeat off' : 'Turn repeat on'}
          onPress={onToggleRepeat}
          style={styles.sideButton}
        >
          <MaterialCommunityIcons
            name={repeatEnabled ? 'repeat-once' : 'repeat'}
            size={22}
            color={repeatEnabled ? '#c8f27c' : '#a2aaa3'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Previous track"
          onPress={onSkipPrevious}
          style={styles.skipButton}
        >
          <MaterialCommunityIcons name="skip-previous" size={37} color="#f4f5f2" />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={isPlaying ? 'Pause' : 'Play'}
          onPress={onTogglePlayback}
          style={styles.playButton}
        >
          <MaterialCommunityIcons
            name={isPlaying ? 'pause' : 'play'}
            size={34}
            color="#11150f"
          />
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Next track"
          onPress={onSkipNext}
          style={styles.skipButton}
        >
          <MaterialCommunityIcons name="skip-next" size={37} color="#f4f5f2" />
        </TouchableOpacity>
        <View style={styles.sideButton}>
          <MaterialCommunityIcons name="playlist-music" size={22} color="#a2aaa3" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    height: 32,
    marginHorizontal: -10,
    marginTop: 12,
  },
  timeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -1,
  },
  time: {
    color: '#9ba39c',
    fontSize: 11,
    fontVariant: ['tabular-nums'],
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 22,
  },
  sideButton: {
    width: 34,
    alignItems: 'center',
  },
  skipButton: {
    paddingHorizontal: 3,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c8f27c',
  },
});

export default PlaybackControls;
