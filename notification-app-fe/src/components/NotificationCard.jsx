import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

function getChipColor(type) {
  switch (type) {
    case "Placement":
      return "success";

    case "Result":
      return "primary";

    case "Event":
      return "warning";

    default:
      return "default";
  }
}

export default function NotificationCard({ notification }) {
  return (
    <Card sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>

        <Chip
          label={notification.Type}
          color={getChipColor(notification.Type)}
          sx={{ mb: 2 }}
        />

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {notification.Timestamp}
        </Typography>

      </CardContent>
    </Card>
  );
}