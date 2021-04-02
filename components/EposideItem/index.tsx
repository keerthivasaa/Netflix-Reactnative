import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { SafeAreaView, Image, Text, View, FlatList, Pressable } from 'react-native';
import styles from './styles';
import {Eposide} from '../../types'

interface EposideItemProps {
  eposide: Eposide;
  onPress: (eposide: Eposide) => {};
}

const EposideItem = (props: EposideItemProps) => {
  const { eposide, onPress } = props;
  return (
  
<Pressable style={{ margin: 10 }} onPress={() => onPress(eposide)}>
<View>
        <View style={styles.rowContainer}> 
          <Image source= {{ uri: eposide.poster }} style={styles.image} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{eposide.title}</Text>
            <Text style={styles.duration}>{eposide.duration}</Text>
          </View>
          <AntDesign name="download" size={24} color="white" />
        </View>
        <Text style={styles.plot}>{eposide.plot}</Text>
      </View>
</Pressable>
  );
}

export default EposideItem;


