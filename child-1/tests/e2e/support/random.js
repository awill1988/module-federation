// Generate a random alphanumeric string to append to each new 'Test Account'
export const alphaNum = (length) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];

  return result;
};

// Generate a random numeric string for each test accounts number
export const num = (length) => {
  const nums = "0123456789";
  let result = "";

  for (let i = length; i > 0; --i) {
    result += nums[Math.round(Math.random() * (nums.length - 1))];
  }
  return result;
};
