import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";
import LottieView from "lottie-react-native";

type Props = {
  progress: number;
  visible: boolean;
  onDone: any; // TODO: Fix this
};

export const UploadScreen = ({
  progress = 0,
  visible = false,
  onDone,
}: Props) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            source={require("../assets/animations/done.json")}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  animation: {
    width: 150,
  },
});
