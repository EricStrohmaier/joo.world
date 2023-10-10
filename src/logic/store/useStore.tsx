import { create } from "zustand";

import createPoolSlice, { PoolSlice } from "./poolSlice";

const useStore = create<PoolSlice>()((...a) => ({
  ...createPoolSlice(...a),
}));

export default useStore;
