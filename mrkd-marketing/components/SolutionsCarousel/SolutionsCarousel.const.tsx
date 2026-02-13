import { Laptop, Smartphone, Monitor, Settings, Cpu } from "lucide-react"

export const SOLUTIONS = [
  {
    icon: Laptop,
    title: "Web Development",
    description:
      "Responsive, high-performance websites built for seamless user experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Intuitive mobile apps for iOS and Android, optimized for engagement.",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description:
      "User-centered designs that are simple, attractive, and easy to navigate.",
  },
  {
    icon: Settings,
    title: "Software & Platform Development",
    description:
      "Scalable, secure software and platforms tailored to your needs.",
  },
  {
    icon: Cpu,
    title: "Prototyping",
    description:
      "Interactive prototypes to visualize and test ideas quickly.",
  },
] as const
