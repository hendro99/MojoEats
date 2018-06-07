import React, { Component } from 'react';
import { 
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class SplashScreen extends Component{
    render(){
        return (
             <View style = {styles.stylish}>
                    <Image source={{uri: 'https://i.pinimg.com/originals/b4/60/ba/b460ba47deb3bbb8d9c74b6490849a10.png'}} style={{height: 390, width: 350, flex: 0, padding:200}}/>
               
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Powered By MojoEats</Text>
                 </View>
                  
                );
            }
        }
export default SplashScreen;

const styles = StyleSheet.create({
    title: {color: '#000000',fontSize: 35, fontWeight: 'bold'},
    subtitle: {color: '#000000',fontSize: 20, fontWeight: '200'},
    stylish: {backgroundColor: '#FAFAFA', justifyContent:'center',flex:1, alignItems: 'center'}
});

