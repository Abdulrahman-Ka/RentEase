import { createAdminClient } from "@/src/config/appwrite";
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
    return houses;
    // revalidatePath("/", "layout");
  } catch (error) {
    console.log("Failed to get rooms", error);
    redirect("/error");
  }
}

export default getAllRooms;
