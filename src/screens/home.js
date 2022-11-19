import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import Text from '../components/text/text'
import { PLANET_LIST } from '../data/planet-list'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'

const PlanetItem = ({ item }) => {
  const navigation = useNavigation() 
  return (
    <Pressable onPress={() => navigation.navigate('Details', { planet: item })} style={styles.item}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={[styles.circle, {backgroundColor: item.color}]} />
        <Text preset='h4' style={styles.itemName}>{item.name}</Text>
      </View>
      <AntDesign name="right" size={18} color="white" />
    </Pressable>
  )
}

export default function Home({ navigation }) {
  const [ list, setList ] = useState(PLANET_LIST);
  
  const renderItem = ({ item }) => {
    return (
     <PlanetItem item={item} />
    )
  }

  const searchFilter = (text) => {
    const filteredList = PLANET_LIST.filter((planet) => {
      const planetName = planet.name.toLowerCase()
      const searchText = text.toLowerCase()
      return planetName.indexOf(searchText) > -1
    })
    setList(filteredList) 
  }

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <TextInput 
        placeholder='Type the planet name' 
        placeholderTextColor={colors.white}
        autoCorrect={false}
        style={styles.searchInput}
        onChangeText={(text) => searchFilter(text)}
      />
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={item => item.name}
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: spacing[4],
    },
    list: {
        padding: spacing[4]
    },
    circle: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[4]
    },
    separator: {
      borderBottomColor: colors.white,
      borderWidth: 0.5
    },
    searchInput: {
      padding: spacing[2],
      color: colors.white, 
      borderBottomColor: colors.white,
      borderBottomWidth: 1,
      margin: spacing[5]
    }
})