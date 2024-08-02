import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/input-field";
import { Link } from "expo-router";

const ForgotPassword = () => {
  return (
    <SafeAreaView className="px-[5%] justify-center flex-1  h-full bg-white">
      <View>
        <Text className="text-4xl font-extrabold mb-8">Forgot Password</Text>

        <View className="space-y-5">
          <View>
            <Input placeholder="Email Address..." />
          </View>

          <TouchableOpacity className="bg-primary text-white w-full h-16 rounded-full items-center justify-center ">
            <Text className="text-white text-2xl">Continue</Text>
          </TouchableOpacity>
        </View>
        <Link href="/(auth)/response" className="text-3xl mt-10">
          Reponse
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
