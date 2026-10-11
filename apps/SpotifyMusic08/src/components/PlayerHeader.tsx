import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function PlayerHeader() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="chevron-down"
        size={27}
        color="#f4f5f2"
        accessibilityLabel="Now playing"
      />
      <View style={styles.heading}>
        <Text style={styles.eyebrow}>PLAYING FROM PLAYLIST</Text>
        <Text style={styles.playlistName}>Daily mix · Hindi</Text>
      </View>
      <MaterialCommunityIcons
        name="dots-horizontal"
        size={25}
        color="#f4f5f2"
        accessibilityLabel="More options"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    alignItems: 'center',
  },
  eyebrow: {
    color: '#a2aaa3',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  playlistName: {
    color: '#f4f5f2',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },
});

export default PlayerHeader;
