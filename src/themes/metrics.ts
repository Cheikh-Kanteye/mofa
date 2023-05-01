import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  spacing: {
    small: 10,
    medium: 20,
    large: 30,
    xlarge: 40,
    xxlarge: 50,
  },
};

export default metrics;
