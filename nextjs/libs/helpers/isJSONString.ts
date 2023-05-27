export const isJSONString = (value: string | undefined | null): boolean => {
  if (!value) {
    return false;
  }
  try {
    JSON.parse(value);
  } catch (e) {
    return false;
  }
  return true;
};
