import { AuthState } from "@/types/types";
import { AuthAction } from "./actions";

export const authReducer = (
  state: AuthState,
  actions: AuthAction,
): AuthState => {
  switch (actions.type) {
    case "SET_USER":
      return { ...state, user: actions.payload };
    case "REMOVE_USER":
      return { ...state, user: null };
    case "SET_TOKENS":
      return { ...state, tokens: actions.payload };
    case "REMOVE_TOKENS":
      return { ...state, tokens: null };
    case "SET_LOADING":
      return { ...state, loading: actions.payload };
    case "SET_ERROR":
      return { ...state, error: actions.payload };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
};
