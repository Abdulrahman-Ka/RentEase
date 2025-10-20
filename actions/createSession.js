"use server";
import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function createSession(formData) {
  const { account } = await createAdminClient();
  try {
    const session = await account.createEmailPasswordSession({
      email: formData.email,
      password: formData.password,
    });
    (await cookies()).set("appwrite-session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(session.expire),
      path: "/",
    });

    return {
      success: true,
    };
  } catch (error) {
    return {
      error: "Error: " + error,
    };
  }
}

export default createSession;
