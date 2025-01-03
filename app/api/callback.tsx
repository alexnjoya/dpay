'use client';

import { useRouter } from "next/router";
import { useEffect } from "react";
import { exchangeGoogleToken } from "./auth";

const OAuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const { code } = router.query;

    if (code) {
      const fetchTokens = async () => {
        try {
          const tokens = await exchangeGoogleToken({
            code: code as string,
            redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/auth/google/callback`,
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            client_secret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
            grant_type: "authorization_code",
          });
          console.log("Tokens:", tokens);
          // Handle token storage and redirection here
        } catch (error) {
          console.error("Error fetching tokens:", error);
        }
      };

      fetchTokens();
    }
  }, [router.query]);

  return <div>Authenticating...</div>;
};

export default OAuthCallback;
