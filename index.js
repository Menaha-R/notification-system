const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function fetchNotifications() {

  try {

   
    const notifications = [
      {
        ID: "1",
        Type: "Placement",
        Message: "TCS Corporation hiring",
        Timestamp: "2026-04-22 17:51:18"
      },
      {
        ID: "2",
        Type: "Result",
        Message: "mid-sem",
        Timestamp: "2026-04-22 17:51:30"
      },
      {
        ID: "3",
        Type: "Event",
        Message: "farewell",
        Timestamp: "2026-04-22 17:51:06"
      },
      {
        ID: "4",
        Type: "Placement",
        Message: "Infosys hiring",
        Timestamp: "2026-04-22 17:49:18"
      },
      {
        ID: "5",
        Type: "Result",
        Message: "project review",
        Timestamp: "2026-04-22 17:48:30"
      }
    ];

   
    const updatedNotifications = notifications.map((notification) => {

      const timestamp = new Date(
        notification.Timestamp
      ).getTime();

      const score =
        weights[notification.Type] * 10000000000 +
        timestamp;

      return {
        ...notification,
        score,
      };
    });

    
    updatedNotifications.sort(
      (a, b) => b.score - a.score
    );

    
    const top10 = updatedNotifications.slice(0, 10);

    console.log("\nTOP 10 PRIORITY NOTIFICATIONS\n");

    top10.forEach((item, index) => {

      console.log(`${index + 1}. ${item.Type}`);

      console.log(`Message : ${item.Message}`);

      console.log(`Time    : ${item.Timestamp}`);

      console.log("-----------------------------------");
    });

  } catch (error) {

    console.log(error.message);
  }
}

fetchNotifications();