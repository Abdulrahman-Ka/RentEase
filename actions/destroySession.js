"use server";
import { createAdminClient, createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";
async function destroySession() {
  const sessionCookie = await cookies().get("appwrite-session");

  if (!sessionCookie) {
    return {
      error: "No session cookie found",
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie);
    console.log("Account: ", account);
    await account.deleteSession({ sessionId: "current" });

    await cookies().delete("appwrite-session");

    return {
      success: true,
    };
  } catch (error) {
    return {
      error: "Error deleting session, " + error,
    };
  }
}

export default destroySession;
