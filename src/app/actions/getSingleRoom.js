"use server";

import { createAdminClient } from "@/src/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getSingleRoom(id) {
  try {
    const { tablesDB } = await createAdminClient();

    const house = await tablesDB.getRow({
      databaseId: process.env.NEXT_APPWRITE_DATABASEID,
      tableId: process.env.NEXT_APPWRITE_TABLEID,
      rowId: id,
    });
    return house;
    revalidatePath("/", "layout");
  } catch (error) {
    console.log("Failed to get rooms", error);
    redirect("/error");
  }
}

export default getSingleRoom;
