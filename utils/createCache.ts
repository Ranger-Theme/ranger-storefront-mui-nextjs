import createEmotionCache from "@emotion/cache";

export const createCache = () => {
  return createEmotionCache({ key: "css", prepend: false });
};
