import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { Pressable,TextInput } from "react-native";
import style from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { scaleFontSize } from "../../assets/styles/scaling";

const Search = (props)=> {
    const TextInputRef = useRef(null);
    const [search,setSearch] = useState('');

    const handleFocus = ()=>{
        TextInputRef.current.focus(); 
    };
    const handleSearch = (searchValue)=>{
        setSearch(searchValue);
        props.onSearch(searchValue);
    }
    return (
        <Pressable style={style.searchInputContainer} onPress={handleFocus}>
            <FontAwesomeIcon icon={faSearch} size={scaleFontSize(22)} color={'#25C0FF'} />
            <TextInput placeholder="Search" ref={TextInputRef} style={style.searchInput}
            value={search}
            onChangeText={(value)=> handleSearch(value)} />
        </Pressable>
    );
};

Search.default={
    onSearch:()=>{ },
}

Search.propTypes={
    onSearch:()=>{
        onSearch:PropTypes.func
    }
};
export default Search;