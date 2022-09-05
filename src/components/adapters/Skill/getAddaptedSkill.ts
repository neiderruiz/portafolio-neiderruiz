import { Skill } from "../../../models/skill";

export const getAddaptedSkill = (skill: Skill) => {
  const formatterSkill: Skill = {
    description: skill.description,
    name: skill.name,
    type: skill.type,
    id: skill.id,
    image: skill.image
  };

  return formatterSkill;
};
