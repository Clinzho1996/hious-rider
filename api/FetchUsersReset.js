/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import ApiManagerReset from "./ApiManagerReset";

export const user_reset = async (data) => {
  try {
    const result = await ApiManagerReset("/verify_reset_code.php", {
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
