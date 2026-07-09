import type { Meta, StoryObj } from "@storybook/react";
import { Skills } from "./index";

const meta = { title: "Widgets/Skills", component: Skills } satisfies Meta<typeof Skills>;
export default meta;

export const Default: StoryObj<typeof Skills> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Skills> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
