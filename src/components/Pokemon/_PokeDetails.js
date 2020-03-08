import React from "react";
import ContainerRow from "../Helpers/ContainerRow";
import PropItem from "./_PropItem";

const PokeDetails = ({
  abilities,
  base_experience,
  forms,
  game_indices,
  height,
  held_items,
  id,
  is_default,
  location_area_encounters,
  moves,
  name,
  order,
  species,
  sprites,
  stats,
  types,
  weight
}) => {
  return (
    <div className="Pokemon-Details">
      <ContainerRow fluid={true}>
        <div className="col-12 col-md-6 offset-md-3 mb-5">
          <h2>{name}</h2>
          <h3>Images</h3>
          <div className="row Pokemon-Details-Images">
            {Object.keys(sprites).map((sprite, key) => (
              <div className="col-4 mb-4 text-center">
                <div className="card" key={key}>
                  <img
                    src={sprites[sprite]}
                    className="card-img-top"
                    alt={sprite}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{sprite.replace(/_/g, " ")}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3>Stats</h3>
          <ul className="list-group text-capitalize">
            {stats &&
              stats.map((stat, key) => (
                <PropItem
                  key={key}
                  Name={stat.stat.name}
                  Value={stat.base_stat}
                />
              ))}
          </ul>
          <h3>Abilities</h3>
          <ul className="list-group text-capitalize">
            {abilities &&
              abilities.map((ability, key) => (
                <PropItem
                  key={key}
                  Name={ability.ability.name}
                  Value={ability.slot}
                />
              ))}
          </ul>
          <h3>Movements</h3>
          <ul className="list-group text-capitalize">
            {moves &&
              moves.map((move, key) => (
                <PropItem key={key} Name={move.move.name} />
              ))}
          </ul>
        </div>
      </ContainerRow>
    </div>
  );
};

export default PokeDetails;
