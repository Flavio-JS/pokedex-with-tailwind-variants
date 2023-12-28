import { Icon } from "@/components/Icon/Icon";
import { DetailsPokemonPhysicalStatsTypes } from "./DetailsPokemonPhysicalStats.types";

export const DetailsPokemonPhysicalStats = ({
  abilities,
  height,
  weight,
}: DetailsPokemonPhysicalStatsTypes) => {
  return (
    <div className="flex justify-around w-full">
      <div className="flex flex-col items-center justify-between py-[2px]">
        <div className="flex gap-[8px] items-center text-[10px]">
          <Icon iconName="WeightIcon" />
          {weight / 10} kg
        </div>
        <span className="text-[8px] text-gray-600">Weight</span>
      </div>

      <div className="border-l h-[61px] w-[1px] border-gray-300" />
      <div className="flex flex-col items-center justify-between py-[2px]">
        <div className="flex gap-[8px] items-center text-[10px]">
          <Icon iconName="RulerIcon" />
          {height / 10} m
        </div>
        <span className="text-[8px] text-gray-600">Height</span>
      </div>

      <div className="border-l h-[61px] w-[1px] border-gray-300" />
      <div className="flex flex-col items-center justify-between py-[2px]">
        <div className="flex flex-col items-center text-[10px]">
          {abilities.map((abilitie, i) => (
            <span key={`${abilitie + i}`}>{abilitie}</span>
          ))}
        </div>
        <span className="text-[8px] text-gray-600">Moves</span>
      </div>
    </div>
  );
};
