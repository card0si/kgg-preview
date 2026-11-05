import {
  Bot,
  Boxes,
  Briefcase,
  ChartColumn,
  Clock,
  Compass,
  Cpu,
  Factory,
  GitMerge,
  HeartHandshake,
  Landmark,
  LineChart,
  Megaphone,
  Palette,
  PenLine,
  Route,
  Search,
  Shield,
  ShieldCheck,
  Store,
  Tags,
  Unplug,
  Users,
  UtensilsCrossed,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const icons = {
  bot: Bot,
  boxes: Boxes,
  briefcase: Briefcase,
  chart: ChartColumn,
  clock: Clock,
  compass: Compass,
  cpu: Cpu,
  factory: Factory,
  merge: GitMerge,
  heart: HeartHandshake,
  landmark: Landmark,
  line: LineChart,
  megaphone: Megaphone,
  palette: Palette,
  pen: PenLine,
  route: Route,
  search: Search,
  shield: Shield,
  "shield-check": ShieldCheck,
  store: Store,
  tags: Tags,
  unplug: Unplug,
  users: Users,
  utensils: UtensilsCrossed,
  wallet: Wallet,
  workflow: Workflow,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export function Icon({
  name,
  size = 18,
}: {
  name: IconName;
  size?: number;
}) {
  const Cmp = icons[name];
  return <Cmp aria-hidden size={size} strokeWidth={1.5} />;
}
