import React from 'react'
import { Text, ScrollView,Image,TouchableOpacity, View, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { styles } from '../theme'
import { useNavigation } from '@react-navigation/native';

var {width, height} = Dimensions.get('window');

export function MovieList ({title, data}) {
    const movieName = "A very long movie name that is too long to fit in the box"
    const navigation = useNavigation();
    return (
      <View className='mb-8 space-y-4'>
        <View className='mx-4 flex-row justify-between items-center'>
            <Text className='text-white text-xl'> {title} </Text>
            <TouchableOpacity>
                <Text style={styles.text}> See All </Text>
            </TouchableOpacity>
        </View>
        {/* movie row */}
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 15}}
        >
            {
                data.map((item, index) => {
                    return(
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => navigation.navigate('Movie', item)}
                        >
                            <View className='mr-4 space-y-1'>
                                <Image
                                    source={require('../assets/images/moviePoster2.png')}
                                    className='rounded-xl'
                                    style={{width: width*0.3, height: height*0.2}}
                                />
                                <Text className='text-white text-center text-sm ml-1'>
                                    {
                                        movieName.length > 20
                                        ? movieName.slice(0, 20) + '...'
                                        : movieName
                                    }
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            }
        </ScrollView>
      </View>
    )
}

