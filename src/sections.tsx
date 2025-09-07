import { Ghost, Gift, Home, Lock, Mountain, Utensils } from "lucide-react";
import Cabin from "./assets/amazing-views-1.jpg";
import Friendsgiving from "./assets/friendsgiving.jpg";
import Photo from "./assets/IMG_7513.jpg";
import GertrudesNose from "./assets/gertrudes_nose.jpeg";
import WatkinsGlen2 from "./assets/watkins_glen_2.jpeg";
import Gifts from "./assets/gifts.jpeg";
import XmasDinner from "./assets/christmas_dinner.jpeg";
import Bnb from "./assets/bnb3.jpeg";
import Bnb2 from "./assets/bnb2.jpeg";
import ThanksgivingDinner from "./assets/dinner.jpeg";
import ThanksgivingDinner2 from "./assets/dinner2.jpeg";
import Halloween from "./assets/halloween.jpeg";
import Skeletor from "./assets/skeletor.jpeg";
import EscapeRoom from "./assets/escape_room.jpeg";
import EscapeRoom2 from "./assets/escape_room2.jpeg";

interface Section {
  id: string;
  icon?: React.ComponentType<{ className?: string; size: number }>;
  title: string;
  titleGradient?: string;
  subtitle?: string;
  bgImage: string;
  content?: string;
  gradient: string;
  textColor: string;
  images?: string[];
}

export const sections: Section[] = [
  {
    id: "section-1",
    title: "Trip Proposal with Expensive Friends 2025",
    bgImage: "",
    subtitle:
      "where every adventure costs some money 💸 and a little bit of sanity 🤪",
    content: Photo,
    gradient: "from-black via-slate-900 to-gray-800",
    // gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    textColor: "text-white",
  },
  {
    id: "section-2",
    icon: Mountain,
    title: "Fall Foliage Hike",
    titleGradient: "from-green-900 via-emerald-900 to-green-800",
    subtitle: "Nature's Golden Hour",
    bgImage:
      "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDhubjJiMmJtcGV6MW0zNWV6cHl5ZzU2NjdycnE2a3c1NnlyZnY1MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4TTqqym8oj0Q0/giphy.gif",
    content:
      "Minnewaska State Park or Watkins Glen State Park. Think golden leaves, crisp air, and that perfect photo op where we all pretend we're not out of breath.",
    gradient: "from-amber-600 via-orange-500 to-red-600",
    // gradient: 'from-blue-400 via-cyan-500 to-teal-500',
    textColor: "text-white",
    images: [GertrudesNose, WatkinsGlen2],
  },
  {
    id: "section-3",
    icon: Lock,
    title: "Escape Room",
    titleGradient: "from-blue-400 via-cyan-500 to-teal-500",
    subtitle: "Team Challenges",
    bgImage:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmM3OTdubHhwczRoMTNkeDA2c3RmYXFmdWJ0Zm9uOTQybGF4cTRqeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zxzr2pp6qU64g/giphy.gif",

    content: "Time to test how dumb we are, collectively! 😂",
    gradient: "from-slate-200 via-gray-500 to-slate-700",
    textColor: "text-white",
    images: [EscapeRoom, EscapeRoom2],
  },
  {
    id: "section-4",
    icon: Home,
    title: "Cabin Staycation",
    titleGradient: "from-amber-600 to-orange-700",
    bgImage: Cabin,
    subtitle: "Cozy Vibes & Good Times",
    content:
      "Picture this: rustic cabin, overlooking a nice view, while we wait for SUNRISE holding a hot cup of coffee. But seriously, can we please decide on where to stay and set a date already?",
    gradient: "from-amber-400 to-grey-500",
    textColor: "text-gray-900",
    images: [Bnb, Bnb2],
  },
  {
    id: "section-5",
    icon: Utensils,
    title: "Friendsgiving",
    titleGradient: "from-red-500 to-red-500",
    bgImage: Friendsgiving,
    subtitle: "Gratitude & Gluttony",
    content:
      "Time to give thanks as we're nearing the end of 2025. One dish per person. Location TBD.",
    gradient: "from-amber-600 to-red-200",
    // gradient: "from-purple-400 via-pink-500 to-red-500",
    textColor: "text-white",
    images: [ThanksgivingDinner, ThanksgivingDinner2],
  },
  {
    id: "section-6",
    icon: Ghost,
    title: "Halloween",
    titleGradient: "from-purple-600 to-orange-500",
    bgImage:
      "https://bestanimations.com/media/pumpkin-gifs/931588595animated-pumpkin-gif-halloween-decoration.gif.pagespeed.ce.ezrvSGnRrM.gif",
    subtitle: "Spooks & Spectacular Costumes",
    content:
      "Let's dress up and go drinking in NYC!! Maybe go to a haunted house? 🎃👻",
    gradient: "from-black via-gray-400 to-black",
    textColor: "text-white",
    images: [Halloween, Skeletor],
  },
  {
    id: "section-7",
    icon: Gift,
    title: "Christmas",
    titleGradient: "from-green-400 to-green-600",
    bgImage:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW5hcjFpeTdocnU4MDA2Y3c1Zm9oYXh0YmZ1djh1aXVqMDRqbW9wYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nFBaiqny3Jll2JOOOW/giphy.gif",
    subtitle: "Holiday Magic & Secret Santa",
    content:
      "2025 Finale! Secret Santa and Christmas dinner. We can use elfster.com to list out things we want for secret santa/gift giving.",
    gradient: "from-red-700 to-green-300",
    textColor: "text-white",
    images: [Gifts, XmasDinner],
  },
];
