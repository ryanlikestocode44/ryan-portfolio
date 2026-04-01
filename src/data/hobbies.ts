import type { HobbyItem } from "@/types";
import gamingImg from "@/assets/img/hobbies/gaming.webp";
import codingImg from "@/assets/img/hobbies/coding.webp";
import workoutImg from "@/assets/img/hobbies/workout.webp";

export const hobbiesData: HobbyItem[] = [
  {
    title: "Gaming",
    image: gamingImg,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Coding",
    image: codingImg,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Workout",
    image: workoutImg,
    color: "from-pink-500 to-rose-500",
  },
];