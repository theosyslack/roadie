function transformStringToUppercase(string: string) {
  const lower = string.toLowerCase();
  return lower.replace(/(?:^|\s)\S/g, (c) => c.toUpperCase());
}

export default transformStringToUppercase;