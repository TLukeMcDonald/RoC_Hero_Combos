import { createSlice } from '@reduxjs/toolkit';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup, signOut } from 'firebase/auth';

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = authSlice.actions;

export const googleSignIn = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const result = await signInWithPopup(auth, googleProvider);
    dispatch(setUser(result.user));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(setUser(null));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export default authSlice.reducer;
