const workoutData = [
    {
      id: 1,
      type: "run",
      date: "2024-08-01",
      startTime: "09:00:00",
      endTime: "10:23:18",
      avgHR: 155,
      totalCal: 350,
      totalMiles: 2.95,
      data: [
        { interval: 1, distance: 1, time: "00:07:12" },
        { interval: 2, distance: 1, time: "00:07:56" },
        { interval: 3, distance: 0.95, time: "00:08:06" }
      ]
    },
    {
      id: 2,
      type: "strength",
      date: "2024-08-02",
      startTime: "10:00:00",
      endTime: "11:04:01",
      avgHR: 138,
      totalCal: 375,
      totalWeight: 6720,
      data: [
        {
          id: 1,
          name: 'Sit-Up',
          description: 'tba',
          sets: [
            { id: 1, weight: 0, reps: 20 },
            { id: 2, weight: 0, reps: 20 }
          ]
        },
        {
          id: 2,
          name: 'Dumbbell Bench Press',
          description: 'tba',
          sets: [
            { id: 1, weight: 135, reps: 20 },
            { id: 2, weight: 185, reps: 12 },
            { id: 3, weight: 225, reps: 8 }
          ]
        }
      ]
    }
  ];
  
  export default workoutData;
  