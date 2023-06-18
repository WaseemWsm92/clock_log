import { configureStore } from "@reduxjs/toolkit";
import companySettingsSlice from "./settings/companySettings/signInSettings/signInSettignsSlice";
import authSlice from "./slices/authSlice";
import integrationSlice from "./slices/integration";


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    companySettings: companySettingsSlice.reducer,
    integration: integrationSlice.reducer,
  },
});

export const authActions = authSlice.actions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
