import { useState, useEffect } from "react";
import { getNotifications } from "../api/notifications";
import { getTopNotifications } from "../utils/priority";

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await getNotifications();

      const topNotifications = getTopNotifications(data);

      setNotifications(topNotifications);
      setError("");
    } catch (err) {
      setError(err.message || "Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    notifications,
    loading,
    error,
    refreshNotifications: fetchData,
  };
}