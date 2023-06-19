import { View, Text, TouchableOpacity, Image, FlatList, Platform } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import randomImage from '../assets/images/randomImage'
import EmptyList from '../components/emptyList'
import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'


const items = [
  {
    id: 1,
    place: 'London',
    country: 'United Kingdom',
  },
  {
    id: 2,
    place: 'Gujrat',
    country: 'India',
  },
  {
    id: 3,
    place: 'New York',
    country: 'United States',
  },
  {
    id: 4,
    place: 'Paris',
    country: 'France',
  },
  {
    id: 5,
    place: 'London',
    country: 'United Kingdom',
  },
  {
    id: 6,
    place: 'Paris',
    country: 'France',
  },
  {
    id: 7,
    place: 'London',
    country: 'United Kingdom',
  },

]

export default function HomeScreen() {
  console.log(Platform.OS)
  const navigation = useNavigation();

  const handleLogout = async() => {
    await signOut(auth);
  }

  return (
    <ScreenWrapper className='flex-1'>
      <View className="flex-row justify-between items-center p-4">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`} >Expensify</Text>
        <TouchableOpacity onPress={handleLogout} className='p-2 px-3 bg-white border border-gray-200 rounded-full' >
          <Text className={colors.heading} >Logout</Text>
        </TouchableOpacity>

      </View>
      <View className='flex-row justify-center items-center bg-blue-200 rounded-xl mx-4 mb-4 ' >
        <Image source={require('../assets/images/banner.png')} className="w-60 h-60" />
      </View>
      <View className='px-4 space-y-4'>
        <View className="flex-row justify-between items-center">
          <Text className={`${colors.heading} font-bold text-xl`} >Recent Trips</Text>
          <TouchableOpacity className='p-2 px-3 bg-white border border-gray-200 rounded-full' onPress={() => navigation.navigate('AddTrip')} >
            <Text className={colors.heading} >Add Trip</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 350 }}>
          <FlatList
            data={items}
            numColumns={2}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            ListEmptyComponent={<EmptyList message={"You haven't recorded any trips yet"} />}

            renderItem={({ item }) => {
              return (
                <TouchableOpacity className={`bg-white ${Platform.OS === 'android' ? 'p-2' : 'p-3'} rounded-2xl mb-3 shadow-sm`} onPress={() => navigation.navigate('TripExpenses',{...item})}  >
                  <View>
                    <Image source={randomImage()} className="w-36 h-36 mb-2 " />
                    <Text className={`${colors.heading} font-bold `} >{item.place}</Text>
                    <Text className={`${colors.heading} font-bold text-xs `}>{item.country}</Text>
                  </View>
                </TouchableOpacity>
              )

            }}




          />
        </View>
      </View>
    </ScreenWrapper>
  )
}