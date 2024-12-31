import { StyleSheet, Text, View, TouchableOpacity , Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation, useRootNavigation } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const index = () => {
   
    const navigation = useNavigation();
  return (
    <View style={styles.Main}>
        <SafeAreaView >
            <View style={styles.Content}>
                <View style={styles.heading}>
                    <Text style={styles.Text}>Poker Game</Text>
                    <Text style={styles.Normal}>V. 1.0.0</Text>
                    <View style={{justifyContent:'center',width:'100%',height:350,alignItems:'center'}}>  
                        <Image source={require('../assets/images/Game.png')} style={{width:200,height:200}}/>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        <View style={styles.Start}>
                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Start')}}>
                        <Text style={styles.Buttons}>Start</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Level')}}>
                        <Text style={styles.Buttons}>Level</Text>
                    </TouchableOpacity>
            </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    Main:{
        flex:1,
        width:'100%',
        backgroundColor:'#5555f3',
        justifyContent:'space-between'
    },
    Content:{
        width:'100%',
        padding:15,
    },
    heading:{
        width:'100%',
        height:'60%',
        marginTop:20,
    },
    Text:{
        color:'white',
        fontSize:32,
        textAlign:'center',
        fontWeight:'600',
    },
    Normal:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    },
    Start:{
        width:'100%',
        height:'40%',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'flex-start',
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius:10,
        width:'80%',
        margin:'auto',
        marginTop:20,
        margin:'0',
    },
    Buttons:{
        fontSize:22,
        color:'white',
    }

})