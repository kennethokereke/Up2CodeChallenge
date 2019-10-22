import React, { Component } from 'react'
import { Image, StyleSheet, Dimensions } from 'react-native'



export class profilepic extends Component {
    render() {
        return (
            <Image
            style={style.pic}
            />
           
        )
    }
}

const style =  StyleSheet.create ({
    pic: {width:90, height: 90, borderRadius: 90/2, backgroundColor: 'black'}
})

export default profilepic