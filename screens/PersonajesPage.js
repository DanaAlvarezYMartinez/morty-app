import React, { useState, useEffect , useRef} from 'react';
import axios from 'axios';
import {
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import Personajes from '../components/Personajes';
import Notificacion from '../components/Notificacion';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const image = {
  uri: 'https://i.pinimg.com/564x/07/ad/01/07ad01b520f8b9e67776680c995a236d.jpg',
};

const PersonajesPage = ({ navigation }) => {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParam, setParam] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [placeholder, setPlaceholder] = useState('Buscar...');
  const [filterParam, setFilterParam] = useState('');

  const dropdownRef = useRef({});  

  const getPersonajes = async () => {
    if (searchParam === '') {
      setIsLoading(true);

      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      );
      setPersonajes((personajes) => [...personajes, res.data.results]);
      setIsLoading(false);
    }
  };

  const clear = async () => {
    setParam('');
    setIsLoading(true);
    setPersonajes([]);
    setPlaceholder('Buscar...');
    setFilterParam('');
    dropdownRef.current.reset();
    setPage(1);
  };

  useEffect(() => {
    getPersonajes();
  }, [page]);

  const filter = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character/?${filterParam}=${searchParam}`
      );
      setPersonajes([res.data.results]);
    } catch (error) {
      setPersonajes([]);
    }
    setIsLoading(false);
  };

  const renderItem = ({ item }) => {
    return <Personajes navigation={navigation} personajes={item} />;
  };

  const opciones = [
    { title:'Nombre', value:'name'},
    { title:'Especie', value:'species'},
    {title:'Género', value:'gender'},
    {title:'Tipo', value:'type'},
    {title:'Status', value:'status'}
  ]

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const renderFooter = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size='large' animating={true} color='#000' />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <View style={styles.searchContainer}>
          <Text style={styles.title}>Personajes</Text>

          <SelectDropdown 
            data={opciones}
            defaultButtonText={ 'Selecione filtro' }
            dropdownOverlayColor="rgba(0,0,0,0.7)"
            rowTextForSelection={(item, index) => {
              return item.title;
            }}
            ref={dropdownRef}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.title;
            }}
            onSelect={(selectedItem, index) => {
              setFilterParam(selectedItem.value)
            }}
            buttonStyle={styles.dropdownBtn}
            buttonTextStyle={styles.dropdownText}
            dropdownStyle={styles.dropdown}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'angle-up' : 'angle-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
          />


          <TextInput
            style={styles.input}
            onChangeText={setParam}
            placeholder={placeholder}
            placeholderTextColor='#fff'
            editable
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={filter}>
              <Text
                style={{ fontSize: 11, letterSpacing: 5, fontWeight: 'bold' }}
              >
                BUSCAR
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={clear}>
              <Text
                style={{ fontSize: 11, letterSpacing: 5, fontWeight: 'bold' }}
              >
                CLEAR
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.personajesContainer}>
            <View contentContainerStyle={styles.scroll}>
            { (personajes.length === 0 && !isLoading ) ? (
                <Notificacion text='Oops! Parece que hay personajes'/>
              ) : (
                <FlatList
                data={personajes}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
              />
              )}

              
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PersonajesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btn: {
    backgroundColor: '#fff',
    color: '#000',
    width: 65,
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 35,
    borderColor: '#000',
    borderWidth: 2,
    fontSize: 11,
    marginHorizontal: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 10,
    color: '#fff',
  },
  personajesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  scroll: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  loader: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsContainer: {
    backgroundColor: '#000',
    borderRadius: 16,
    alignItems: 'center',
    padding: 10,
    paddingVertical: 40,
    opacity: 0.9,
  },
  dropdownBtn:{
    marginTop:20,
    width:'100%',
    height:40,
    backgroundColor: '#FFF',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdownText:{
    textAlign: 'left',
    fontSize:14,
  },
  dropdown:{
   borderRadius:8,
  }
});
