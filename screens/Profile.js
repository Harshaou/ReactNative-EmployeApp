import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons'; 

const Profile = () => {
    return(
       <View style={styles.root}>
           <LinearGradient
          colors={['skyblue', '#71a3f5']}
          style={{height: '20%'}}
        />
        <View style={{alignItems: 'center'}}>
        <Image style={{width: 140, height: 140, borderRadius: 140/2, marginTop: -60}}
        source={{uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}} />
        </View>
        <View style={{alignItems: 'center', margin: 15}}>
            <Title>Philp caster</Title>
            <Text style={{fontSize: 18}}>Frond end engineer</Text>
        </View>

        <Card style={styles.card}>
            <View style={{flexDirection: 'row', margin: 10}}>
            <MaterialIcons style={{marginRight: 8}} name="email" size={24} color="skyblue" />
            <Text style={{fontSize: 18}}>abc@gmail.com</Text>
            </View>
        </Card>

        <Card style={styles.card}>
            <View style={{flexDirection: 'row', margin: 10}}>
            <Feather style={{marginRight: 8}} name="phone" size={24} color="skyblue" />
            <Text style={{fontSize: 18}}>+91 9747166079</Text>
            </View>
        </Card>

        <Card style={styles.card}>
            <View style={{flexDirection: 'row', margin: 10}}>
            <FontAwesome style={{marginRight: 8}} name="money" size={24} color="skyblue" />
            <Text style={{fontSize: 18}}>5 LPA </Text>
            </View>
        </Card>

        {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button style={{margin: 5}} icon="account-edit" theme={theme} mode="contained" />
        <Button style={{margin: 5}} icon="camera" theme={theme} mode="contained" /> 
        </View> */}

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button style={{margin: 5}} icon="account-edit" theme={theme} mode="contained"> edit</Button>

                <Button style={{margin: 5}} icon="delete" theme={theme} mode="contained" >delete </Button>
            </View>
        

       </View>
    )  
}

const theme = {
    colors: {
      primary: 'skyblue'
    }
  }

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    card: {
        margin: 3

    }
})

export default Profile;
