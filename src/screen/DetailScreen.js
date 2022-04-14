import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, Alert, ScrollView, TouchableOpacity,StatusBar} from 'react-native'
import ImageData from "./ImageData";
import axios from "axios";
import { getData } from "../api/UserServices";
import storage from '@react-native-firebase/storage';
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const DetailScreen = ({ navigation }) => {

    const [data, setData] = useState();
    const [imageUrl, setImageUrl] = useState(undefined);



    useEffect(() => {
        getData()
            .then(prod =>
                setData(prod)
            )
            .catch(err => Alert.alert(err.code, err.message))

        storage()
            .ref('/' + 'strawberry.jpeg') //name in storage in firebase console
            .getDownloadURL()
            .then((url) => {
                setImageUrl(url);
            })
            .catch((e) => console.log('Errors while downloading => ', e));
    }, [])

    function addMeal() {
        navigation.navigate('BottomNavigation')
        alert('Meal Added')
    }



    return (
        <View>
            <StatusBar hidden={true}/>
            
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    source={{ uri: imageUrl }}></Image>
                     <View style={styles.header}>
                    <AntDesign name="arrowleft" size={28} color='gray' />
                 

                    
                </View>

                <View
                    style={{ flex: 1 }}>
                    {
                        data && data.map((data, index) => (
                            <View style={styles.DetailContainer}
                                key={index}
                            // style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Text style={styles.TitleData}>{data.title}</Text>
                                <View>
                                    <Text style={styles.DetailData}>{data.detail}</Text>
                                </View>
                                <TouchableOpacity style={styles.button} onPress={addMeal}>
                                    <Text style={styles.text} >ADD TO MEAL</Text>
                                    </TouchableOpacity>
                                    <View style={styles.icon}>
                                    <Ionicons name="heart-circle" size={80} style={styles.heart} />
                                  
                                    </View>
                                   
                               
                            </View>
                        ))

                    }

                </View>
            </View>
        </View>

    )
};

export default DetailScreen;

const styles = StyleSheet.create({

    card: {
        // alignItems: "center",
        // justifyContent: "center",
    },

    image: {
        height: '85%',
        width: '100%',
        marginTop: -25,
       alignContent:'stretch'
        
    },

    DetailContainer: {
        backgroundColor: 'gainsboro',
        //    marginBottom:40,
        height: 340,
        borderRadius: 20
    },

    button: {
        backgroundColor: 'blue',
        height: 60,
        width: 250,
        marginTop: 80,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 120,

        alignSelf: 'center'

    },

    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,

    },
    TitleData:{
        fontWeight: 'bold', 
        fontStyle: 'italic', 
        fontSize: 25, 
        textAlign: 'center', 
        color: 'crimson'

    },
    DetailData:{
        marginTop: 50, 
        color: 'black', 
        fontSize: 18, 
        textAlign: 'center', 
        justifyContent: 'center'

    },

    header: {
       position:'absolute',
       marginLeft:10,
    
       


    },
    icon:{
        flexDirection:'row-reverse',
        top:-70,
        

    },
    heart:{
        marginRight:40,
        color: '#Ce396f',
        
        
        
    }
})