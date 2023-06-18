// ***************************************************************
export const getToken = () =>
  JSON.parse(localStorage.getItem("userData") || sessionStorage.getItem("userData") || "null");
