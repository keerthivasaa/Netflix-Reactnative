import * as React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import styles from './styles';
import { Eposide } from '../../types'
import { Video } from 'expo-av';
import { Playback } from 'expo-av/build/AV';
import { useEffect } from 'react';
import { useRef } from 'react';

interface VideoPlayerProps {
    eposide: Eposide;
}

const VideoPlayer = (props: VideoPlayerProps) => {
    const { eposide } = props;

    const [status, setStatus] = React.useState({});
    const video = useRef<Playback>(null);

    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: eposide.video },
                {},
                false
            );
        })();
    }, [eposide])

    console.log(eposide);
    return (
        <>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{ uri: eposide.video }}
                    posterSource={{ uri: eposide.poster }}
                    posterStyle={{ resizeMode: 'cover' }}
                    usePoster={true}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
        </>
    );
}

export default VideoPlayer;


