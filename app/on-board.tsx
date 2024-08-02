import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const onBoard = () => {
  const [shopFor, setShopFor] = useState("Men");
  const [ageRange, setAgeRange] = useState("");
  return (
    <SafeAreaView className="px-[5%] justify-center flex-1  h-full bg-white">
      <View className="flex-1 bg-gray-100 items-center justify-center p-4">
        <Text className="text-2xl font-bold mb-5">Tell us About yourself</Text>

        <Text className="text-lg my-2">Who do you shop for?</Text>
        <View className="flex-row mb-5">
          <TouchableOpacity
            className={`bg-gray-300 px-4 py-3 rounded-lg mx-2 ${
              shopFor === "Men" ? "bg-purple-600" : ""
            }`}
            onPress={() => setShopFor("Men")}
          >
            <Text
              className={`text-base ${shopFor === "Men" ? "text-white" : ""}`}
            >
              Men
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`bg-gray-300 px-4 py-3 rounded-lg mx-2 ${
              shopFor === "Women" ? "bg-purple-600" : ""
            }`}
            onPress={() => setShopFor("Women")}
          >
            <Text
              className={`text-base ${shopFor === "Women" ? "text-white" : ""}`}
            >
              Women
            </Text>
          </TouchableOpacity>
        </View>

        <Text className="text-lg my-2">How Old are you?</Text>
        <View
          className={`border border-gray-400 rounded-lg overflow-hidden w-4/5 mb-5`}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default onBoard;
