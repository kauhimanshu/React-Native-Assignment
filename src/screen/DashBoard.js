import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import Food from '../constant/Food';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'



const { width: screenWidth } = Dimensions.get('window');
const DashBoardScreen = ({ navigation }) => {
    const categories = ['Recommend', 'Elevenses', 'Brunch']

    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <View style={styles.categoryContainer}>
                    {categories.map((item) => (
                        <Text style={styles.categoryText}>{item}</Text>
                    ))}
                </View>
                <Image
                    source={{ uri: item.image }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DetailScreen')} >
                    <Text style={styles.text} >{item.text}</Text>
                </TouchableOpacity>
                <View style={styles.icon}>
                    <Ionicons name="heart-circle" size={70} style={styles.heart} />
                </View>
            </View>
        );
    };

    return (
        <View>

            <View style={styles.header}>
                <Entypo name="grid" size={28} color='gray' />
                <Ionicons name="search-outline" size={28} color="gray" />

            </View>
            <StatusBar hidden={true} />
            <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 90}
                data={Food}
                renderItem={renderItem}
            />


        </View>
    );
};

export default DashBoardScreen;

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    // },
    item: {
        width: screenWidth - 110,
        height: screenWidth + 120,
    },
    imageContainer: {
        flex: 1,
        // marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,

    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        marginTop: 60,
        borderRadius: 20,
        marginBottom: 40

    },
    header: {
        marginTop: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'blue',
        height: 50,
        width: 110,
        marginTop: 420,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        borderTopLeftRadius: 4

    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 12
    },
    heart: {
        marginLeft: 150,
        color: '#Ce396f',
        marginTop: -60,

    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    categoryText:{
        fontSize: 16, 
        color: 'grey', 
        fontWeight: 'bold',
        marginTop:20
    },



});