import NotificationCard from "./NotificationCard";
import { Typography } from "@mui/material";

export default function NotificationList({ notifications }) {

  if (notifications.length === 0) {
    return (
      <Typography align="center">
        No Notifications Found
      </Typography>
    );
  }

  return (
    <>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </>
  );
}