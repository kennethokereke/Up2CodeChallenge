import React, { Component } from 'react'
import {View,ImageBackground, StyleSheet, StatusBar, Text, Dimensions, Platform, TouchableOpacity,AsyncStorage} from 'react-native'

import {Form, Item, Input, Label, Card, CardItem, Button} from 'native-base'
import Profilepic from '../Components/profilepic'
import {validateUsername} from '.././validation'
import {MaterialCommunityIcons as Icon , AntDesign as Icons} from '@expo/vector-icons'
import Expo from 'expo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';







const {width, height} = Dimensions.get('window');



export class signup extends Component {


    state = {
        name: '',
        password: '',
        loading: false,
        secureTextEntry: true,
        iconName: "toggle-switch"

       

    }

    onIconPress = () => {
       let iconName = (this.state.secureTextEntry) ? "toggle-switch-off" : "toggle-switch";

        this.setState({
            secureTextEntry: !this.state.secureTextEntry,
            iconName: iconName
        });
    }
    

    
    
    render() {
        return (
            <ImageBackground 

            source={require('../assets/background.jpeg')}
            
            style={style.background}>
                 <View style={{ Height: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }} />
                <StatusBar barStyle="light-content"/>
               
                
                    <Card style={style.block}>

                        <View>

                        <View style={{justifyContent:'flex-start', alignSelf: 'center'}}>
                          <Profilepic />
                          <View style={{paddingTop:19, paddingHorizontal: 12}}>
                          <Text style={{fontSize: 20, color: "#979797"}}>SIGN UP</Text>
                          </View>
                          

                        </View>
                        
                        <KeyboardAwareScrollView enableOnAndroid={true}>
                        <Form>
                            <Item floatingLabel>
                                <Label style={style.label}>Full Name</Label>
                                <Input secureTextEntry={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={email => this.setState({email}) }
                                value = {this.state.email}
                                />

                            </Item>

                            <Item floatingLabel>
                                <Label style={style.label}>Password</Label>
                                <Input {...this.props}  
                                secureTextEntry={this.state.secureTextEntry }
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={password => this.setState({password})}
                                value={this.state.password}
                                />



                            </Item>
                        </Form>
                        </KeyboardAwareScrollView>

                        <View style={{ height: 40, width: 40 }} />

                        <View style={{justifyContent: 'space-between', alignItems:'center', flexDirection:'row',}}>
                           <View style={{paddingHorizontal: 15}}>
                           <Text style={{color: '#979797'}}>Show Password</Text>

                           </View>
                          
                           <View style={{paddingHorizontal: 15}}>
                               <TouchableOpacity onPress={this.onIconPress}>
                               <Icon name= {this.state.iconName}
                                size={35}
                                color= "#E5B822"

                                 />
                             </TouchableOpacity>
                          
                           </View>

                          

                           
                        </View>

                        <View style={{ height: 40, width: 40 }} />

                        <View style={{flexDirection: 'row'}}>
                          
                          <Button warning rounded  style={{height: 50, width: width - 110, justifyContent:'center', alignItems:'center', paddingEnd: 10}} onPress={() => this.props.navigation.navigate('Club')}>
                           
                          <Text style={{color: '#ffff'}}>Register</Text>
                      </Button>
              
                         
                      
                      <View style={{justifyContent:'center', alignItems: 'center', paddingHorizontal: 10}}>
                      <Button style={{width:55, height: 55, borderRadius: 55/2, backgroundColor: '#4A90E2', paddingHorizontal: 25}}>
                          <Text style={{color: '#ffff'}}>f</Text>
                      </Button>
                      </View>
              
              
                      </View>

                      <View style={{ height: 20, width: 20 }} />

                      <View style={{justifyContent: 'center', alignItems:'center', flexDirection: 'column', }}>
                          <TouchableOpacity>
                          <Text style={{color: "#979797"}}>swipe down to dismiss</Text>
                          
                            <View style={{justifyContent:'center', alignItems:'center'}}>
                            <Icons name= 'down'
                          size={15}
                          color= "#979797"
                          />
                               </View>
                          </TouchableOpacity>
                      </View>

                      
              

                        
                       
                      
                       </View>
                        
                   
                
            </Card>
            
            
            </ImageBackground>
        )
    }
    //Was having issues with backend Expo does not suupport much anymore
    // _Signup() {
    //     if (this.state.name || this.state.password == null) {
    //         alert('add credentials')
    //     } else {
    //         this.props.navigation.navigate('Signup');
    //     }
        
    //     }
    }


const style = StyleSheet.create({
    background: {
        
        flex: 1,
        resizeMode: 'cover',
        paddingTop: 50,
        paddingHorizontal: 10,
        paddingRight: 10

        
        
    },

    block: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        
        
        justifyContent: 'center',
        alignItems: 'stretch',
       

    },

    label: {
        color: '#b2b2b2'
    },

  
        errorTextStyle:{
            fontSize:20,
            alignSelf:'center',
            color:'red'
        }
   

 

   
})

export default signup
