import { useState, useEffect } from "react";
import { getNotifications } from "../api/notifications";
// If your folder is actually "apis", change "../api/" to "../apis/"
import { getTopNotifications } from "../utils/priority";
import { authenticate } from "../api/auth";
export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
await authenticate();

const data = await getNotifications();

console.log("Notifications from API:", data);

setNotifications(getTopNotifications(data));      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const total = notifications.length;

  const totalPages = Math.max(
    1,
    Math.ceil(total / ITEMS_PER_PAGE)
  );

  return {
    notifications,
    total,
    totalPages,
    loading,
    error,
  };
}