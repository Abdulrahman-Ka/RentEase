"use server";
import { ID } from "node-appwrite";
import { createAdminClient } from "./config/appwrite";

async function createUser({ formData }) {
  console.log("Form Data: ", formData);

  try {
    const { account } = await createAdminClient();
    await account.create({
      userId: ID.unique,
      email: formData.email,
      password: formData.password,
      name: formData.name,
    });
    return {
      success: true,
    };
  } catch (error) {
    console.log("Registration Error: ", error);
    return {
      error: "Could not register user" + error,
    };
  }
}

export default createUser;
