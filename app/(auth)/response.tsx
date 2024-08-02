import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";

const Response = () => {
  return (
    <SafeAreaView className="px-[5%] justify-center flex-1  h-full bg-white">
      <View className="justify-center items-center space-y-6">
        <Image
          source={images.email_sent}
          className="w-40 h-36 mr-10"
          resizeMode="contain"
        />
        <Text className="text-2xl text-center font-medium">
          We Sent you an Email to reset your password.
        </Text>
        <TouchableOpacity className="bg-primary text-white w-full h-16 rounded-full items-center justify-center ">
          <Text className="text-white text-2xl">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Response;
