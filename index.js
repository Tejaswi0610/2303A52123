const notifications = require("./notifications.json");
const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

const topNotifications = notifications.notifications
  .sort((a, b) => {
    const weightDiff = weights[b.Type] - weights[a.Type];

    if (weightDiff !== 0) {
      return weightDiff;
    }

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  })
  .slice(0, 10);

console.log("Top 10 Priority Notifications:\n");

topNotifications.forEach((item, index) => {
  console.log(`${index + 1}.`);
  console.log(`Type: ${item.Type}`);
  console.log(`Message: ${item.Message}`);
  console.log(`Time: ${item.Timestamp}`);
  console.log("---------------------------");
});