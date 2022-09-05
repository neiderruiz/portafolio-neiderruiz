import { Image } from "./image";

export type Skill = {
    id: number;
    name: string;
    image?: Image;
    type: string;
    description: string;
}