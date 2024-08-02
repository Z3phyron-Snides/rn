import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { images } from "../constants/images";
import { router } from "expo-router";

export default function index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/on-board");
    }, 2500);
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <View>
        <Image
          source={images.logo}
          className="w-[230px] h-[120]"
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
