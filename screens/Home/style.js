import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
    donationcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: horizontalScale(24),
    },
    header:{
        marginTop: verticalScale(20),
        marginHorizontal: horizontalScale(24),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerText:{
        fontSize: scaleFontSize(16),
        lineHeight:scaleFontSize(19),
        letterSpacing:0.02,
        fontWeight:'400',
        color:'#635776'
    },
    userName:{
        marginTop: verticalScale(5),
    },
    profileimage:{
        width:horizontalScale(50),
        height:verticalScale(50),
    },
    searchbar:{
        marginHorizontal:horizontalScale(24),
        marginTop: verticalScale(20),
        marginBottom: verticalScale(5)
    },
    highlightedimagecotainer:{
        marginHorizontal:horizontalScale(24),
    },
    highlightedimage:{
        width:"100%",
        height: verticalScale(150),
    },
    categories:{
        marginLeft: horizontalScale(24),
        flex:1
    },
    categoryItem:{
        marginRight:horizontalScale(10)
    },
    categoryHeader:{
        marginTop:verticalScale(6),
        marginHorizontal: horizontalScale(24),
        marginBottom:verticalScale(16),
    },
    donationItemsContainer:{
        marginTop:verticalScale(20),
        marginHorizontal:horizontalScale(24),
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    singleDonationItem:{
        maxWidth:'49%',
        marginBottom:verticalScale(23)
    }
});

export default style;