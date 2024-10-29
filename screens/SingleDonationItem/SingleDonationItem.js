import React from "react";
import style from "./style";
import { useSelector } from "react-redux";
import { SafeAreaView, ScrollView , View, Image,Text } from "react-native";
import globalStyle from "../../assets/styles/style";
import BackButton from "../../components/BackButton/BackButton";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const SingleDonationItem =({navigation,route}) => {
    const donationItemInformation =useSelector(
        state=>state.donations.selectedDonationInformation
    );
    const categoryInfomation = route.params.categoryInfomation;

    return (
        <SafeAreaView style={[globalStyle.backgroundwhite,globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false} style={style.container}> 
                <BackButton onPress={()=>navigation.goBack()} />
                <Image style={style.image} source= {{uri:donationItemInformation.image}} />
                <View style={style.badge}>
                    <Badge title={categoryInfomation.name} />
                </View>
                <Header title={donationItemInformation.name} type={1} />
                <Text style={style.description}>{donationItemInformation.description}</Text>
            </ScrollView>
            <View style={style.button}>
                <Button title={'Donate'} />
            </View>
        </SafeAreaView>
    );
}

export default SingleDonationItem