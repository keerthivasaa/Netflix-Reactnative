import * as React from 'react';
import { SafeAreaView, Image, Text, View, FlatList } from 'react-native';
import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={categories.items}
          renderItem= {({ item }) => (<HomeCategory category={item} />) }
          showsVerticalScrollIndicator = {false}
        />
      </View>
    </>
  );
}

export default HomeScreen;


