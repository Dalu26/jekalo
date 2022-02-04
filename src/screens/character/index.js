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
    Pressable, 
    TouchableOpacity 
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';
import { MyText } from '../../utils/common/index';
import GStyles from '../../assets/styles/GeneralStyles';
import colors from '../../utils/colors';
import Logo from '../../assets/icons/logo/logo.svg';
import ListEmpty from '../../components/ListEmpty'
import Card from '../../components/Card';
import { getCharacters } from '../../utils/helpers';

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

const Characters = ({ navigation }) => {
    const [characters, setCharacters] = useState([])
    const [limitNumber, setLimitNumber] = useState(12)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getData()
    },[])

    const getData = async () => {
        setLoading(true)
        await getCharacters(limitNumber).then(res => {
            setCharacters(res.data)
        }).catch(err => err).finally(() => {
            setTimeout(() => setLoading(false), 2500)
        })
    }

    const handleRefresh = async () => {
        setLimitNumber(12)
        await getCharacters(12).then(res => {
            setCharacters(res.data)
        }).catch(err => err).finally(() => {
            setTimeout(() => setLoading(false), 2500)
        })
    }

    const renderItems = useCallback(({item, index}) => {
        const { name, img, nickname } = item
        return(
            <React.Fragment>
                <Animatable.View
                    key={index}
                    animation={fadeIn}
                    duration={700}
                    useNativeDriver={true}
                    delay={400 + index * 100}
                    style={[{width: '50%'}, centerContentStyle]}
                >
                    <Card
                        img={img}
                        name={name}
                        nickname={nickname} 
                    />
                </Animatable.View>
            </React.Fragment>
        )
    }, [])

    const loadMoreData = async () => {
        if(limitNumber < 50) {
            setLoading(true)
            if(limitNumber < 36) {
                setLimitNumber(limitNumber + 12)
               let nextSet = limitNumber + 12
                await getCharacters(nextSet).then(res => {
                    res.data.splice(0, limitNumber)
                    setCharacters(characters => [...characters, ...res.data])
                }).catch(err => err).finally(() => {
                    setTimeout(() => setLoading(false), 2500)
                })
            } else {
                setLoading(true)
                setLimitNumber(limitNumber + 14)
              let  nextSet = limitNumber + 14
                await getCharacters(nextSet).then(res => {
                    res.data.splice(0, limitNumber)
                    setCharacters(characters => [...characters, ...res.data])
                }).catch(err => err).finally(() => {
                    setTimeout(() => setLoading(false), 2500)
                })
            }
        }
    }

    const FooterComponent = () => {
        return(
            <View style={[centerContentStyle, footerArea]}>
                <TouchableOpacity 
                    onPress={() => loadMoreData()} 
                    activeOpacity={0.6} 
                    style={loadMoreStyle}
                    >
                    <MyText style={[
                        textLoadMore, 
                        textSofiaProBold, 
                        textCenter
                        ]}>
                            load more
                    </MyText>
                </TouchableOpacity>
            </View>
        )
    }

    const { container, header, headerText, iconContainer, footerArea, textLoadMore, loadMoreStyle } = styles
    const { textSofiaProBold, flexRow, centerContentStyle, textCenter } = GStyles

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
                        Character Screen
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
                    data={characters}
                    renderItem={renderItems}
                    numColumns={2}
                    keyExtractor={item => item.char_id.toString()}
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews
                    decelerationRate={'fast'}
                    bounces
                    contentContainerStyle={{
                        flex: characters.length === 0 ? 1 : 0,
                        justifyContent: characters.length === 0 ? 
                        'center': 'flex-start',
                    }}
                    refreshControl={
                        <RefreshControl 
                            progressBackgroundColor={colors.white}
                            colors={['rgba(76, 178, 16, 0.4)']}
                            onRefresh={() => handleRefresh()} 
                            refreshing={loading} 
                        />
                    }
                    ListEmptyComponent={<ListEmpty />}
                    ListFooterComponent={
                        characters.length < 12 || characters.length >= 50 ? 
                        null : <FooterComponent />
                    }
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
    footerArea: {
        width: '100%', 
        height: RFValue(50), 
        justifyContent: 'center'
    },
    loadMoreStyle: {
        alignSelf: 'center', 
        justifyContent: 'center', 
        borderWidth: 1, 
        backgroundColor: 'rgba(76, 178, 16, 0.1)', 
        borderColor: 'rgba(76, 178, 16, 0.5)',
        borderRadius: 4, 
        height: RFValue(30), 
        paddingHorizontal: 5,
    },
    textLoadMore: {
        color: colors.black,
        fontSize: RFValue(12)
    }
})

export default Characters