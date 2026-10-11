import React from 'react';
import { Image, StyleSheet, View, useWindowDimensions } from 'react-native';

type AlbumArtworkProps = {
  uri: string;
};

function AlbumArtwork({ uri }: AlbumArtworkProps) {
  const { width } = useWindowDimensions();
  const size = Math.min(width - 56, 370);

  return (
    <View style={[styles.frame, { width: size, height: size }]}>
      <Image source={{ uri }} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: '#202720',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.35,
    shadowRadius: 22,
    elevation: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default AlbumArtwork;
