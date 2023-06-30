import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback, View, Image } from 'react-native'
import { Carousel } from 'react-native-snap-carousel'

var {width, height} = Dimensions.get('window');

export default function TrendingMovies ({data}) {
    const navigation = useNavigation();
    const handleClick = () => {
        navigation.navigate('Movie', item);
    }
    return (
      <View className='mb-8'>
        <Text className='text-white text-xl mx-4 mb-5'> Trending </Text>
        <Carousel
            data={data}
            renderItem={({item}) => <MovieCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.5}
            sliderWidth={width}
            itemWidth={width*0.6}
            slideStyle={{display: 'flex', alignItems: 'center'}}
            />
      </View>
    )
  }

  const MovieCard = ({item, handleClick}) => {
    return(
        <TouchableWithoutFeedback onPress={handleClick}>
            <Image 
                source={require('../assets/images/moviePoster1.png')} 
                style={{width: width*0.6, height: height*0.4}}
                className='rounded-3xl'
            />
        </TouchableWithoutFeedback>
    )
  }
