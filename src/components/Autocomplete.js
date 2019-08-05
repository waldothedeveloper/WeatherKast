import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useStyles } from "../css/searchCSS";

// Single index search return from Algolia
// Some rendering logic is being handled here
export const Autocomplete = ({ currentRefinement, hits, setQueryHits }) => {
  const classes = useStyles();

  if (currentRefinement === "") {
    return null;
  }

  if (hits === "undefined" || hits.length === 0) {
    return (
      <List className={classes.listsError}>
        <ListItem>
          Is this a city?...I think you're lost in outer space
        </ListItem>
      </List>
    );
  } else {
    return (
      <List className={classes.lists}>
        {hits.map(hit => (
          <ListItem
            button
            onClick={e => {
              setQueryHits(hit);
              e.preventDefault();
            }}
            key={hit.objectID}
          >
            {hit.name}
          </ListItem>
        ))}
      </List>
    );
  }
};
