import {View, Text, Platform, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {styles} from '../theme';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import TrendingMovies from '../components/trendingMovies';
import { MovieList } from '../components/movieList';

export default function HomeScreen() {
    const [trending, setTrending] = React.useState([1,2,3]);
    const [upcoming, setUpcoming] = React.useState([1,2,3]);
    const [topRated, setTopRated] = React.useState([1,2,3]);
    const ios = Platform.OS === 'ios';
    return (
        <View className="flex-1 bg-neutral-700">
            {/* search bar and logo */}
            <SafeAreaView className={ios? '-mb-2': 'mb-3'}>
                <StatusBar style="light" />
                <View className="flex flex-row justify-between items-center mx-4">
                    <Bars3CenterLeftIcon size={30} color="white" strokeWidth={2} />
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size={30} color="white" strokeWidth={2} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 10}}
            >
                {/* trending movies carousel*/}
                <TrendingMovies data={trending} />
                {/* upcoming movies */}
                <MovieList title="Upcoming" data={upcoming} />
                {/* top rated movies */}
                <MovieList title="Top Rated" data={topRated} />
            </ScrollView>
        </View>
    );
}
