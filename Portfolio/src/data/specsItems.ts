import PC from "../assets/specs-ph/PC.jpg"
import monitor from "../assets/specs-ph/monitor.jpg"
import laptop from "../assets/specs-ph/laptop.jpg"
import keyboard from "../assets/specs-ph/keyboard.jpg"
import mouse from "../assets/specs-ph/mouse.jpg"
import camera from "../assets/specs-ph/cam&tri.jpg"
import portableSpeaker from "../assets/specs-ph/little-speaker.jpg"
import whiteboard from "../assets/specs-ph/whiteboard.jpg"
import tripod from "../assets/specs-ph/tripod.jpg"
import chair from "../assets/specs-ph/chair.jpg"
import headphones from "../assets/specs-ph/headphones.jpg"
import carrybag from "../assets/specs-ph/carry-bag.jpg"


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
  // Dedicated close-up photo shown on the item's detail page. Import it from
  // src/assets/specs-ph and assign it here; left undefined until then.
  photo: string
}

export const specsItems: SpecItem[] = [
  {
    id: "pc",
    name: "PC",
    x: 46.7,
    y: 56,
    width: 14.3,
    height: 22,
    photo: PC,
    specs: [
      { label: "CPU", value: "Ryzen 5 5600G" },
      { label: "GPU", value: "NVIDIA GTX 1060 6 GB" },
      { label: "RAM", value: "16 GB DDR4" },
      { label: "Storage", value: "SSD 150GB + HDD 1 TB" },
      { label: "OS", value: "Windows 10 LTSC" },
    ],
  },
  {
    id: "monitor",
    name: "Monitor",
    x: 34.68,
    y: 31,
    width: 17,
    height: 21,
    photo: monitor,
    specs: [
      { label: "Model", value: "ASUS TUF VG249QL3A" },
      { label: "Size", value: "24 inches" },
      { label: "Resolution", value: "Full-HD" },
      { label: "Refresh rate", value: "180hz" },
      { label: "Panel", value: "IPS" },
    ],
  },
  {
    id: "laptop",
    name: "Laptop",
    x: 23.3,
    y: 38,
    width: 16,
    height: 17,
    photo: laptop,
    specs: [
      { label: "Model", value: "ASUS Rog Strix" },
      { label: "CPU", value: "AMD Ryzen 7 6800HS with Radeon Graphics (3.20 GHz)" },
      { label: "GPU", value: "NVIDIA GeForce RTX 3050 Laptop GPU (4 GB) AMD Radeon(TM) Graphics (486 MB)" },
      { label: "RAM", value: "16GB DDR5" },
      { label: "Storage", value: "500GB" },
    ],
  },
  {
    id: "keyboard",
    name: "Keyboard",
    x: 21.5,
    y: 54,
    width: 19,
    height: 7,
    photo: keyboard,
    specs: [
      { label: "Layout", value: "TBD" },
    ],
  },
  {
    id: "mouse",
    name: "Mouse",
    x: 42,
    y: 50,
    width: 5,
    height: 5,
    photo: mouse,
    specs: [
      { label: "Model", value: "Logitech G305" },
      { label: "DPI", value: "16000" },
    ],
  },
  {
    id: "camera",
    name: "Camera",
    x: 6.3,
    y: 57,
    width: 6,
    height: 6,
    photo: camera,
    specs: [
      { label: "Model", value: "GoPro Hero 5 Black" },
      { label: "Video Resolution", value: " Up to 4K at 30 fps, 2.7K at 60 fps, and 1080p at 120 fps" },

    ],
  },
  {
    id: "portable-speaker",
    name: "Portable Speaker",
    x: 57.5,
    y: 41,
    width: 4,
    height: 9,
    photo: portableSpeaker,
    specs: [
      { label: "Model", value: "UE BOOM 2" },
    ],
  },
  {
    id: "whiteboard",
    name: "Whiteboard",
    x: 67,
    y: 8.5,
    width: 30,
    height: 34.5,
    photo: whiteboard,
    specs: [
      { label: "TaskManager", value: "All you need" },
      { label: "Emptied for photos", value: "." },
    ],
  },
  {
    id: "tripod",
    name: "Tripod",
    x: 2.5,
    y: 62,
    width: 17,
    height: 34,
    photo: tripod,
    specs: [
      { label: "Brand", value: "Gadnic" },
    ],
  },
  {
    id: "chair",
    name: "Chair",
    x: 32,
    y: 70,
    width: 16,
    height: 30,
    photo: chair,
    specs: [
      { label: "Brand", value: "Unknown" },
      { label: "Comfort", value: "10/10" },
    ],
  },
  {
    id: "headphones",
    name: "Headphones",
    x: 49.3,
    y: 48,
    width: 7,
    height: 6,
    photo: headphones,
    specs: [
      { label: "Model", value: "Sony WH-1000XM3" },
    ],
  },
    {
    id: "carry-bag",
    name: "Carry Bag",
    x: 67,
    y: 80,
    width: 9,
    height: 19,
    photo: carrybag,
    specs: [
      { label: "Brand", value: "Cane Corso" },
      { label: "Extras", value: "Pocket for water bottle" },
    ],
  },
]
