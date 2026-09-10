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
  // Key used to look up the translated label (and, when present, value) in
  // translations.ts under more.specs.items[id]. Raw values (model numbers,
  // brand names) are kept in `value` since they're the same in every language.
  labelKey: string
  value: string
  valueKey?: string
}

export type SpecItem = {
  id: string
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
    x: 46.7,
    y: 56,
    width: 14.3,
    height: 22,
    photo: PC,
    specs: [
      { labelKey: "cpu", value: "Ryzen 5 5600G" },
      { labelKey: "gpu", value: "NVIDIA GTX 1060 6 GB" },
      { labelKey: "ram", value: "16 GB DDR4" },
      { labelKey: "storage", value: "SSD 150GB + HDD 1 TB" },
      { labelKey: "os", value: "Windows 10 LTSC" },
    ],
  },
  {
    id: "monitor",
    x: 34.68,
    y: 31,
    width: 17,
    height: 21,
    photo: monitor,
    specs: [
      { labelKey: "model", value: "ASUS TUF VG249QL3A" },
      { labelKey: "size", value: "24 inches", valueKey: "monitorSize" },
      { labelKey: "resolution", value: "Full-HD" },
      { labelKey: "refreshRate", value: "180hz" },
      { labelKey: "panel", value: "IPS" },
    ],
  },
  {
    id: "laptop",
    x: 23.3,
    y: 38,
    width: 16,
    height: 17,
    photo: laptop,
    specs: [
      { labelKey: "model", value: "ASUS Rog Strix" },
      { labelKey: "cpu", value: "AMD Ryzen 7 6800HS with Radeon Graphics (3.20 GHz)" },
      { labelKey: "gpu", value: "NVIDIA GeForce RTX 3050 Laptop GPU (4 GB) AMD Radeon(TM) Graphics (486 MB)" },
      { labelKey: "ram", value: "16GB DDR5" },
      { labelKey: "storage", value: "500GB" },
    ],
  },
  {
    id: "keyboard",
    x: 21.5,
    y: 54,
    width: 19,
    height: 7,
    photo: keyboard,
    specs: [
      { labelKey: "layout", value: "TBD", valueKey: "keyboardLayout" },
    ],
  },
  {
    id: "mouse",
    x: 42,
    y: 50,
    width: 5,
    height: 5,
    photo: mouse,
    specs: [
      { labelKey: "model", value: "Logitech G305" },
      { labelKey: "dpi", value: "16000" },
    ],
  },
  {
    id: "camera",
    x: 6.3,
    y: 57,
    width: 6,
    height: 6,
    photo: camera,
    specs: [
      { labelKey: "model", value: "GoPro Hero 5 Black" },
      {
        labelKey: "videoResolution",
        value: "Up to 4K at 30 fps, 2.7K at 60 fps, and 1080p at 120 fps",
        valueKey: "cameraVideoResolution",
      },
    ],
  },
  {
    id: "portable-speaker",
    x: 57.5,
    y: 41,
    width: 4,
    height: 9,
    photo: portableSpeaker,
    specs: [
      { labelKey: "model", value: "UE BOOM 2" },
    ],
  },
  {
    id: "whiteboard",
    x: 67,
    y: 8.5,
    width: 30,
    height: 34.5,
    photo: whiteboard,
    specs: [
      { labelKey: "taskManager", value: "All you need", valueKey: "whiteboardTaskManager" },
      { labelKey: "emptiedForPhotos", value: "." },
    ],
  },
  {
    id: "tripod",
    x: 2.5,
    y: 62,
    width: 17,
    height: 34,
    photo: tripod,
    specs: [
      { labelKey: "brand", value: "Gadnic" },
    ],
  },
  {
    id: "chair",
    x: 32,
    y: 70,
    width: 16,
    height: 30,
    photo: chair,
    specs: [
      { labelKey: "brand", value: "Unknown", valueKey: "chairBrand" },
      { labelKey: "comfort", value: "10/10" },
    ],
  },
  {
    id: "headphones",
    x: 49.3,
    y: 48,
    width: 7,
    height: 6,
    photo: headphones,
    specs: [
      { labelKey: "model", value: "Sony WH-1000XM3" },
    ],
  },
    {
    id: "carry-bag",
    x: 67,
    y: 80,
    width: 9,
    height: 19,
    photo: carrybag,
    specs: [
      { labelKey: "brand", value: "Cane Corso" },
      { labelKey: "extras", value: "Pocket for water bottle", valueKey: "carryBagExtras" },
    ],
  },
]
