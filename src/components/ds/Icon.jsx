import {
  ArrowLeft,
  Baby,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Clock,
  CookingPot,
  Download,
  GitMerge,
  HandCoins,
  HandHeart,
  Heart,
  HeartHandshake,
  House,
  Info,
  Layers,
  Minus,
  Plus,
  Shirt,
  ShoppingBag,
  TriangleAlert,
} from 'lucide-react';

const ICONS = {
  ArrowLeft,
  Baby,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Clock,
  CookingPot,
  Download,
  GitMerge,
  HandCoins,
  HandHeart,
  Heart,
  HeartHandshake,
  House,
  Info,
  Layers,
  Minus,
  Plus,
  Shirt,
  ShoppingBag,
  TriangleAlert,
};

export default function Icon({ n, s = 22, color = 'currentColor', style = {} }) {
  const Lucide = ICONS[n];
  if (!Lucide) return null;
  return (
    <span style={{ display: 'inline-flex', ...style }}>
      <Lucide size={s} color={color} strokeWidth={1.75} />
    </span>
  );
}
