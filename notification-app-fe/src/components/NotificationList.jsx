import { Stack } from "@mui/material";
import { NotificationCard } from "./NotificationCard";

export function NotificationList({ notifications }) {
  if (!notifications || notifications.length === 0) {
    return null;
  }

  return (
    <Stack spacing={2}>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </Stack>
  );
}