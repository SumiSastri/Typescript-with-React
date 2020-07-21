import React, { Fragment, useContext } from "react";
import { Link } from "@reach/router";

import { Store } from "../src/store/store";

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "dashed 3px black",
          backgroundColor: "blanchedAlmond",
          fontFamily: "Caveat",
        }}
      >
        <h1>Rick & Morty episode picker</h1>
        <h4>Pick your fave show</h4>
      </header>
      <nav
        style={{
          margin: "5px",
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          backgroundColor: "blanchedAlmond",
          fontFamily: "Caveat",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/my-favourites">
          My Favourites Currently at {state.favourites.length}
        </Link>
      </nav>
      {props.children}
    </Fragment>
  );
}
