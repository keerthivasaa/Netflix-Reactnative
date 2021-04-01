import * as React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import styles from './styles';

interface HomeCategoryProps {
    category: {
        id: String,
        title: String,
        movies: {
            id: String,
            poster: String,
        }[]
    }
}

const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props;
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{category.title}</Text>
                <FlatList
                    data={category.movies}
                    renderItem={({ item }) => (<Image style={styles.image} source={{ uri: item.poster }} />)}
                    horizontal
                    showsHorizontalScrollIndicator = {true}
                />
            </View>
        </>
    );
}

export default HomeCategory;


