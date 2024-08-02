import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";

interface OtpInputProps {
  length?: number;
  value?: string;
  onChangeOtp?: (otp: string) => void;
  containerStyle?: string;
  inputStyle?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({
  length = 4,
  value = "",
  onChangeOtp,
  containerStyle = "",
  inputStyle = "",
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    const otpArray = value.split("").slice(0, length);
    const paddedOtp = Array(length)
      .fill("")
      .map((_, i) => otpArray[i] || "");
    setOtp(paddedOtp);
  }, [value, length]);

  const handleChange = (index: number, inputValue: string) => {
    const newOtp = [...otp];
    newOtp[index] = inputValue;

    if (inputValue && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    setOtp(newOtp);
    if (onChangeOtp) {
      onChangeOtp(newOtp.join(""));
    }
  };

  const handleKeyPress = (
    index: number,
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    if (e.nativeEvent.key === "Backspace" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View className={`flex-row gap-5 justify-center ${containerStyle}`}>
      {otp.map((digit, index) => (
        <View key={index}>
          <TextInput
            className={`w-14 h-14 bg-grey/5 p-2 rounded-2xl text-black text-2xl  text-center ${inputStyle}`}
            maxLength={1}
            value={digit}
            onChangeText={(inputValue) => handleChange(index, inputValue)}
            onKeyPress={(e) => handleKeyPress(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
            keyboardType="numeric"
          />
        </View>
      ))}
    </View>
  );
};

export default OtpInput;
