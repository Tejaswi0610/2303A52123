# Stage 1

## Priority Logic

Notifications are prioritized using the following weights:

* Placement = 3
* Result = 2
* Event = 1

Notifications are sorted by:

1. Priority Weight (Descending)
2. Timestamp (Descending)

The top 10 notifications are selected after sorting.

## Algorithm

1. Fetch notifications from the Notification API.
2. Assign a priority weight based on notification type.
3. Sort notifications by weight and timestamp.
4. Select the first 10 notifications.
5. Display the resulting notifications.

## Handling Continuous Incoming Notifications

If notifications continuously arrive, a Priority Queue (Max Heap) can be used.

Steps:

1. Insert every incoming notification into the heap.
2. Compare priorities using weight and timestamp.
3. Maintain only the top 10 highest-priority notifications.
4. Remove lower-priority notifications when necessary.

This reduces processing overhead compared to repeatedly sorting the entire dataset.

## Time Complexity

Current Approach:

* Sorting: O(n log n)

Optimized Approach:

* Heap Insertion: O(log n)
* Retrieval of Top 10: O(10 log n)

## Output

The system successfully generates the top 10 priority notifications based on notification type and recency.
