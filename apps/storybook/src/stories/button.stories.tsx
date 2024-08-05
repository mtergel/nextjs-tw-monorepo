import { Button } from "@repo/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (props) => <Button {...props} />,
  name: "Button",
  args: {
    children: "Button",
  },
};
