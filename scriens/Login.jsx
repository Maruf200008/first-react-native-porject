import Checkbox from 'expo-checkbox';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';





export default function Login({navigation}) {
  const [agree, setAgree] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {

    if(userName === "maruf" && password === "maruf") {
      return (
        Alert.alert(`Thank you ${userName}`),
        setUserName(""),
        setPassword(""),
        setAgree(false),
        navigation.navigate("Home")
      )
    }else {
      return (
        Alert.alert("User name & password is incorrect")
       
      )

    }
   
  }
  return (
     <View style={styles.container}>
      <Text style={styles.loginTitle}>Login Form</Text>
      <Text style={styles.loginSubtitle}>You can reach us anytime via any@maruf.com</Text>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
       <View>
       <Text style={styles.inputTitle}>
          Enter Your Name
        </Text>
        <TextInput value={userName} onChangeText={(value) => setUserName(value)} style={styles.inputFiled} placeholder='Mohammad Maruf' autoCapitalize='none' autoCorrect={false} />
       </View>

       <View>
       <Text style={styles.inputTitle}>
          Enter Your Password
        </Text>
        <TextInput value={password} onChangeText={(value) => setPassword(value)} style={styles.inputFiled} placeholder='@Maruf123' autoCapitalize='none' autoCorrect={false} secureTextEntry={true} />
       </View>

       <View style={styles.checkBoxContainer}>
       <Checkbox value={agree} onValueChange={() => setAgree(!agree)} />
       <Text>
       I have read and agreed with the TC
       </Text>
       </View>

       <View style={styles.loginContainer} >
       {agree ? (<TouchableOpacity onPress={handleSubmit} style={styles.loginButtonActive}>
        <Text style={{textAlign :  'center', color : '#fff', fontWeight : 'bold'}}>Loging</Text>
       </TouchableOpacity>) : (<TouchableOpacity disabled style={styles.loginButtonDActive}>
        <Text style={{textAlign :  'center', color : '#fff', fontWeight : 'bold'}}>Loging</Text>
       </TouchableOpacity>)}
       </View>
      </View>
    </View>
  
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal : 25,
    paddingVertical : 50


  },
  loginTitle: {
    fontSize : 25,
    textAlign : 'center',
    fontWeight : 'bold'
  },
  loginSubtitle: {
    marginTop : 10,
    fontSize : 16,
    textAlign : 'center',
  },
  inputContainer: {
    marginTop : 40,
    display : 'flex',
    gap : 40
  },

  inputTitle: {
   fontSize : 16,
   fontWeight : "bold",
   color : "#787777"
  },
  inputFiled : {
    marginTop : 10,
    borderWidth : 2,
   padding : 10,
    borderRadius : 10,
    backgroundColor : '#ededed',
    borderColor : "#ccc8c8"
  },
  checkBoxContainer : {
    display : 'flex',
    gap : 10,
    flexDirection : 'row'
  },
  loginContainer : {
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center'
  },
  loginButtonActive : {
    backgroundColor : "#b00440",
    width : 180,
    paddingHorizontal : 20,
    paddingVertical : 15,
    borderRadius : 50   
  },
  loginButtonDActive : {
    backgroundColor : "#777877",
    width : 180,
    paddingHorizontal : 20,
    paddingVertical : 15,
    borderRadius : 50   
  }
});
