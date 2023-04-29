import metrics from "./metrics";

const fontSize = (fs: number) => {
  return metrics.screenWidth * (fs / 365);
};

const size = {
  font6: fontSize(6),
  font8: fontSize(8),
  font10: fontSize(10),
  font12: fontSize(12),
  font14: fontSize(14),
  font16: fontSize(16),
  font20: fontSize(20),
  font24: fontSize(24),
};

const weight = {
  full: "900",
  semi: "600",
  low: "400",
  bold: "bold",
  normal: "500",
};

const type = {
  proximaNovaThin: "Proxima-Nova-Thin",
  proximaNovaRegular: "Proxima-Nova-Regular",
  proximaNovaSemibold: "Proxima-Nova-Semibold",
  proximaNovaBold: "Proxima-Nova-Bold",
};

export default {
  size,
  weight,
  type,
};
