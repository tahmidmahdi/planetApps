import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
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

  const renderItem = ({ item }) => {
    return (
     <PlanetItem item={item} />
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={item => item.name}
        data={PLANET_LIST}
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
    }
})