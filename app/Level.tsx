import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation, useRootNavigation } from "expo-router";

const Level = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={styles.Main}>
          <AntDesign name="arrowleft" size={35} color="black" style={styles.Button} onPress={() => { navigation.navigate('index') }} />
            <Text style={styles.Heading}>Level</Text>
            <View style={styles.Images}>
                <Image source={require('../assets/images/Level.png')} style={{width:350,height:350}}/>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Start')}}>
                    <Text style={styles.Text}>Easy</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Hard')}}>
                    <Text style={styles.Text}>Hard</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Level

const styles = StyleSheet.create({
    Main:{
        width:'100%',
        height:'100%',
        backgroundColor:'blue',
        padding:15,
    },
    Heading:{
        fontSize:42,
        fontWeight:'600',
        textAlign:'center',
        color:'white',
        letterSpacing:4,
    },
    Button:{
        backgroundColor:'#eb9f14',
        width:40,
        textAlign:'center',
        borderTopLeftRadius:20,
        borderBottomRightRadius:20,
    },
    Images:{
        width:'100%',
        textAlign:'center',
    },
  
    button: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
        borderRadius:10,
        width:'80%',
        marginHorizontal:'auto',
        marginTop:20,
        margin:'0',
    },
    Text:{
        fontSize:22,
        color:'white',
    }
})