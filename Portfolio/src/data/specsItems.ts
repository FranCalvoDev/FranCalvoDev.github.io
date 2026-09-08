export type SpecEntry = {
  label: string
  value: string
}

export type SpecItem = {
  id: string
  name: string
  // Position and size as a percentage of the background image, so hotspots
  // stay aligned regardless of the rendered size.
  x: number
  y: number
  width: number
  height: number
  specs: SpecEntry[]
}

export const specsItems: SpecItem[] = [
  {
    id: "pc",
    name: "PC",
    x: 46,
    y: 40,
    width: 14,
    height: 30,
    specs: [
      { label: "CPU", value: "TBD" },
      { label: "GPU", value: "TBD" },
      { label: "RAM", value: "TBD" },
      { label: "Storage", value: "TBD" },
    ],
  },
  {
    id: "monitor",
    name: "Monitor",
    x: 30,
    y: 15,
    width: 20,
    height: 20,
    specs: [
      { label: "Size", value: "TBD" },
      { label: "Resolution", value: "TBD" },
      { label: "Refresh rate", value: "TBD" },
      { label: "Panel", value: "TBD" },
    ],
  },
  {
    id: "laptop",
    name: "Laptop",
    x: 62,
    y: 42,
    width: 16,
    height: 14,
    specs: [
      { label: "Model", value: "TBD" },
      { label: "CPU", value: "TBD" },
      { label: "RAM", value: "TBD" },
      { label: "Storage", value: "TBD" },
    ],
  },
  {
    id: "keyboard",
    name: "Keyboard",
    x: 32,
    y: 58,
    width: 16,
    height: 8,
    specs: [
      { label: "Layout", value: "TBD" },
      { label: "Switches", value: "TBD" },
      { label: "Connection", value: "TBD" },
    ],
  },
  {
    id: "mouse",
    name: "Mouse",
    x: 50,
    y: 60,
    width: 6,
    height: 8,
    specs: [
      { label: "DPI", value: "TBD" },
      { label: "Connection", value: "TBD" },
      { label: "Weight", value: "TBD" },
    ],
  },
  {
    id: "camera",
    name: "Camera",
    x: 40,
    y: 8,
    width: 6,
    height: 6,
    specs: [
      { label: "Resolution", value: "TBD" },
      { label: "FPS", value: "TBD" },
      { label: "Connection", value: "TBD" },
    ],
  },
  {
    id: "speakers",
    name: "Speakers",
    x: 20,
    y: 20,
    width: 8,
    height: 12,
    specs: [
      { label: "Type", value: "TBD" },
      { label: "Power", value: "TBD" },
      { label: "Connection", value: "TBD" },
    ],
  },
  {
    id: "whiteboard",
    name: "Whiteboard",
    x: 5,
    y: 5,
    width: 20,
    height: 25,
    specs: [
      { label: "Size", value: "TBD" },
      { label: "Type", value: "TBD" },
    ],
  },
  {
    id: "desk",
    name: "Desk",
    x: 10,
    y: 70,
    width: 70,
    height: 20,
    specs: [
      { label: "Material", value: "TBD" },
      { label: "Size", value: "TBD" },
      { label: "Height", value: "TBD" },
    ],
  },
  {
    id: "chair",
    name: "Chair",
    x: 78,
    y: 60,
    width: 16,
    height: 30,
    specs: [
      { label: "Model", value: "TBD" },
      { label: "Type", value: "TBD" },
    ],
  },
]
