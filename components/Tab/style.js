import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    tab:{
        backgroundColor:'#2979F2',
        height: verticalScale(35),
        justifyContent:'center',
        borderRadius:scaleFontSize(50),
    },
    isInactiveTab:{
        backgroundColor:'#F3F5F9',
    },
    title:{
        fontWeight:'500',
        fontSize:scaleFontSize(14),
        lineHeight: scaleFontSize(17),
        color:'#FFFFFF',
        textAlign:'center',
    },
    titleinactive:{
        color:'#79869F'
    }
});

export default style;