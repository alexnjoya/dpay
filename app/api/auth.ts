// utils/api.ts

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

interface GoogleTokenRequest {
  code: string;
  redirect_uri: string;
  client_id: string;
  client_secret: string;
  grant_type?: string;
}

interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
}

export const exchangeGoogleToken = async (
  googleTokenRequest: GoogleTokenRequest
): Promise<GoogleTokenResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/google`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(googleTokenRequest),
    });

    if (!response.ok) {
      throw new Error("Failed to exchange Google token");
    }

    return await response.json();
  } catch (error) {
    console.error("Error in exchangeGoogleToken:", error);
    throw error;
  }
};
