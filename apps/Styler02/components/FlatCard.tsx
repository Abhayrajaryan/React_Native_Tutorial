import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import AppText from './AppText';

export default class FlatCard extends Component {
  render() {
    return (
      <View>
        <AppText style={styles.headingText}> Flat Cards </AppText>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <AppText>Red</AppText>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <AppText>Blue</AppText>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <AppText>Green</AppText>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: { flex: 1, flexDirection: 'row', padding: 8 },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: { backgroundColor: '#EF5354' },
  cardTwo: { backgroundColor: '#28adeb' },
  cardThree: { backgroundColor: '#80f53c' },
});
