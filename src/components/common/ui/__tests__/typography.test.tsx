import { render } from "@testing-library/react-native";
import { Typography } from "@/components/common/ui";

describe("Typography", () => {
  it("renders titleLarge variant consistently", () => {
    const { toJSON } = render(
      <Typography variant="titleLarge">Title</Typography>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders body variant with muted color consistently", () => {
    const { toJSON } = render(
      <Typography variant="body" color="muted">
        Body text
      </Typography>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders caption variant consistently", () => {
    const { toJSON } = render(
      <Typography variant="caption">Caption</Typography>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
