import React, { Fragment, useEffect, useContext } from "react";

import { Store } from "./store";
import { IEpisode, IAction } from "./interfaces";


export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
    // uncomment log - checks whether data is flowing from the API to the front end
    // console.log(state)
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    console.log(data);
    const dataJSON = await data.json();
    console.log(dataJSON);
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFave = (episode: IEpisode): IAction =>
    dispatch({
      type: "ADD_FAVE",
      payload: episode,
    });
console.log(state)
  return (
    <Fragment>
      <h1>Rick & Morty episode picker</h1>
      <h4>
        Pick your fave show
      </h4>
      <section>
        {state.episodes.map((episode: IEpisode): IEpisode => {
          return (
            <div key={episode.id}>
              <img src={episode.image.medium} />
              <h5>{episode.name}</h5>
              <button type="button" onClick={() => toggleFave(episode)}>
            Click to pick
          </button> 
              <h6>
                Season{episode.season} Episode{episode.number}
              </h6>
            </div>
          );
        })}
      </section>
    </Fragment>
  );
}
