import { Log } from "./logger";

const BASE_URL = "http://4.224.186.213/evaluation-service";

export async function getNotifications() {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${BASE_URL}/notifications`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Unable to fetch notifications");
    }

    const data = await response.json();

    await Log(
      "frontend",
      "info",
      "api",
      "Notifications fetched successfully"
    );

    return data;
  } catch (error) {
    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );

    throw error;
  }
}