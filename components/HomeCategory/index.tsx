import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Text, View, FlatList, Pressable } from 'react-native';
import styles from './styles';

interface HomeCategoryProps {
    category: {
        id: String,
        title: String,
        movies: {
            id: String,
            poster: String,
        }[],
    }
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;

    const navigation = useNavigation();
    const onMoviePress = (movie) => {
        navigation.navigate("MovieDetailsScreen", { id: movie.id })
    }
    
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{category.title}</Text>
                <FlatList
                    data={category.movies}
                    renderItem={({ item }) => (
                    <Pressable onPress={() => onMoviePress(item)}>
                        <Image style={styles.image} source={{ uri: item.poster }} />
                    </Pressable>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator = {true}
                />
            </View>
        </>
    );
}

export default HomeCategory;


