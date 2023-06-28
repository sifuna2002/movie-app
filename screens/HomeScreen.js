import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {styles} from '../theme';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';

export default function HomeScreen() {
    const ios = Platform.OS === 'ios';
    return (
        <View className="flex-1 bg-neutral-800">
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
        </View>
    );
}
