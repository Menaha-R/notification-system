# Stage 1

## Priority Logic

Notifications are prioritized based on:

1. Type Weight
   - Placement = Highest
   - Result = Medium
   - Event = Lowest

2. Recency
   - Latest notifications get higher priority.

Final score is calculated using:

score = weight + timestamp

## Maintaining Top 10

Whenever new notifications arrive:

1. Fetch notifications
2. Calculate scores
3. Sort by score descending
4. Keep only top 10 notifications

## Technologies Used

- JavaScript
- Node.js

## Logging Middleware

Logging includes:

- Request logs
- Error logs
- Timestamp logs