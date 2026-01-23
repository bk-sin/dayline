export interface DayEntry {
  id: string; // Unique ID (UUID)
  date: string; // ISO String "2023-10-27"
  weight: number;
  // Habits
  didWorkout: boolean;
  workedOnProject: boolean;
  ateHealthy: boolean;
  drankAlcohol: boolean;
}
