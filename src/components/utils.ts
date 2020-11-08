export const isProd = (): boolean => {
  if (process.env.NODE_ENV !== "production") {
    return false;
  } else {
    return true;
  }
};

export const getRemarkUrl: string =
  "https://raw.githubusercontent.com/dryadsoft/dryadsoft.github.io/master";
