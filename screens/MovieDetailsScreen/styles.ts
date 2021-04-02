import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
      aspectRatio: 5/3,
      width: "100%",
      resizeMode: 'cover',
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    match: {
      color: "#59d467",
      fontWeight: "bold",
      marginRight: 8,
      fontSize: 15,
    }, 
    year: {
      color: "#757575",
      marginRight: 8
    },
    ageContainer: {
      backgroundColor: "#e6e229",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 2, 
      paddingHorizontal: 3,
      marginRight: 8,
      marginVertical: 5,
    },
    age: {
      color: "black",
      fontWeight: "bold",
    },
    playButton: {
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      borderRadius: 3,
      flexDirection: "row",
      marginVertical: 5,
    },
    playButtonText: {
      color: "black",
      fontSize: 16,
      fontWeight: "bold",
    },
    downloadButton: {
      backgroundColor: "#2b2b2b",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      borderRadius: 3,
      flexDirection: "row",
      marginVertical: 5,
      height: 37,
    },
    downloadButtonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    }
  });

  export default styles;