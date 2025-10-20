import { createAdminClient } from "@/config/appwrite";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getAllRooms() {
  try {
    // const { tablesDB } = await createAdminClient();
    const { tablesDB } = await createAdminClient();

    const { rows: houses } = await tablesDB.listRows({
      databaseId: process.env.NEXT_APPWRITE_DATABASEID,
      tableId: process.env.NEXT_APPWRITE_TABLEID,
    });
    // revalidatePath("/", "layout");
    return houses;
  } catch (error) {
    console.log("Failed to get rooms", error);
    // redirect("/error");
  }
}

export default getAllRooms;
