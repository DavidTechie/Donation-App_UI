import { StyleSheet } from "react-native";
import { scaleFontSize } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    title1:{
        fontSize:scaleFontSize(24),
        lineHeight:scaleFontSize(29),
        fontWeight:'600',
        color:"#000000"
    },
    title2:{
        fontSize:scaleFontSize(18),
        lineHeight:scaleFontSize(22),
        fontWeight:'600',
        color:"#000000"

    },
    title3:{
        fontSize:scaleFontSize(16),
        lineHeight:scaleFontSize(19),
        fontWeight:'600',
        color:"#000000"
    },
});

export default style;