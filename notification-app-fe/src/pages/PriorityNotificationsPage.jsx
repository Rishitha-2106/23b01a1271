import { Box, Typography, Alert, CircularProgress } from "@mui/material";

import { NotificationList } from "../components/NotificationList";
import { useNotifications } from "../hooks/useNotifications";

export function PriorityNotificationsPage() {
const { notifications, loading, error } = useNotifications(true);

  return (
    <Box
      sx={{
        maxWidth: 720,
        mx: "auto",
        px: 2,
        py: 4,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        ⭐ Priority Notifications
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" py={6}>
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      {!loading &&
        !error &&
        notifications.length === 0 && (
          <Alert severity="info">
            No Priority Notifications Found
          </Alert>
        )}

      {!loading &&
        !error &&
        notifications.length > 0 && (
          <NotificationList
            notifications={notifications}
          />
        )}
    </Box>
  );
}