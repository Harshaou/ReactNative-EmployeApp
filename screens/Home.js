import React,{useEffect, useState} from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';
import axios from 'axios'
import {Card, FAB } from 'react-native-paper'
import CreateEmploye from './CreateEmploye';
import { color } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = () => {
    const [post, setPost] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => setPost(res.data))
       
   })

    const renderList = (item) => {
        return (
        <Card style={{margin: 5}}>
            <View style={styles.container}>
            <Image style={styles.ImgStyle}
             source={{uri: "https://images.unsplash.com/flagged/photo-1536475280412-92f55a99824e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}}/>
            
            <View style={{marginLeft: 10 }}>
              <Text>{item.title}</Text>
              <Text>{item.title}</Text>
            </View>
            </View>
        </Card>
        )}
    
    return (
      <>
            <FlatList
            data={post}
            renderItem={({item}) => {
            return renderList(item)
            }} 
             />
              <FAB icon="plus" theme={{colors: {accent: "skyblue"}}} style={styles.fab} />
      </>
    )}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  ImgStyle: {
      width: 60, 
      height: 60,
      borderRadius: 35
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default Home;
