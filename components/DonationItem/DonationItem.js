import React from "react";
import PropTypes from "prop-types";
import { Image, View, Pressable } from "react-native";
import Badge from "../Badge/Badge";
import Header from "../Header/Header";
import style from "./style";


const DonationItem=(props)=>{
    return(
        <Pressable onPress={()=>{props.onPress(props.donationItemId)}}>
            <View>
                <View style={style.badge}>
                <Badge title={props.badgeTitle} />
                </View>
                <Image resizeMode={'cover'} style={style.image} source={{uri:props.uri}} />  
            </View>
            <View style={style.donationinfo}>
                <Header title={props.donationTitle} type={3} color={'#0A043C'} numberOfLines={1} />
                <View style={style.price}>
                    <Header title={'₹'+props.price.toFixed(2)} type={3} color={'#156CF7'} />
                </View>
            </View>
        </Pressable>
    )
}

DonationItem.default = {
    onPress: () => {}
};

DonationItem.propTypes={
    uri:PropTypes.string.isRequired,
    badgeTitle: PropTypes.string.isRequired,
    donationTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    donationItemId: PropTypes.number.isRequired,
    onPress: PropTypes.func
}

export default DonationItem;