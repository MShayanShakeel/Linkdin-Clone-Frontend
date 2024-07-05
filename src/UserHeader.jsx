export const UserHeaders = (token) => {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};
