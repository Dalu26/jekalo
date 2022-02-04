import React, { 
    useEffect, 
    useState, 
    useCallback 
} from 'react'
import { 
    SafeAreaView, 
    StyleSheet, 
    StatusBar, 
    View, 
    FlatList, 
    RefreshControl, 
    Pressable
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';
import { MyText } from '../../utils/common/index';
import GStyles from '../../assets/styles/GeneralStyles';
import colors from '../../utils/colors';
import Logo from '../../assets/icons/logo/logo.svg';
import ListEmpty from '../../components/ListEmpty';
import ListRow from '../../components/ListRow';
import { getEpisodes } from '../../utils/helpers';

const fadeIn = {
    from: {
        opacity: 0,
        scale: 0
    },
    to: {
        opacity: 1,
        scale: 1
    }
}

const Episodes = ({ navigation }) => {
    const [episodes, setEpisodes] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        setLoading(true)
        await getEpisodes().then(res => {
            setEpisodes(res.data)
        }).catch(err => err).finally(() => {
            setTimeout(() => setLoading(false), 2500)
        })
    }

    const renderItems = useCallback(({item, index}) => {
        const { air_date, title, episode_id, season } = item
        return(
            <React.Fragment>
                <Animatable.View
                    key={index}
                    animation={fadeIn}
                    duration={700}
                    useNativeDriver={true}
                    delay={400 + index * 100}
                >
                    <ListRow
                        title={title}
                        air_date={air_date}
                        season={season} 
                        episode_id={episode_id}
                    />
                </Animatable.View>
            </React.Fragment>
        )
    }, [])

    const { container, header, headerText, iconContainer } = styles
    const { textSofiaProBold, flexRow } = GStyles

    return (
        <SafeAreaView style={container}>
            <StatusBar 
                    translucent={true} 
                    barStyle='dark-content' 
                    backgroundColor="rgba(0,0,0,0)" 
                />
                <View style={[flexRow, header]}>
                    <Animatable.View  
                        animation={'swing'}
                        easing="ease-in" 
                        iterationCount="infinite" 
                        direction='normal'
                        iterationDelay={2500}
                        useNativeDriver={true}
                    >
                        <Logo 
                            height={RFValue(30)} 
                            width={RFValue(30)} 
                        />
                    </Animatable.View>
                    <MyText style={[textSofiaProBold, headerText]}>
                        Epsiode Screen
                    </MyText>
                    <Pressable 
                        onPress={() => navigation.openDrawer()}
                        style={iconContainer}
                    >
                        <Icon 
                            name='menu' 
                            size={RFValue(20)}
                            style={{color: colors.black}} 
                        />
                    </Pressable>
                </View>
                <FlatList
                    data={episodes}
                    renderItem={renderItems}
                    keyExtractor={item => item.episode_id.toString()}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews
                    decelerationRate={'fast'}
                    initialNumToRender={20}
                    maxToRenderPerBatch={20}
                    bounces
                    contentContainerStyle={{
                        flex: episodes.length === 0 ? 1 : 0,
                        justifyContent: episodes.length === 0 ? 
                        'center': 'flex-start',
                    }}
                    refreshControl={
                        <RefreshControl 
                            progressBackgroundColor={colors.white}
                            colors={['rgba(76, 178, 16, 0.4)']}
                            onRefresh={() => getData()} 
                            refreshing={loading} 
                        />
                    }
                    ListEmptyComponent={<ListEmpty />}
                />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.smokeyWhite,
        paddingTop: RFValue(25),
        flex: 1,
        paddingHorizontal: RFValue(14),
    },
    header: {
         height: RFValue(50),
         borderBottomColor: 'rgba(76, 178, 16, 0.4)',
         borderBottomWidth: 2,
         width: '100%',
         alignItems: 'center',
    },
    headerText: {
         fontSize: RFValue(22),
         color: colors.jgreen,
         marginLeft: RFValue(8),
         flex: 1
    },
    iconContainer: {
        height: RFValue(35),
        width: RFValue(35),
        borderRadius: RFValue(6),
        backgroundColor: 'rgba(76, 178, 16, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Episodes