import { Image, StyleSheet, Text, View } from "react-native";
import Animated, {
  SlideInRight,
  SlideOutLeft,
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from "react-native-reanimated";
import React, { useEffect, useRef } from "react";
import { screenWidth, screenHeight, Colors } from "../../src/utils/constants";
import ActionButton from "../../src/components/ActionButton";

const StageIndicator = ({ currentStage }) => {
  const animations = [
    useSharedValue(37),
    useSharedValue(37),
    useSharedValue(37),
  ];

  const opacities = [
    useSharedValue(0.5),
    useSharedValue(0.5),
    useSharedValue(0.5),
  ];

  useEffect(() => {
    animations.forEach((anim, index) => {
      anim.value = withSpring(index === currentStage ? 16 : 37, {
        damping: 50,
        stiffness: 50,
      });
      opacities[index].value = withSpring(index === currentStage ? 1 : 0.5, {
        damping: 50,
        stiffness: 50,
      });
    });
  }, [currentStage]);

  return (
    <View style={styles.dotsContainer}>
      {[0, 1, 2].map((dot) => {
        const dotStyle = useAnimatedStyle(() => ({
          width: animations[dot].value,
          height: 8,
          borderRadius: 4,
          marginHorizontal: 4,
          opacity: opacities[dot].value,

          backgroundColor:
            dot === currentStage ? Colors.primaryAccent : "#D1D1D6",
        }));

        return <Animated.View key={dot} style={dotStyle} />;
      })}
    </View>
  );
};

const OnboardingScreen = () => {
  const [stage, setStage] = React.useState(0);
  const imageScale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // transform: [{ scale: withSpring(imageScale.value) }],
      width: screenWidth * 0.6,
      height: screenHeight * 0.4,
      marginBottom: screenHeight * 0.05,
      marginTop: screenHeight * 0.05,
      padding: 20,
    };
  });

  const titles = [
    "Trusted by millions of people, part of one part",
    "Spend money abroad, and track your expense",
    "Receive Money From Anywhere In The World",
  ];

  const images = [
    require("../../src/assets/illustrations/shield-illustration.png"),
    require("../../src/assets/illustrations/abroad-illustration.png"),
    require("../../src/assets/illustrations/receive-illustration.png"),
  ];

  const handleNext = () => {
    requestAnimationFrame(() => {
      setStage((prev) => (prev === 2 ? 0 : prev + 1));
    });
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        entering={SlideInRight.duration(500)}
        exiting={SlideOutLeft.duration(500)}
        key={`image-${stage}`}
        source={images[stage]}
        style={[
          {
            width: screenWidth * 0.6,
            height: screenHeight * 0.4,
            marginBottom: screenHeight * 0.05,
            marginTop: screenHeight * 0.05,
          },
          animatedStyles,
        ]}
        resizeMode="contain"
      />
      <StageIndicator currentStage={stage} />

      <Animated.Text
        entering={SlideInRight.duration(600)}
        key={`${stage}`}
        exiting={SlideOutLeft.duration(500).delay(100)}
        style={{
          fontSize: 34,
          fontWeight: 600,
          fontFamily: "Poppins",
          textAlign: "center",
          width: screenWidth * 0.8,
          marginVertical: 20,
        }}
      >
        {titles[stage]}
      </Animated.Text>

      <View
        style={{ width: screenWidth * 0.9, marginTop: screenHeight * 0.05 }}
      >
        <ActionButton text="Next" type="primary" action={handleNext} />
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",

    alignItems: "center",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.primaryAccent,
  },
  inactiveDot: {
    width: 37,
    backgroundColor: "#D1D1D6",
  },
});
