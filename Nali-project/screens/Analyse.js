import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from 'react-native';
import {  Header, SearchBar, Badge } from 'react-native-elements';
import { Content} from 'native-base';
import { MaterialIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import {Text, View} from 'native-base';
import AppLoading from 'expo-app-loading';
import { useFonts, Handlee_400Regular } from '@expo-google-fonts/handlee';
import { Roboto_400Regular, Roboto_700Bold, Roboto_500Medium, Roboto_300Light } from '@expo-google-fonts/roboto';
import { connect } from 'react-redux';


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


// acquisition of the likened items of the db
  useEffect(() => {
    const findArticlesWishList = async () => {

      const dataWishlist = await fetch(`http://10.0.0.106:3000/wishlist-articles?token=${props.token}`)

      const body = await dataWishlist.json()
      
     // console.log("BODY ARTICLE  ====>>>",body.articles)
      if(body.articles){
        
         setFavoris(body.articles)
         props.loadingArticles(body.articles)
     
      }
    }
  
    findArticlesWishList()
  },[]) 

// deletion of an article
  const handleClickDeleteArticle = async (name, type) => {

  const response = await fetch('http://10.0.0.106:3000/delete-article', {
   method: 'DELETE',
   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
   body: `id=${name}&token=${props.token}`
  });

   var favorisCopy = [...props.articlesLiked]
   var position = null
   console.log("FAVORISCOPY", favorisCopy, type)
     for(let i=0;i<favorisCopy.length;i++){
         if(favorisCopy[i].type == type){
             position = i
             favorisCopy.splice(position,1);
         }
     } props.loadingArticles(favorisCopy)
}

// search for an article 
  var findArticle = async () => {
    

    const saveReq = await fetch('http://10.0.0.103:3000/find-article', {

       method: 'POST',
       headers: {'Content-Type':'application/x-www-form-urlencoded'},
       body: `name=${searchQuery}`
      }); 
      var response = await saveReq.json();
      //console.log(response, 'RESPONSE =================>>>')
     // console.log(response.article, 'RESPONSE.ARTICLE =================>>>')
     // console.log(response.article.name, 'RESPONSE.ARTICLE.NAME =================>>>')

      if(response.article) {
       
        setIsFound(true)
        props.saveArticles(response.article)
      }
      
     }
     
     //  map on the favorites and return the cards 

    var userFavoris = props.articlesLiked.map((article,i) => { 
	
      if(favoris != null){
       return (
         <TouchableOpacity key={i} activeOpacity={1} style={{marginTop: 25, alignItems: 'center', justifyContent: 'center'}} onPress={() => props.navigation.navigate('SearchResults')}>
         <View style={styles.box}>
           <Image source={{  uri: article.image }} style= {{width: 70, height: 110, marginLeft: 15}}/>
             <View style={{marginLeft: 15}}>
               <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 17, marginTop: 1, marginRight: 70}}>{article.type}</Text>
                <View style={{flexDirection: 'row', marginTop: 20, paddingLeft: 10}}>
                 <Badge value=" "
                 status="success"// success = vert  //  warning = orange  //  error = rouge
                 />
                 <Text style={{ fontFamily: 'Roboto_300Light', fontSize: 14, marginLeft: 10, marginBottom: 1, marginTop: 1}}>{article.rating}/20</Text>
               </View>
             </View>
           <Entypo name="cross" size={30} color="black" style= {{ marginLeft: -110, marginTop: 80}} onPress={() => handleClickDeleteArticle(article._id, article.type)}/>
         </View> 
       </TouchableOpacity>
       )
     } else {
       return (
         <View></View>
       )
     }
       }).reverse()


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
                          style={{marginRight: 10}}
                          onPress={() => props.navigation.navigate('Profil', { screen: 'Profil' })}
                          />}
      />

      <Content>
       <ScrollView>
        
        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: "10%"}}>
          <Text style={{marginBottom: 5, fontSize: 14}}>Que contient votre produit capillaire préféré ?</Text>
            <View style={{flexDirection: 'row', marginTop: 0, alignItems: 'center'}}>
              <SearchBar
                lightTheme
                containerStyle={styles.searchbar}        
                inputContainerStyle={{backgroundColor: 'white', width: 220, height: 40 }}
                placeholder="Rechercher produit.."
                placeholderTextColor={ "grey" }
                searchIcon={null}
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{color:'black'}}            
              />
              <MaterialIcons name="search" size={40} color="#A1DEAB" 
              style= {{ marginTop: '5%', paddingLeft: 12 }} 
              onPress={() => {findArticle(); props.navigation.navigate('SearchResults')}} />
            </View>
        </View>

        <View style={{ marginLeft: '5%', marginTop: '15%', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row'}}>
          <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 20, marginRight: 10, paddingTop: 2}}>Favoris</Text> 
          <MaterialIcons name="favorite" size={30} color="#F543A5"/>
        </View>

        {userFavoris}
        
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
     searchbar: {
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
      marginBottom: -20,
      justifyContent: 'center'
     },
     box: {
      alignItems: 'center',
      flexDirection: 'row',
      width: 350,
      height: 150,
      backgroundColor: 'white',
      elevation: 3,
      shadowOffset: { width: 5, height: 5 },
      shadowColor: "black",
      shadowOpacity: 0.2,
      shadowRadius: 5,
      borderColor: 'white',
      borderRadius: 10,
     },
     button: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      backgroundColor: "#222222", 
      borderRadius: 10, 
      width: 200, 
      height: 50, 
      fontFamily: 'Roboto_700Bold', 
      marginTop: Platform.select({
        ios: '10%', 
        android:'7%', 
      }),
    }
  });


  
  function mapStateToProps(state){
    //console.log('MON STATE RETOUR =================>>>>>>>>',state)
    return {articlesLiked: state.articlesLiked, token: state.token}
    
  }

  function mapDispatchToProps(dispatch) {
    return {
      saveArticles: function(articles){
       // console.log('ARTICLES DISPATCH',articles)
        dispatch({type: 'saveArticles',
          articles: articles
        })
    },
    loadingArticles: function(articles){
      console.log('ARTICLES DISPATCH',articles)
      dispatch({type: 'loadingArticles',
        articles: articles
      })
  }
  }
}
 
  
 // Modification de l’export, pour appliquer nos functions au composant conteneur
  export default connect(
  mapStateToProps,
  mapDispatchToProps,
  
  )
  (Analyse);