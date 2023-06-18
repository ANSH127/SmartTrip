import { View, Text, Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import BackButton from '../components/backButton'
import { useNavigation } from '@react-navigation/native'

export default function SignUnScreen() {
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    const navigation = useNavigation();

    const handleSubmit = () => {
        if(email && password) {
            console.log(email, password)
            navigation.goBack();
            navigation.navigate('Home');
        }
        else{
            Alert.alert('Please fill all the fields')
            
        }

    }
    return (
        <ScreenWrapper>
            <View className="flex justify-between h-full mx-4">
                <View>
                    <View className="relative">
                        <View className="absolute top-0 left-0">
                            <BackButton />

                        </View>

                        <Text className={`${colors.heading} text-xl font-bold text-center`} >Sign Up</Text>
                    </View>
                    <View className='flex-row justify-center my-3 mt-5 ' >

                        <Image className='h-80 w-80' source={require('../assets/images/signup.png')} />
                    </View>
                    <View className="space-y-2 mx-2" >
                        <Text className={`${colors.heading} text-lg font-bold`} >Email</Text>
                        <TextInput  value={email} className="p-4 bg-white rounded-full mb-3" onChangeText={(val)=>setEmail(val)} />
                        <Text className={`${colors.heading} text-lg font-bold`} >Password</Text>
                        <TextInput secureTextEntry value={password} className="p-4 bg-white rounded-full mb-3" onChangeText={(val)=>setPassword(val)} />
                        <TouchableOpacity className="flex-row ">
                            <Text>Already have an account?</Text>
                        </TouchableOpacity>
                    </View>




                </View>

                <View>
                    <TouchableOpacity style={{backgroundColor:colors.button}} className=" my-6 rounded-full p-3 shadow-sm mx-2 " onPress={handleSubmit} >
                        <Text className="text-center text-white text-lg font-bold" >Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScreenWrapper>
    )
}