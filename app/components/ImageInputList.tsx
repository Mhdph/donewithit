import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ImageInput } from "./ImageInput";

type Props = {
  imageUris: string[];
  onRemoveImage: Function;
  onAddImage: Function;
};
export const ImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: Props) => {
  const scrollView = useRef<ScrollView>(null);

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri: string) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={(uri: string) => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
