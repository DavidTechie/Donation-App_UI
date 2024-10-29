import React,{useState,useEffect} from 'react';
import style from './style';
import { View, Text,Image, Pressable, ScrollView, SafeAreaView, FlatList } from 'react-native';
import globalStyle from '../../assets/styles/style';
import { useSelector, useDispatch } from 'react-redux';
import { resetCategories, updateSelectedCategoryID } from '../../redux/reducers/Categories';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import { Routes } from '../../navigation/Routes';
import Search from '../../components/Search/Search';
import DonationItem from '../../components/DonationItem/DonationItem';
import { updateSelectedDonationId } from '../../redux/reducers/Donations';


const Home=({navigation}) =>{
    const user = useSelector(state=>state.user);
    const donations = useSelector(state=>state.donations);
    const dispatch = useDispatch();
    // dispatch(resetCategories());
    // dispatch(updateSelectedCategoryID());
    const categories = useSelector(state=> state.categories);
    const [categoryPage,setCategoryPage] = useState(1);
    const [categoryList,setCategoryList] = useState([]);
    const categoryPageSize = 4;
    const [isLoadingCategories,setIsLoadingCategories] = useState(false);
    const [donationItems,setDonationItems] = useState([]);


    useEffect(()=>{
        const items =donations.items.filter((value)=>
            value.categoryIds.includes(categories.selectedCategoryID),
    );
    setDonationItems(items);
    },[categories.selectedCategoryID])
    
    useEffect(()=>{
        setCategoryList(pagination(categories.categories,categoryPage,categoryPageSize));
        setCategoryPage(prev=> prev+1);
        setIsLoadingCategories(false);
    },[]);

    const pagination = (items,pageNumber,pageSize) =>{
        const startIndex = (pageNumber-1)*pageSize;
        const endIndex = startIndex + pageSize;
        if(startIndex>=items.length){
            return [];
        }
        return items.slice(startIndex,endIndex)
    }

    return (
    <SafeAreaView style={[globalStyle.backgroundwhite,globalStyle.flex]}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.header}>
                <View>
                <Text style={style.headerText}>Hello,</Text>
                <View style={style.userName}>
                    <Header title={user.firstName+" "+user.lastName[0]+'. 👋'} />
                </View>
                </View>
                <Image resizeMode={'contain'} style={style.profileimage} source={{uri:user.profileImage}} />
            </View>
            <View style={style.searchbar}>
                <Search />
            </View>
            <Pressable style={style.highlightedimagecotainer}>
                <Image style={style.highlightedimage} source={require('../../assets/image/highlighted_image.png')} resizeMode='contain' onPress={()=>{console.log('i am here')}} />
            </Pressable>
            <View style={style.categoryHeader}>
                <Header title={'Select Category'} type={2} />
            </View>
            <View style={style.categories}>
                <FlatList 
                onEndReachedThreshold={0.5}
                onEndReached={()=>{
                    if(setIsLoadingCategories) return;
                    setIsLoadingCategories(true);
                    let newData = pagination(categories.categories,categoryPage,categoryPageSize);
                    if(newData.length>0){
                        setCategoryList(prevState => [...prevState,...newData]);
                        setCategoryPage(prevState=> prevState+1)
                    }
                    setIsLoadingCategories(false)
                }}                 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={categories.categories} 
                renderItem={({item}) => (
                    <View style={style.categoryItem} key={item.categoryID}>
                      <Tab title={item.name}
                       tabId= {item.categoryID}
                       onPress={(value)=>{dispatch(updateSelectedCategoryID(value))}}
                       isInactive={item.categoryID !== categories.selectedCategoryID} />
                    </View>
                  )} />
            </View>
            {donationItems.length > 0 && (
            <View style={style.donationItemsContainer}>
                {donationItems.map(value => {
                    const categoryInfomation = categories.categories.find(val => val.categoryID === categories.selectedCategoryID);
                    return (
                    <View key={value.donationItemId} style={style.singleDonationItem}>
                        <DonationItem 
                            badgeTitle={categoryInfomation.name}
                            donationTitle={value.name}
                            uri={value.image}
                            donationItemId={value.donationItemId}
                            onPress={
                                selectedDonationID => {
                                dispatch(updateSelectedDonationId(selectedDonationID));
                                console.log(selectedDonationID)
                                navigation.navigate(Routes.SingleDonationItem,{categoryInfomation})}

                            }
                            price={parseFloat(value.price)}
                        />
                    </View>
                 )})}
            </View>
        )}
        </ScrollView>
    </SafeAreaView>
    );
}

export default Home;