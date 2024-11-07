import { AuthState } from "@/types/types";
import { AuthAction } from "./actions";

export const authReducer = (
  state: AuthState,
  actions: AuthAction,
): AuthState => {
  switch (actions.type) {
    case "SET_USER":
      return { ...state, user: actions.payload };
    case "SIGN_OUT":
      return { ...state, user: null };
    case "SET_LOADING":
      return { ...state, loading: actions.payload };
    case "SET_ERROR":
      return { ...state, error: actions.payload };
    default:
      return state;
  }
};
