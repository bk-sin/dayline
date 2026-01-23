import { render } from "@testing-library/react-native";
import { Home } from "lucide-react-native";
import { Button } from "@/components/common/ui";

describe("Button", () => {
  it("renders primary button consistently", () => {
    const { toJSON } = render(<Button variant="primary" title="Primary" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders secondary button consistently", () => {
    const { toJSON } = render(<Button variant="secondary" title="Secondary" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders outline button consistently", () => {
    const { toJSON } = render(<Button variant="outline" title="Outline" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders ghost button consistently", () => {
    const { toJSON } = render(<Button variant="ghost" title="Ghost" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders button with icon consistently", () => {
    const { toJSON } = render(
      <Button variant="primary" title="With Icon" icon={<Home size={20} />} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders loading button consistently", () => {
    const { toJSON } = render(<Button title="Loading" isLoading />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders disabled button consistently", () => {
    const { toJSON } = render(<Button title="Disabled" disabled />);
    expect(toJSON()).toMatchSnapshot();
  });
});
