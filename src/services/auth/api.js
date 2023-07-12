import customAxios from "../../utils/axios/axios";

export const loginUser = async (loginUserData) => {
  const data = customAxios.post("/user/login", loginUserData);
  return data;
};
