import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    container:{
        marginHorizontal: horizontalScale(20),
        marginTop: verticalScale(7)
    },
    image:{
        marginTop: verticalScale(12),
        marginBottom: verticalScale(24),
        width:'100%',
        height:verticalScale(240),
        borderRadius:horizontalScale(5)
    },
    badge:{
        marginBottom: verticalScale(16)
    },
    description:{
        marginTop: verticalScale(7),
        marginBottom:verticalScale(10),
        marginHorizontal:horizontalScale(7),
        color:'#000000',
        fontWeight:'400',
        fontSize: scaleFontSize(14),
        lineHeight: scaleFontSize(22),
    },
    button:{
        marginHorizontal: horizontalScale(20)
    }
});

export default style;