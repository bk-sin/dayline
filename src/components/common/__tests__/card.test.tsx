import { render } from "@testing-library/react-native";
import { Dumbbell } from "lucide-react-native";
import { Card } from "@/components/common";
import { Typography } from "@/components/common/ui";

it("renders Card consistently", () => {
  const { toJSON } = render(
    <Card icon={Dumbbell}>
      <Typography variant="titleMedium">Exercise</Typography>
    </Card>,
  );

  expect(toJSON()).toMatchSnapshot();
});
