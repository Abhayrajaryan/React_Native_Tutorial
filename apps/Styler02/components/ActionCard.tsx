import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppText from './AppText';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <AppText style={styles.headingText}>Blog Card</AppText>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <AppText style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </AppText>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZtoOyvfTJtuMCJDSOTdBKSqM2am8gH9dednH14pWUaQ&s=10',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <AppText numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I wont't be wasting much more time and directly
            jump to code with easy to understand examples.
          </AppText>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openWebsite('https://example.com/')}>
            <AppText style={styles.socialLinks}>Read More</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/abhay-raj-80108b21b')
            }
          >
            <AppText style={styles.socialLinks}>Follow me</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: { color: '#000', fontSize: 15, fontWeight: '600' },
  cardImage: {
    height: 220,
  },
  bodyContainer: { padding: 10 },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
