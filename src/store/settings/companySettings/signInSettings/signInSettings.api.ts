import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../../../config/endpoints";
import { apiDeleteRequest, apiGetRequest, apiPatchRequest, apiPostRequest} from "../../../../helpers/request";
import { ICompanySettingsState } from "./signInSettgings-type";

export const changeStatus = createAsyncThunk<ICompanySettingsState>(
  "apiInventorySlice/getapiInventory", async (data, thunkAPI) => {
    console.log('data in signIn settings',data)

  try {
    console.log('data in signIn settings',endpoints.companySettingsSignIn)

    const response = await apiGetRequest(endpoints.companySettingsSignIn);
    console.log(response)
    return response?.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});


export const postOrganizationInformation = createAsyncThunk( "companySettingsSlice/postOrganizationInformation", async (data: any, thunkAPI) => {
  try {
    const response: any = await apiPostRequest(endpoints.companySettingsOrganizationInformation, data);
    console.log('response',response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});



export const getLocationsData = createAsyncThunk<any>(
  "companySettingsSlice/getLocationsData", async (_, thunkAPI) => {

  try {

    const response = await apiGetRequest(endpoints.companySettingsLocationData);
    console.log('response',response)
    return response?.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});



export const postLocation = createAsyncThunk( "companySettingsSlice/postLocation", async (data: any, thunkAPI) => {
  try {
    const response: any = await apiPostRequest(endpoints.companySettingsLocationData, data);
    console.log('response',response)
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});



export const updateLocation = createAsyncThunk( "companySettingsSlice/updateLocation", async (data: any, thunkAPI) => {

  try {
    const response = await apiPatchRequest(endpoints.companySettingsLocationData+'/'+data.id,data);
      console.log('response',response)
      return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});




export const deleteLocation = createAsyncThunk<any, string>("companySettingsSlice/deleteLocation", async (id: any, thunkAPI) => {
  try {
    const response = await apiDeleteRequest(`${endpoints.companySettingsLocationData}/${id}`);
    response.data.id=id
    return response?.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
