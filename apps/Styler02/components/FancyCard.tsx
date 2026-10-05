import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';

export default function FancyCard() {
  return (
    <View>
      <AppText style={styles.headingText}>Trending places</AppText>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5fGdLlf2sSTaDqLOmR0zNn0yMnULULcUSJmC1Vj4Mg&s',
          }}
          style={styles.cardimage}
        />
        <View style={styles.cardBody}>
          <AppText style={styles.cardTitle}>Hawa Mahal</AppText>
          <AppText style={styles.cardLabel}>Pink City, jaipur</AppText>
          <AppText style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace.
          </AppText>
          <AppText style={styles.cardFooter}>12 mins away</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: { fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8 },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
  },
  cardimage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: { flex: 1, flexGrow: 1, paddingHorizontal: 12 },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: { color: '#000000', fontSize: 16, marginBottom: 6 },
  cardDescription: {
    color: '#242B2E',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
  },
  cardFooter: { color: '#000000', fontSize: 12 },
});
