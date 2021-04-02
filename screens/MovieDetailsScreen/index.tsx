import React, { useState } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import movie from '../../assets/data/movie';
import { AntDesign, Entypo, Feather, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import EposideItem from '../../components/EposideItem';
import VideoPlayer from '../../components/VideoPlayer';

const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];

const MovieDetailsScreen = () => {

    const [currentSeason, setCurrentSeason] = useState(firstSeason);
    const [currentEposide, setCurrentEposide] = useState(firstSeason.episodes.items[0]);
    const seasonNames = movie.seasons.items.map(season => season.name);

    return (
        <View>
            <VideoPlayer eposide={currentEposide} />

            <FlatList
                data={currentSeason.episodes.items}
                renderItem={({ item }) =>
                    <EposideItem
                        eposide={item}
                        onPress={setCurrentEposide} />}
                style={{ marginBottom: 250 }}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={(

                    <View style={{ padding: 12, }}>
                        <Text style={styles.title}>{movie.title}</Text>

                        <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                            <Text style={styles.match}>98% match</Text>
                            <Text style={styles.year}>{movie.year}</Text>
                            <View style={styles.ageContainer}>
                                <Text style={styles.age}>12+</Text>
                            </View>
                            <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                            <MaterialIcons name="hd" size={24} color="white" />

                        </View>

                        <Pressable onPress={() => { console.warn('Play') }} style={styles.playButton}>
                            <Text style={styles.playButtonText}>Play</Text>
                            <Entypo name="controller-play" size={24} color="black" />
                        </Pressable>
                        <Pressable onPress={() => { console.warn('Download') }} style={styles.downloadButton}>
                            <Entypo name="download" size={16} color="white" />
                            <Text style={styles.downloadButtonText}>{' '} Download</Text>
                        </Pressable>

                        <Text style={{ marginVertical: 10, color: 'white' }}>{movie.plot}</Text>
                        <Text style={styles.year}>Cast: {movie.cast}</Text>
                        <Text style={styles.year}>Creator: {movie.creator}</Text>

                        <View style={{ flexDirection: "row", marginTop: 20 }} >
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <AntDesign name="plus" size={24} color={'white'} />
                                <Text style={{ color: '#757575', marginTop: 5 }}>My List</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <SimpleLineIcons name="like" size={24} color={'white'} />
                                <Text style={{ color: '#757575', marginTop: 5 }}>Rate</Text>
                            </View>
                            <View style={{ alignItems: 'center', marginHorizontal: 20 }}>
                                <Feather name="send" size={24} color={'white'} />
                                <Text style={{ color: '#757575', marginTop: 5 }}>Share</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'black', borderWidth: 1, marginTop: 20, height: 50, width: 130, }}>
                            <Picker
                                selectedValue={currentSeason.name}
                                style={{ height: 50, width: 130 }}
                                itemStyle={{ height: 50, color: 'white' }}
                                onValueChange={(itemValue, itemIndex) => {
                                    setCurrentSeason(movie.seasons.items[itemIndex])
                                }}>
                                {seasonNames.map(seasonName => (
                                    <Picker.Item label={seasonName} value={seasonName} key={seasonName} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                )}
            />
        </View>

    )
}

export default MovieDetailsScreen;