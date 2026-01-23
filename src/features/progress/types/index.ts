export type RangeKey = "7d" | "30d" | "90d";

export type WeeklyRow = {
  day: string;
  weight: string;
  trend: "↑" | "↓" | "=";
};
