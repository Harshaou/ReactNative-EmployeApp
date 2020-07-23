import React,{useEffect, useState} from 'react';
import { View, StyleSheet, Text, Image, ScrollView, FlatList } from 'react-native';
import axios from 'axios'
import {Card, FAB } from 'react-native-paper'

const Home = ({navigation}) => {
    const [post, setPost] = useState([])


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => setPost(res.data))
       
   })

   const data = [
     {id: '1', name: 'anas', email: 'anas@abc.com', salery: '5 LPA', phone: '123', position: 'Front-end Engineer', picture: "https://images.unsplash.com/flagged/photo-1536475280412-92f55a99824e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
     {id: '2', name: 'catherine', email: 'catherine@abc.com', salery: '5 LPA', phone: '123', position: 'Full Stack Engineer', picture: "https://images.unsplash.com/flagged/photo-1536475280412-92f55a99824e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
     {id: '3', name: 'philip', email: '@abc.com', salery: '5 LPA', phone: '123', position: 'Data Scientist', picture: "https://images.unsplash.com/flagged/photo-1536475280412-92f55a99824e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
     {id: '4', name: 'tyler', email: 'tyler@abc.com', salery: '5 LPA', phone: '123', position: 'AI Engineer', picture: "https://images.unsplash.com/flagged/photo-1536475280412-92f55a99824e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"},
     {id: '5', name: 'zeeshan', email: 'zeeshan@abc.com', salery: '5 LPA', phone: '123', position: 'Blockchain Engineer', picture: "https://images.unsplash.com/flagged/photo-1536475280412-92f55a99824e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}
   ]

    const renderList = (item) => {
        return (
        <Card id={item.id} style={{margin: 5}} onPress={() => navigation.navigate('Profile', item)} >
            <View style={styles.container}>
            <Image style={styles.ImgStyle} source={{uri: item.picture}}/>
            
            <View style={{marginLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
            </View>
        </Card>
        )}
    
    return (
      <>
            <FlatList 
            data={data}
            renderItem={({item}) => {
            return renderList(item)
            }} 
             />
             
              <FAB onPress={() => navigation.navigate('Create')} icon="plus" theme={{colors: {accent: "skyblue"}}} style={styles.fab} />
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
