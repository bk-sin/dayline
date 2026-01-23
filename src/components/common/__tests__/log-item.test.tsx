import { render } from "@testing-library/react-native";
import { Dumbbell } from "lucide-react-native";
import { LogItem } from "@/components/common";

describe("LogItem", () => {
  it("renders LogItem with toggle consistently", () => {
    const { toJSON } = render(
      <LogItem
        icon={Dumbbell}
        title="Exercise"
        toggle
        toggleValue={true}
        onToggleChange={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders LogItem with input consistently", () => {
    const { toJSON } = render(
      <LogItem
        icon={Dumbbell}
        title="Weight"
        input
        inputValue="75"
        inputChange={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders inactive LogItem consistently", () => {
    const { toJSON } = render(
      <LogItem
        icon={Dumbbell}
        title="Exercise"
        toggle
        toggleValue={false}
        onToggleChange={() => {}}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
