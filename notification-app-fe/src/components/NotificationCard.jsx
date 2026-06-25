import {
  Card,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";

export function NotificationCard({ notification }) {
  const getColor = () => {
    switch (notification.Type) {
      case "Placement":
        return "success";

      case "Result":
        return "primary";

      case "Event":
        return "warning";

      default:
        return "default";
    }
  };

  return (
    <Card>
      <CardContent>

        <Chip
          label={notification.Type}
          color={getColor()}
          sx={{ mb: 1 }}
        />

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {notification.Timestamp}
        </Typography>

      </CardContent>
    </Card>
  );
}