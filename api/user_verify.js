/* eslint-disable prettier/prettier */
/* eslint-disable semi */

import ApiManagerVerify from "./ApiManagerVerify";

export const user_verify = async (data) => {
  try {
    const result = await ApiManagerVerify("/verify_rider.php", {
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
