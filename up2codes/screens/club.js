import React, { Component } from 'react'
import {View, Text, ScrollView, Image, ImageBackground, Dimensions, Platform, StatusBar} from 'react-native'
import * as mocks from '../mock'



const {height, width}  = Dimensions.get('window')


export class club extends Component {

   

   renderClub(club) {
       return (
           <View style={{flex: 1.5}}>

               <ImageBackground
               source={club.images}
               style={styles.images}
               >
                    <StatusBar barStyle="light-content"/>
                  
                   <View style={{flexDirection: 'column', justifyContent:'center', alignItems: 'center',position: 'relative', paddingTop:80}}>
                       
                       <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>{club.title}</Text>
                       <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
                       <Text style={{color: '#fff'}}>{club.feetAway}</Text>
                       <Text style={{color: '#fff'}}> | </Text>
                       <Text style={{color: '#fff'}}>{club.user}</Text>
                       </View>
                      
                   </View>

               </ImageBackground>
           </View>
       )

   }



   
   render() {

    const { clubs } = this.props;
     
       return(
          <ScrollView showsVerticalScrollIndicator={false}>
            {clubs.map(club => (
                <View style={{flex: 1, flexDirection:'column',backgroundColor:'black'}} key={`club-${club.id}`}>

                 {this.renderClub(club)}
                </View>

            ))}
             
          </ScrollView>

       );
   }
   
   
   

}



club.defaultProps = {
    clubs: mocks.Club
}

const styles = {
    images : {
        flex:1,
        resizeMode: 'cover',
        height: width /1.3,
        width : '100%',
        color:'black'
       
    }


}

export default club