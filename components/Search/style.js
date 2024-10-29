import {StyleSheet} from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    searchInput:{
        flex:1,
        marginLeft:horizontalScale(6),
        height:'100%',
        fontSize: scaleFontSize(18),
        color:'#686C7A',

    },
    searchInputContainer:{
        borderRadius:horizontalScale(15),
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:horizontalScale(16),
        backgroundColor: '#F3F5F9',
        height:verticalScale(50)

    },
});

export default style;