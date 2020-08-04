import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { View, StyleSheet, Text, Image, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios'
import {Card, FAB } from 'react-native-paper'

const Home = ({navigation}) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => fetchData())

  const dispatch = useDispatch()

  const fetchData = () => {
    axios.get('https://pacific-earth-03921.herokuapp.com')
        .then(res => {
          setData(res.data)
          dispatch({type: 'FETCH_DATA', payload: res.data})
          dispatch({type: 'SET_LOADING', payload: false})
          setLoading(false)
          })
          .catch(err => console.log(err))
  }    
      
const {isLoading, employee} = useSelector(data => data)
   

    const renderList = (item) => {
        return (
        <Card key={item._id} style={{margin: 5}} 
        onPress={() => {
          navigation.navigate('Profile', item)
          dispatch({type: 'EDIT_EMPLOYEE', payload: item})
          }} >
            <View style={styles.employeeStyle}>
            <Image style={styles.ImgStyle} source={{uri: item.picture}}/>
            
            <View style={{marginLeft: 10 }}>
              <Text>{item.name}</Text>
              <Text>{item.email}</Text>
            </View>
            </View>
        </Card>
        )}
    
    return (
      <ScrollView>
        <>
        <FlatList 
        data={employee}
        renderItem={({item}) => {
        return renderList(item)
        }}
        onRefresh={() => fetchData()}
        refreshing={loading}
        keyExtractor={item => item._id}
         /> 
        <FAB onPress={() => navigation.navigate('Create')} icon="plus" theme={{colors: {accent: "skyblue"}}} style={styles.fab} />
        </>
      
      </ScrollView>
    )}


const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  employeeStyle: {
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
  }
})

export default Home;
