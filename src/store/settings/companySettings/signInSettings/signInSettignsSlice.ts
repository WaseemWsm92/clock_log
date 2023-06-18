import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICompanySettingsState } from "./signInSettgings-type";
import { STATUS } from "../../../../constants/store";
import { deleteLocation, getLocationsData, postLocation, postOrganizationInformation, updateLocation } from "./signInSettings.api";

const initialState: ICompanySettingsState = {
  data: [],
  message: "",
  error: null,
  status: STATUS.IDLE,
};
const companySettingsSlice = createSlice({
  name: "companySettings",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(postOrganizationInformation.pending, (state) => {
      state.status = STATUS.PENDING;
    });
    builder.addCase(postOrganizationInformation.fulfilled, (state, action: PayloadAction<any>) => {
      console.log('action',action)
      state.message = action?.payload?.message??"";
      state.status = STATUS.SUCCEEDED;
    });
    builder.addCase(postOrganizationInformation.rejected, (state, action: PayloadAction<any>) => {
      state.status = STATUS.FAILED;
      state.message = action?.payload?.response?.data?.message??"";
      state.error = action?.payload;
    });
//
//
//get location data
//
builder.addCase(getLocationsData.pending, (state) => {
  state.status = STATUS.PENDING;
});
builder.addCase(getLocationsData.fulfilled, (state, action: PayloadAction<any>) => {
  state.message = action?.payload?.message??"";
  state.status = STATUS.SUCCEEDED;
  state.data=action.payload
});
builder.addCase(getLocationsData.rejected, (state, action: PayloadAction<any>) => {
  state.status = STATUS.FAILED;
  state.message = action?.payload?.response?.data?.message??"";
  state.error = action?.payload;
});

//
//
//
//post location
builder.addCase(postLocation.pending, (state) => {
  state.status = STATUS.PENDING;
});
builder.addCase(postLocation.fulfilled, (state, action: PayloadAction<any>) => {
  console.log('action',action)
  state.message = action?.payload?.message??"";
  state.status = STATUS.SUCCEEDED;
  state.data.push(action?.payload);

});
builder.addCase(postLocation.rejected, (state, action: PayloadAction<any>) => {
  state.status = STATUS.FAILED;
  state.message = action?.payload?.response?.data?.message??"";
  state.error = action?.payload;
});

//
//
//
//update location
builder.addCase(updateLocation.pending, (state) => {
  state.status = STATUS.PENDING;
});
builder.addCase(updateLocation.fulfilled, (state, action: PayloadAction<any>) => {
    console.log('action',action)
    state.message = action?.payload?.message??"";
    state.status = STATUS.SUCCEEDED;
    state.data=state.data.map((item)=>{
      console.log(item.id==action.payload.id)
      if(item.id==action.payload.id){
        item=action.payload
      }
      return item
    })
});
builder.addCase(updateLocation.rejected, (state, action: PayloadAction<any>) => {
  state.status = STATUS.FAILED;
  state.message = action?.payload?.response?.data?.message??"";
  state.error = action?.payload;
});
//
//
//
//Delete location
builder.addCase(deleteLocation.pending, (state) => {
  state.status = STATUS.PENDING;
});
builder.addCase(deleteLocation.fulfilled, (state, action: PayloadAction<any>) => {
  console.log('action',action)
  state.message = action?.payload?.message??"";
  state.status = STATUS.SUCCEEDED;
  state.data=state.data.filter((item)=>item.id!=action.payload.id)
});
builder.addCase(deleteLocation.rejected, (state, action: PayloadAction<any>) => {
  state.status = STATUS.FAILED;
  state.message = action?.payload?.response?.data?.message??"";
  state.error = action?.payload;
});

  },
});

export default companySettingsSlice;
