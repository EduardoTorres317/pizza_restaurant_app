import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registeredusername: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.registeredusername = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
