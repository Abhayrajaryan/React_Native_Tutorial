import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppText from './AppText';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Linus Torvalds',
      status: 'Working on Linux',
      imageUrl: 'https://github.com/torvalds.png?size=200',
    },
    {
      uid: 2,
      name: 'Sindre Sorhus',
      status: 'Building open source',
      imageUrl: 'https://github.com/sindresorhus.png?size=200',
    },
    {
      uid: 3,
      name: 'Kent C. Dodds',
      status: 'Making web development better',
      imageUrl: 'https://github.com/kentcdodds.png?size=200',
    },
    {
      uid: 4,
      name: 'Dan Abramov',
      status: 'Thinking about React',
      imageUrl: 'https://github.com/gaearon.png?size=200',
    },
    {
      uid: 5,
      name: 'Mark Zuckerberg',
      status: 'Building cool things',
      imageUrl: 'https://github.com/zuck.png?size=200',
    },
    {
      uid: 6,
      name: 'Evan You',
      status: 'Making Vue better',
      imageUrl: 'https://github.com/yyx990803.png?size=200',
    },
    {
      uid: 7,
      name: 'TJ Holowaychuk',
      status: 'Coding something new',
      imageUrl: 'https://github.com/tj.png?size=200',
    },
    {
      uid: 8,
      name: 'Guillermo Rauch',
      status: 'Shipping products',
      imageUrl: 'https://github.com/rauchg.png?size=200',
    },
    {
      uid: 9,
      name: 'Addy Osmani',
      status: 'Improving web performance',
      imageUrl: 'https://github.com/addyosmani.png?size=200',
    },
    {
      uid: 10,
      name: 'Sarah Drasner',
      status: 'Making your UI smooth',
      imageUrl: 'https://github.com/sdras.png?size=200',
    },
  ];

  return (
    <View>
      <AppText style={styles.headintText}>ContactList</AppText>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({ uid, name, status, imageUrl }) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{ uri: imageUrl }} style={styles.userImage} />
            <View>
              <AppText style={styles.userName}>{name}</AppText>
              <AppText style={styles.userStatus}>{status}</AppText>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headintText: { fontSize: 24, fontWeight: 'bold', paddingHorizontal: 8 },
  container: { paddingHorizontal: 16, marginBottom: 4 },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#8D3DAF',
    padding: 8,
    borderRadius: 14,
  },
  userImage: { width: 60, height: 60, borderRadius: 30, marginRight: 14 },
  userName: { fontSize: 16, fontWeight: 600, color: '#fff' },
  userStatus: { fontSize: 12 },
});
