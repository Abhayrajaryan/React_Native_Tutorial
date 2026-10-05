import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';

export default function ElevatedCard() {
  return (
    <View>
      <AppText style={styles.headingText}>ElevatedCard</AppText>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <AppText>Tap</AppText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <AppText>me</AppText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <AppText>to</AppText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <AppText>scroll</AppText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <AppText>more....</AppText>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <AppText>❤️❤️</AppText>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: { padding: 8 },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
