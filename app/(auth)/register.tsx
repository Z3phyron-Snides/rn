import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/input-field";
import { Link } from "expo-router";
import { socials } from "../../constants";

const Register = () => {
  return (
    <SafeAreaView className="px-[5%] justify-center flex-1  h-full bg-white">
      <View>
        <Text className="text-4xl font-extrabold mb-8">Sign Up</Text>

        <View className="space-y-5">
          <View>
            <Input placeholder="First Name..." />
          </View>
          <View>
            <Input placeholder="Last Name..." />
          </View>
          <View>
            <Input placeholder="Email Address..." />
          </View>
          <View>
            <Input type="password" placeholder="Password..." />
          </View>

          <TouchableOpacity className="bg-primary text-white w-full h-16 rounded-full items-center justify-center ">
            <Text className="text-white text-2xl">Continue</Text>
          </TouchableOpacity>
          <Text className="text-[16px]">
            Already got an account?{" "}
            <Link href="/login" className="font-semibold">
              Sign In
            </Link>
          </Text>
        </View>

        <View className="space-x-6 mt-16 flex-row items-center justify-center">
          {socials.map((social, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => console.log(`Clicked on ${social.title}`)}
              className="p-5 w-16 h-16 items-center justify-center bg-grey/5 rounded-2xl relative"
            >
              <Image
                source={social.image}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
