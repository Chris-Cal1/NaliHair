// Maurine

// Chris 
import React, {useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Linking,  ScrollView, KeyboardAvoidingView } from 'react-native';
import {  Header, SearchBar, Badge } from 'react-native-elements';
import { Content} from 'native-base';

import { MaterialIcons, FontAwesome5, Ionicons, Entypo } from '@expo/vector-icons';
import { Button, Text, View} from 'native-base';

import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';
import {connect} from 'react-redux';



function Analyse(props) {

  const [searchQuery, setSearchQuery] = useState('');
  const [product, setProduct] = useState('');
  
  
  const [isFound, setIsFound] = useState(false);
  const [favoris, setFavoris] = useState([]);
  const onChangeSearch = query => setSearchQuery(query);
  //console.log("FAVORIS", favoris)

  let [fontsLoaded] = useFonts({
    Handlee_400Regular,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium,
    Roboto_300Light
  });


// acquisition des articles liké de la db
  useEffect(() => {
    const findArticlesWishList = async () => {
      const dataWishlist = await fetch(`http://10.0.0.100:3000/wishlist-articles?token=${props.token}`)
      const body = await dataWishlist.json()
      
     // console.log("BODY ARTICLE  ====>>>",body.articles)
      if(body.articles){
        
         setFavoris(body.articles)
     
      }
    
    }
  
    findArticlesWishList()
  },[]) 

// suppression d'un article
  const handleClickDeleteArticle = async name => {

  const response = await fetch('http://10.0.0.100:3000/delete-article', {
   method: 'DELETE',
   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
   body: `id=${name}&token=${props.token}`
  });
}

// recherche d'un article
  var findArticle = async () => {
    
    const saveReq = await fetch('http://10.0.0.100:3000/wishlist-article', {
       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: `name=${searchQuery}`
      }); 
      var response = await saveReq.json();
      console.log(response, 'RESPONSE =================>>>')
      console.log(response.article, 'RESPONSE.ARTICLE =================>>>')
      console.log(response.article.name, 'RESPONSE.ARTICLE.NAME =================>>>')

      if(response.article) {
       
        setIsFound(true)
        props.saveArticles(response.article)
      }
      
     }
     

     // faire un map sur les favoris et retourner les card 

   var userFavoris = favoris.map((article,i) => { 
	
   if(favoris != null){
		return (
      <TouchableOpacity key={i} activeOpacity={1} style={{marginTop: '3%', alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.navigate('SearchResults')}>
      <View style={styles.box}>
        <Image source={{  uri: article.image }} style= {{width: 70, height: 110, marginLeft: '5%'}}/>
          <View style={{marginLeft: '5%'}}>
            <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 14, marginTop: '10%', marginRight: '20%'}}>{article.type}</Text>
            <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 14, marginBottom: "5%"}}>{article.name}</Text>
             <View style={{flexDirection: 'row', marginTop: '1%'}}>
              <Badge value=" "
              status="success"// success = vert  //  warning = orange  //  error = rouge
              />
              <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 17, marginLeft: '5%'}}>{article.rating}/20</Text>
            </View>
          </View>
        <MaterialIcons name="favorite" size={30} color="#F543A5" style= {{marginLeft: '-50%', marginTop: '25%'}}/>
        <Entypo name="circle-with-cross" size={24} color="black" style= {{ marginLeft: '10%',marginTop: '35%'}} onPress={() => handleClickDeleteArticle(article._id)}/>
      </View> 
    </TouchableOpacity>

        
		)
  } else {
    return (
      <View></View>
    )
  }
		})


  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground source={require('../assets/006.png')} style={{flex: 1}}>

      <Header
      containerStyle = {{
        backgroundColor: 'white', 
        elevation: 6, 
        shadowOffsetX: 0,
        shadowOffsetY: -10,
        shadowColor: 'black', 
        shadowRadius: 7, 
        shadowOpacity: 0.2,
        paddingTop: "5%"
      }}
       placement="left"
       centerComponent={{ text: 'Analyse', style: { fontFamily: 'Handlee_400Regular', color: 'black', fontSize: 26}}}
       rightComponent={<FontAwesome5 
                          name="user-alt" 
                          size={26} 
                          color="black" 
                          onPress={() => props.navigation.navigate('Profil', { screen: 'Profil' })}
                          />}
      />

      <Content>
        
      <ScrollView>
        
        <View style={{alignItems: 'center', justifyContent: 'flex-start', marginTop: "12%"}}>
          <SearchBar
            lightTheme
            containerStyle={{
                backgroundColor: 'white',
                elevation: 6,
                zIndex: 2,
                shadowOffset: { width: 3, height: 3 },
                shadowColor: "black",
                shadowOpacity: 0.2,
                shadowRadius: 5,
                borderColor: 'white',
                borderTopWidth:0,
                borderRadius: 10,
            }}        
            inputContainerStyle={{backgroundColor: 'white', width: 260, height: 45}}
            placeholder="Rechercher produit.."
            placeholderTextColor={ "grey" }
            searchIcon={{color:'#A1DEAB', size: 35 }}
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{color:'black'}}            
          />
          <Button dark
          style={{marginTop: '5%', marginBottom: '4%', backgroundColor: '#222222', marginLeft: '30%'}}
          onPress={() => {findArticle(); props.navigation.navigate('SearchResults')}}>
           <Text style={{fontFamily: 'Roboto_500Medium', fontSize: 20}}> Rechercher </Text>
         </Button>
          <Text style={{marginTop: '3%', fontSize: 14}}>Que contient votre produit capillaire préféré ?</Text>
          
        </View>

        <View style={{ marginLeft: '5%', marginTop: '15%', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20,}}>Favoris</Text>
        </View>
          {userFavoris}
          

          <TouchableOpacity activeOpacity={1} style={{marginTop: '3%', alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.navigate('SearchResults', { screen: 'SearchResults' })}>
          <View
          style={styles.box}>
            <Image source={require('../assets/shampoing.png')} style= {{width: 70, height: 110, marginLeft: '5%'}}/>
              <View style={{marginLeft: '5%'}}>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, marginTop: '-10%'}}></Text>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20}}>Aromazon</Text>
                 <View style={{flexDirection: 'row', marginTop: '16%'}}>
                  <Badge value=" "
                  status="success"// success = vert  //  warning = orange  //  error = rouge
                  />
                  <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 17, marginLeft: '5%'}}>18/20</Text>
                </View>
              </View>
            <MaterialIcons name="favorite" size={30} color="#F543A5" style= {{marginLeft: '-2%', marginTop: '20%'}}/>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={{marginTop: '3%', alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.navigate('SearchResults', { screen: 'SearchResults' })}>
          <View
          style={styles.box}>
            <Image source={require('../assets/shampoing.png')} style= {{width: 70, height: 110, marginLeft: '5%'}}/>
              <View style={{marginLeft: '5%'}}>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, marginTop: '-10%'}}>Shampoing Doux</Text>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20}}>Aromazon</Text>
                 <View style={{flexDirection: 'row', marginTop: '16%'}}>
                  <Badge value=" "
                  status="warning"// success = vert  //  warning = orange  //  error = rouge
                  />
                  <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 17, marginLeft: '5%'}}>11/20</Text>
                </View>
              </View>
            <MaterialIcons name="favorite" size={30} color="#F543A5" style= {{marginLeft: '-2%', marginTop: '20%'}}/>
          </View> 
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={{marginTop: '3%', alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.navigate('SearchResults', { screen: 'SearchResults' })}>
          <View
          style={styles.box}>
            <Image source={require('../assets/shampoing.png')} style= {{width: 70, height: 110, marginLeft: '5%'}}/>
              <View style={{marginLeft: '5%'}}>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, marginTop: '-10%'}}>Shampoing Doux</Text>
                <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20}}>Aromazon</Text>
                 <View style={{flexDirection: 'row', marginTop: '16%'}}>
                  <Badge value=" "
                  status="error"// success = vert  //  warning = orange  //  error = rouge
                  />
                  <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 17, marginLeft: '5%'}}>6/20</Text>
                </View>
              </View>
            <MaterialIcons name="favorite" size={30} color="#F543A5" style= {{marginLeft: '-2%', marginTop: '20%'}}/>
          </View> 
        </TouchableOpacity>
        
        </ScrollView>

      </Content>

      <StatusBar style="dark" backgroundColor='white'/>

    </ImageBackground>
       
    );
  }
}
  
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'flex-start',
     },
     box: {
      alignItems: 'center',
      flexDirection: 'row',
      width: 300,
      height: 150,
      backgroundColor: 'white',
      elevation: 3,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      borderColor: 'white',
      borderRadius: 10,
     }
  });

  function mapStateToProps(state){
    //console.log('MON STATE RETOUR =================>>>>>>>>',state)
    return {articlesLiked: state.articlesLiked, token: state.token}
    
  }

  function mapDispatchToProps(dispatch) {
    return {
      saveArticles: function(articles){
        console.log('ARTICLES DISPATCH',articles)
        dispatch({type: 'saveArticles',
          articles: articles
        })
    }
  }
}
 
  
 //(3.19) Modification de l’export, pour appliquer nos functions au composant conteneur
  export default connect(
  mapStateToProps,
  mapDispatchToProps,
  
  )
  (Analyse);