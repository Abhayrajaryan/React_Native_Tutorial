import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PRODUCTS_LIST } from '../data/constants';
import Seperator from '../components/Seperator';
import ProductItem from '../components/ProductItem';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate('Details', { product: item })}
          >
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
