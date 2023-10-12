import { create } from "zustand";
import createPoolSlice, { PoolSlice } from "./PoolSlice";

const useStore = create<PoolSlice>()((...a) => ({
  ...createPoolSlice(...a),
}));

export default useStore;
