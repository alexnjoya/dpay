export const handleEmailLogin = async (email: string): Promise<{ success: boolean; token: string }> => {
  try {
    const response = await fetch("http://localhost:8000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) throw new Error(await response.text());

    const { token } = await response.json();
    localStorage.setItem("token", token);
    return { success: true, token };
  } catch (err: any) {
    throw new Error(err.message || "Login failed");
  }
};

export const handleGoogleLogin = async (): Promise<string> => {
  try {
    console.log("Attempting Google login...");
    // Return the URL for Google login
    return "http://localhost:8000/auth/google";
  } catch (err: any) {
    throw new Error(err.message || "Google login failed");
  }
};
