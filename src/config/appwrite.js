import { cookies } from "next/headers";
import { Client, Account, Storage, TablesDB } from "node-appwrite";

const createAdminClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(process.env.NEXT_APPWRITE_PUBLIC);

  return {
    get account() {
      return new Account(client);
    },
    get tablesDB() {
      return new TablesDB(client);
    },
    get storage() {
      return new Storage(client);
    },
  };
};

const createSessionClient = async () => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

  const session = await cookies.get("my-custom-session");
  if (session) {
    throw new Error("No Session");
  }
  client.setSession(session);

  return {
    get account() {
      return new Account(client);
    },
    get tablesDB() {
      return new TablesDB(client);
    },
  };
};

export { createAdminClient, createSessionClient };
