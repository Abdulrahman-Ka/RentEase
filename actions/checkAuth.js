"use server";
import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function checkAuth() {
  const sessioncookie = (await cookies()).get("appwrite-session");

  if (!sessioncookie) {
    return {
      isAuthenticated: false,
    };
  }

  try {
    const { account } = await createSessionClient(sessioncookie.value);
    const user = await account.get();

    return {
      isAuthenticated: true,
      user: {
        id: user.$id,
        name: user.name,
        email: user.email,
      },
    };
  } catch (error) {
    console.log("Authenticated Error: ", error);
    return { isAuthenticated: false };
  }
}

export default checkAuth;
