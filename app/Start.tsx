import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context'
import P1 from '@/assets/images/Poker6.png'
import P2 from '@/assets/images/Poker7.png'
import P3 from '@/assets/images/Poker8.png'
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from 'expo-router'
import CardFlip from 'react-native-card-flip';
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
let loops = 0;
let arrays = []
const Start = () => {
  let Images = [P1, P2, P3, P1, P2, P3];

  let o = 0;
  let arrays1 = [P1, P2, P3, P1, P2, P3]
  let incre = 0;

  let [arrays2, setarrays2] = useState(Array(Images.length).fill(""))
  if (loops == 0) {
    loops++;
    arrays = [...arrays2]

    let randm = () => {
      return parseInt(Math.random() * 10)
    }

    while (incre < arrays1.length) {
      let indr = randm();
      if (arrays[indr] == "") {
        arrays[indr] = arrays1[incre++]
      }
    }
  }


  let [Card1, setCard1] = useState(Array(6).fill(""))
  let [value1, setvalue1] = useState(null)
  let [value2, setvalue2] = useState(null)
  let [ind, setind] = useState(null)
  let [count, setCount] = useState(0)
  let [real,setreal] = useState(0)



  let Showing = (inx) => {
    if (Card1[inx] !== "" || value1 != null && value2 != null) { return }
    setCount(count + 1);
    let copy = [...Card1];
    copy[inx] = arrays[inx];
    setCard1(copy);

    if (value1 === null) {
      setvalue1(arrays[inx])
      setind(inx)
    } else {
      setvalue2(arrays[inx])
      if (value1 !== arrays[inx]) {
        setTimeout(() => {
          let clean = [...Card1]
          clean[ind] = "";
          clean[inx] = ""
          setCard1(clean)
          setvalue1(null);
          setvalue2(null);
        }, 1000);
      } else {
        setvalue1(null);
        setvalue2(null);
      }
    }
  }


  (async function () {
    try {
       let reals = await AsyncStorage.getItem("Data")
        setreal(reals)
    } catch (e) {
      console.log(e);
    }

  })();

  for (let j = 0; j < arrays.length; j++) {
    if (Card1[j] !== "") {
      o++;
    }
  }


  if (o === Images.length) {
    
    let store = count;
    
    if (real > count || real === null || real===0) {
      let stor =  async (store) => {
        try {
          await AsyncStorage.setItem("Data",store.toString())
        } catch (e) {
          console.log(e);
        }
      }
      stor(store)
    }

  }
  let Resets = () => {
    loops = 0;
    setCount(0);
    let set = [...arrays2]
    setCard1(set)
  }
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.Main}>
      <View style={styles.Content}>
        <View style={styles.flex}>

        <View style={styles.logo}>
          <AntDesign name="arrowleft" size={30} color="black" style={{ textAlign: 'center' }} onPress={() => { navigation.navigate('index') }} />
        </View>
        <View style={styles.logo}>
          <FontAwesome name="refresh" size={24} color="black" style={{textAlign:'center',justifyContent:'center',}} onPress={()=>{AsyncStorage.clear()}}/>
        </View>
        </View>
        <View style={styles.ButtonF}>
          <View style={styles.Border}>
            <Text style={styles.TextColor}>High Score</Text>
            <Text style={styles.TextColor}>{real}</Text>
          </View>

          <View style={styles.Border}>
            <Text style={styles.TextColor}>Move</Text>
            <Text style={styles.TextColor}>{count}</Text>
          </View>
        </View>
        <View style={styles.Cards}>
          {
            Card1.map((el, inx) => {
              return (
                <TouchableOpacity key={inx} style={styles.Card} onPress={() => { Showing(inx) }}>
                  <Image source={el} style={styles.Img} />
                </TouchableOpacity>
              )
            })
          }
        </View>
        <TouchableOpacity style={{ width: '80%', marginHorizontal: 'auto', backgroundColor: '#51c751', padding: 10, marginTop: 50, borderRadius: 15, }} onPress={Resets}>
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: '500', }}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Start

const styles = StyleSheet.create({
  Main: {
    width: '100%',
    backgroundColor: '#5555e7',
    height: '100%',
  },
  Content: {
    width: '100%',
    padding: 15,
  },
  ButtonF: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  Border: {
    borderWidth: 1,
    paddingHorizontal: 25,
    margin: 5,
    backgroundColor: '#1c1c80',
    borderRadius: 8,
  },
  TextColor: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  Cards: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Card: {
    width: '45%',
    height: 150,
    margin: 5,
    backgroundColor: '#64eb64',
    borderRadius: 15,
  },
  Img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flex:{
    width:'100%',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: '#e2a025',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginBottom: 20,
  }
})