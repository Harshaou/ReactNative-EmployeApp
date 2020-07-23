import React, { useState } from 'react';
import { View, StyleSheet, Modal, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'; 

const CreateEmploye = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [salery, setSalery] = useState('');
    const [pictue, setPictue] = useState('');
    const [model, setModel] = useState(false);

    const pickFromGallery = async () => {
      const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
      if(granted){
        let data = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 0.5
        })
        if(!data.cancelled){
          let newFile = {
            uri: data.uri,
            type: `test/${data.uri.split(".")[1]}`,
            name: `test.${data.uri.split(".")[1]}`
          }
          handleUpload(newFile)
        }
      } else {
        Alert.alert('Permission denied')
      }
    }

    const takePhoto   = async () => {
      const {granted} = await Permissions.askAsync(Permissions.CAMERA)
      if(granted){
        let data = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1,1],
          quality: 0.5
        })
        if(!data.cancelled){
          let newFile = {
            uri: data.uri,
            type: `test/${data.uri.split(".")[1]}`,
            name: `test.${data.uri.split(".")[1]}`
          }
          handleUpload(newFile)
        }
      } else {
        Alert.alert('Permission denied')
      }
    }

    const handleUpload = (image) => {
      const data = new FormData()
      data.append('file', image)
      data.append('upload_preset','employeeApp')
      data.append('cloud_name','dfsorsi7f')

      fetch("https://api.cloudinary.com/v1_1/dfsorsi7f/image/upload", {
        method: 'post',
        body: data,
      }).then(res => res.json())
      .then(data => setPictue(data.url), setModel(false))
      
      
    }
     

    return (
        <View style={styles.root}>
        <TextInput style={styles.inputStyle}
        label="Name" value={name} mode='outlined'
        theme={theme} onChangeText={text => setName(text)} />

        <TextInput style={styles.inputStyle}
        label="email" keyboardType='email-address' value={email}
        mode='outlined' theme={theme} onChangeText={text => setEmail(text)} />

        <TextInput style={styles.inputStyle}
        label="phone" keyboardType='number-pad' value={phone} 
        mode='outlined' theme={theme} onChangeText={text => setPhone(text)} />

        <TextInput style={styles.inputStyle}
        label="salery" value={salery} mode='outlined' 
        theme={theme} onChangeText={text => setSalery(text)} />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Button style={{margin: 5}} icon={ pictue === '' ? "face-profile" : "check"} theme={theme} mode="contained" 
        onPress={() => setModel(true)}>{pictue === '' ? 'Add Picture' : 'Picture Uploaded'}</Button>

        <Button style={{margin: 5}} icon="content-save" theme={theme} mode="contained"
        onPress={() => setModel(true)}>Save</Button>
        </View>


        <Modal animationType='slide' onRequestClose={() => setModel(false)}
        transparent={true} visible={model}>
          <View style={styles.modelView}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button style={{margin: 5}} icon="camera" theme={theme} mode="contained" 
                onPress={takePhoto}>shoot</Button>

                <Button style={{margin: 5}} icon="image-area" theme={theme} mode="contained" 
                onPress={pickFromGallery}>gallery</Button>
            </View>

            <View>
              <Button icon="upload" theme={theme} mode="contained" onPress={() => setModel(false)}>Cancel</Button>
            </View>
         </View>  
        </Modal>
         
        </View>
      );
}


const theme = {
    colors: {
      primary: 'skyblue'
    }
  }

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 10
    },
    modelView: {
        position: "absolute",
        bottom: 2,
        width: '100%',
        backgroundColor: 'white'
    }
})

export default CreateEmploye;
