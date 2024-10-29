import React,{useRef, useState} from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import { horizontalScale } from '../../assets/styles/scaling';

const Tab = (props)=>{
    const [width, setWidth] = useState(0);
    const textRef =useRef(null);
    const paddingHorizontal = 33;
    const tabWidth = {
        width:horizontalScale(paddingHorizontal*2+width)
    }

    return (
        <Pressable 
        style={[style.tab, props.isInactive && style.isInactiveTab, tabWidth]}
        onPress={()=> props.onPress(props.tabId)}>
            <Text
             onTextLayout={(event)=>{
                setWidth(event.nativeEvent.lines[0].width)
             }}
             ref={textRef}
             style={[style.title, props.isInactive && style.titleinactive]}>{props.title}
            </Text>
        </Pressable>
    )
}

Tab.default = {
    isInactive: false,
    onPress:()=>{}
}
Tab.propType={
    title: PropTypes.string.isRequired,
    tabId:PropTypes.number.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func
}

export default Tab;