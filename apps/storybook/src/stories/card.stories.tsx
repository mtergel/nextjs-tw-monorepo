import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@repo/ui/card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (props) => (
    <Card {...props} />
  ),
  name: "Card",
  args: {
    children: "Find in-depth information about Turborepo features and API.",
    title: "Docs",
    href: "https://turbo.build/repo/docs",
  },
};
