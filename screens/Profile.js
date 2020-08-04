import React from 'react';
import { View, Text, Image, StyleSheet, Linking, Platform, Alert } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons';


const Profile = (props) => {
let {editEmployee } = useSelector(state => state)
const {_id, name, email, phone, picture, salery, position} = editEmployee
    
    const profile = () => {
        if(Platform.OS === "android"){
            Linking.openURL(`tel: ${phone}`)
        } else {
            Linking.openURL(`telpromt: ${phone}`)
        }
    }

    
    

    const deleteContact = (_id) => {
        fetch('https://pacific-earth-03921.herokuapp.com/delete', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: _id
        })
        })
        .then(res => res.json())
        .then(data => {
            Alert.alert(`Profile ${data.name} deleted `)
            props.navigation.navigate('Home')
        })
        .catch(err => console.log(err));
    }

    
    const editContact = () => {
        fetch('https://pacific-earth-03921.herokuapp.com/update', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: _id,
                name,
                email,
                phone,
                salery,
                picture,
                position
            })
            })
            .then(res => res.json())
            .then(() => {
                props.navigation.navigate('Create', editEmployee)
            })
            .catch(err => console.log(err));
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

        <Card style={styles.card} onPress={() => Linking.openURL(`mailto: ${email}`)}>
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

            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button onPress={() => editContact(_id)}  style={{margin: 5}} icon="account-edit" theme={theme} mode="contained"> edit</Button>

                <Button onPress={() => deleteContact(_id)} style={{margin: 5}} icon="delete" theme={theme} mode="contained" >delete </Button>
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
