import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator,Alert,Button,SafeAreaView,StyleSheet, Text, View, Platform, RefreshControl, TouchableOpacity,} from 'react-native';

export default function Home() {
  const [refreshing, setRefreshing] = React.useState(false);
const [count, setcount] = useState(0)
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <>
    <SafeAreaView style={styles.top_button}>
    <Button title='Clickle' onPress={()=>{
      Alert.alert("Eminsen?","yoxsa Dayim?",[
        {text:"Eminem"},
        {text:"Dayinam"}
      ])
    }}></Button>
    <View style={styles.count}>
<TouchableOpacity onPress={()=>setcount(count+1)} style={styles.btn}>
<Text style={styles.txt}>+</Text>
</TouchableOpacity>
<Text>{count}</Text>
<TouchableOpacity onPress={()=>setcount(count-1)} style={styles.btn}>
<Text style={styles.txt}>-</Text>
</TouchableOpacity>
    </View>
    </SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.tagi}>ChatGPT üzünə nəhlət</Text>
     
      <StatusBar style="auto" />
    </View>
    <View style={[styles.container, styles.horizontal]}>
   
    <ActivityIndicator size="large" color="#0000ff"  refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}/>
   
  </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagi:{
    color:"blue",
    fontSize:30
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  top_button:{

paddingTop:Platform.OS === "android" ? 0 : 0

  },
  count:{
    display:"flex",

    flexDirection:'row',

    gap:30,
    alignItems:'center',
    justifyContent:'center'
  },


  btn:{

    backgroundColor:'blue',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
color:"white",
    // display:'flex',

    // alignItems:'center',
    // justifyContent:'center'
    

    width:30,
    height:30
  },
  txt:{
    color:'white',
    fontSize:20
  }





});