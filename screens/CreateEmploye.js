import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


const CreateEmploye = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [salery, setSalery] = useState('');
    const [pictue, setPictue] = useState('');
    const [model, setModel] = useState(false);

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

        <Button style={{margin: 5}} icon="upload" theme={theme} mode="contained" 
        onPress={() => setModel(true)}>Upload</Button>

        <Button style={{margin: 5}} icon="content-save" theme={theme} mode="contained"
        onPress={() => setModel(true)}>Save</Button>

        <Modal animationType='slide' onRequestClose={() => setModel(false)}
        transparent={true} visible={model}>
          <View style={styles.modelView}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Button style={{margin: 5}} icon="camera" theme={theme} mode="contained" 
                onPress={() => setModel(true)}>shoot</Button>

                <Button style={{margin: 5}} icon="image-area" theme={theme} mode="contained" 
                onPress={() => setModel(true)}>gallery</Button>
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
        backgroundColor: '#76bbdb'
    }
})

export default CreateEmploye;
