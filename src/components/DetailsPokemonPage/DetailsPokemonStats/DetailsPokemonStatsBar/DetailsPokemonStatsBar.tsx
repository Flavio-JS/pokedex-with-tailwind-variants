import { DetailsPokemonStatsBarTypes } from "./DetailsPokemonStatsBar.types";
import { detailsPokemonStatsBarStyles } from "./DetailsPokemonStatsBar.styles";

export const DetailsPokemonStatsBar = ({
  stats,
  types,
}: DetailsPokemonStatsBarTypes) => {
  const styles = detailsPokemonStatsBarStyles({ typeColor: types[0] });
  return (
    <div
      className="flex flex-col items-center gap-[16px] w-full"
    >
      <h1 className={styles.detailsPokemonStatsBarTitle()}>Base Stats</h1>
      <div className={styles.detailsPokemonStatsBarWrapper()}>
        <div
          className="flex flex-col justify-between"
        >
          <span className={styles.detailsPokemonStatsBarTitle()}>HP</span>
          <span className={styles.detailsPokemonStatsBarTitle()}>ATK</span>
          <span className={styles.detailsPokemonStatsBarTitle()}>DEF</span>
          <span className={styles.detailsPokemonStatsBarTitle()}>SATK</span>
          <span className={styles.detailsPokemonStatsBarTitle()}>SDEF</span>
          <span className={styles.detailsPokemonStatsBarTitle()}>SPD</span>
        </div>
        <div
          className="border-l h-[96px] w-[1px] border-gray-300"
        />
        <div
          className="flex flex-col justify-between"
        >
          <span className="text-xs">{stats.hp}</span>
          <span className="text-xs">{stats.atk}</span>
          <span className="text-xs">{stats.def}</span>
          <span className="text-xs">{stats.satk}</span>
          <span className="text-xs">{stats.sdef}</span>
          <span className="text-xs">{stats.spd}</span>
        </div>
        <div
          className="flex flex-col justify-around w-full"
        >
          <div className="flex">
            <div
              className={styles.detailsPokemonStatsBarRow()}
              style={{ minWidth: `${(stats.hp * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull()} />
          </div>

          <div className="flex">
            <div
              className={styles.detailsPokemonStatsBarRow()}
              style={{ minWidth: `${(stats.atk * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull()} />
          </div>

          <div className="flex">
            <div
              className={styles.detailsPokemonStatsBarRow()}
              style={{ minWidth: `${(stats.def * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull()} />
          </div>

          <div className="flex">
            <div
              className={styles.detailsPokemonStatsBarRow()}
              style={{ minWidth: `${(stats.satk * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull()} />
          </div>

          <div className="flex">
            <div
              className={styles.detailsPokemonStatsBarRow()}
              style={{ minWidth: `${(stats.sdef * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull()} />
          </div>

          <div className="flex">
            <div
              className={styles.detailsPokemonStatsBarRow()}
              style={{ minWidth: `${(stats.spd * 100) / 255}%` }}
            />
            <div className={styles.detailsPokemonStatsBarRowFull()} />
          </div>
        </div>
      </div>
    </div>
  );
};
