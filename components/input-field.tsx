import { View, Text, TextInput } from "react-native";
import React, { FC, useState } from "react";
import { colors } from "../constants/colors";

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => void;
  type?: string;
};

const Input: FC<Props> = ({ value, placeholder, onChange, type }) => {
  const [showPw, setshowPw] = useState(false);
  return (
    <View className="bg-grey/5 h-16 w-full p-5 rounded-2xl justify-center">
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        className="placeholder:text-xl placeholder:text-grey/50 text-black no-underline"
        secureTextEntry={type === "password" && !showPw}
      />
    </View>
  );
};

export default Input;
