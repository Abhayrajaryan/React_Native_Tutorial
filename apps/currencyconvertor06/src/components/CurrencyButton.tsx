import { StyleSheet, View } from 'react-native';
import React, { JSX, PropsWithChildren } from 'react';
import AppText from '../AppText';

type CurrencyButtonProps = PropsWithChildren<{ name: string; flag: string }>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <AppText style={styles.flag}>{props.flag}</AppText>
      <AppText style={styles.country}>{props.name}</AppText>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: { fontSize: 28, color: '#FFFFFF', marginBottom: 4 },
  country: { fontSize: 14, color: '#2d3436' },
});
