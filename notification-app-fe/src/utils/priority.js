// Priority weights
const PRIORITY = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

/**
 * Sort notifications by:
 * 1. Priority (Placement > Result > Event)
 * 2. Latest timestamp first
 */
export function sortNotifications(notifications = []) {
  return [...notifications].sort((a, b) => {
    const priorityA = PRIORITY[a.Type] || 0;
    const priorityB = PRIORITY[b.Type] || 0;

    if (priorityA !== priorityB) {
      return priorityB - priorityA;
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });
}

/**
 * Get top N notifications
 */
export function getTopNotifications(notifications = [], limit = 10) {
  return sortNotifications(notifications).slice(0, limit);
}

/**
 * Get priority weight
 */
export function getPriority(type) {
  return PRIORITY[type] || 0;
}