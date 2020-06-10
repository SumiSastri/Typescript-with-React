import React, { Fragment, useEffect, useContext } from "react";

import { Store } from "./store";
import { IEpisode } from "./interfaces"

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
    console.log (data)
    const dataJSON = await data.json();
    console.log(dataJSON)
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes,
    });
  };

  return (
      <Fragment>
        <h1>Rick & Morty episode picker</h1>
        <h4>Pick your fave show</h4>
      <section>
        {state.episodes.map((episode: IEpisode) => {
         {console.log(state.episodes)}
          return (
            <div key={episode.id}>
            <img src={episode.image.medium}/>
            <h5>{episode.name}</h5>
          <h6>Season{episode.season} Episode{episode.number}</h6>
            </div>
          )
        })}
      </section>
      </Fragment>
  );
}
