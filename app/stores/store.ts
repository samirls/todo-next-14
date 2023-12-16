import { create } from "zustand";

interface storeState {
  userData: {
    user_id?: number | undefined;
    name?: string | undefined;
    email?: string | undefined;
    password?: string | undefined;
    sex?: string | undefined;
    color?: string | undefined;
    age?: string | undefined;
  };
  setUserData: (data: Partial<storeState["userData"]>) => void;
}

const useStore = create<storeState>()((set) => ({
  userData: {
    user_id: 0,
    name: "nothing",
    email: "nothing",
    password: "nothing",
    sex: "nothing",
    color: "nothing",
    age: "nothing",
  },
  setUserData: (data) => set({ userData: { ...data} }),
}));

export default useStore;
