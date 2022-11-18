import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Text from './text/text'
export default function PlanetHeader({ backBtn, title="THE PLANETS" }) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      {
        backBtn && (
          <Pressable style={{marginRight: spacing[4]}} onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
          </Pressable>
        )
      }
      <Text preset='h2'>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
        flexDirection: "row",
        alignItems: 'center',
    }
})