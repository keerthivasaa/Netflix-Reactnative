import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5
    },
    titleContainer: {
      flex: 1,
      padding: 5,
      justifyContent: 'center',
    },
    image: {
      height: 75,
      aspectRatio: 16/9,
      resizeMode: 'cover',
      borderRadius: 3,
    },
    title: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    },
    duration:{
      color: 'darkgrey',
      fontSize: 13,
      marginVertical: 5,
    },
    plot: {
      color: 'darkgrey',
      marginVertical: 5,
    }
  });

  export default styles;