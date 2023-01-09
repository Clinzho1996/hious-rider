/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import ApiManager from "./ApiManager";

export const user_login = async (data) => {
  try {
    const result = await ApiManager("/rider_auth/login.php", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response;
  }
};
