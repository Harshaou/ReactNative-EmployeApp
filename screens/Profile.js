import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';


const Profile = (props) => {
const {name, email, phone, picture, salery, position} = props.route.params
    
    const profile = () => {
        if(Platform.OS === "android"){
            Linking.openURL("tel: 123456")
        } else {
            Linking.openURL("telpromt: 123456")
        }
    }
    return(
       <View style={styles.root}>
           <LinearGradient
          colors={['skyblue', '#71a3f5']}
          style={{height: '20%'}}
        />
        <View style={{alignItems: 'center'}}>
        <Image style={{width: 140, height: 140, borderRadius: 140/2, marginTop: -60}}
        source={{uri: picture}} />
        </View>
        <View style={{alignItems: 'center', margin: 15}}>
            <Title>{name}</Title>
            <Text style={{fontSize: 18}}>{position}</Text>
        </View>

        <Card style={styles.card} onPress={() => Linking.openURL("mailto: newday@gmail.com")}>
            <View style={{flexDirection: 'row', margin: 10}}>
            <MaterialIcons style={{marginRight: 8}} name="email" size={24} color="skyblue" />
            <Text style={{fontSize: 18}}>{email}</Text>
            </View>
        </Card>

        <Card style={styles.card} onPress={() => profile()}>
            <View style={{flexDirection: 'row', margin: 10}}>
            <Feather style={{marginRight: 8}} name="phone" size={24} color="skyblue" />
            <Text style={{fontSize: 18}}>{phone}</Text>
            </View>
        </Card>

        <Card style={styles.card}>
            <View style={{flexDirection: 'row', margin: 10}}>
            <FontAwesome style={{marginRight: 8}} name="money" size={24} color="skyblue" />
            <Text style={{fontSize: 18}}> {salery} </Text>
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
