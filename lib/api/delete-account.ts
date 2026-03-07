const BASE_URL = "https://api.shopam.org/api";

export interface ApiResponse<T = unknown> {
  message: string;
  data: T;
  statusCode: number;
}

export interface RequestOtpPayload {
  destination: string;
}

export interface VerifyOtpPayload {
  destination: string;
  code: string;
}

export const requestDeletionOtp = async (
  payload: RequestOtpPayload,
): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/user/delete-account/request-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to request verification code");
  }

  return response.json();
};

export const verifyOtpAndDelete = async (
  payload: VerifyOtpPayload,
): Promise<ApiResponse> => {
  const response = await fetch(`${BASE_URL}/user/delete-account/verify`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || "Failed to verify code and delete account",
    );
  }

  return response.json();
};
