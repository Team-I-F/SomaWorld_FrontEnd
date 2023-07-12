import { useMutation } from "react-query";
import { loginUser } from "./api";

export const useLoginMutation = (loginUserData) => {
  console.log(loginUserData);
  return useMutation(() => loginUser(loginUserData), {
    onSuccess: () => {
      alert("성공");
    },
    onError: () => {
      alert("실패");
    },
  });
};
