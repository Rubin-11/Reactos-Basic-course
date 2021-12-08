import { Button, Input } from "@mui/material";
import debounce from "lodash.debounce";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getGists,
  gistsSelector,
  gistsByNameSelector,
  getGistsByName,
} from "../store/gists";

export function GistsPage() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { gistError, gistPending, gists } = useSelector(gistsSelector);
  const { gistsByName, gistByNameError, gistByNamePending } =
    useSelector(gistsByNameSelector);

  const searchDebounced = useMemo(() => {
    return debounce((query) => dispatch(getGistsByName(query)), 1000);
  }, [dispatch]);

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists());
    }
  }, [dispatch, gists]);

  useEffect(() => {
    if (search) {
      searchDebounced(search);
    }
  }, [searchDebounced, search]);

  if (gistPending) {
    return <h1>Pending ...</h1>;
  }
  if (gistError) {
    return <h1>Error</h1>;
  }

  if (gistByNamePending) {
    return <h1>Pending gistByNamePending...</h1>;
  }
  if (gistByNameError) {
    return (
      <div>
        <h1>Error gistByNameError</h1>
        <hr />
      </div>
    );
  }

  return (
    <div>
      <h1>Gists</h1>
      {gists?.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}

      <Button variant="contained" onClick={() => dispatch(getGists(1))}>
        1
      </Button>
      <Button variant="contained" onClick={() => dispatch(getGists(2))}>
        2
      </Button>
      <Button variant="contained" onClick={() => dispatch(getGists(3))}>
        3
      </Button>

      <hr />
      <h1>Search</h1>
      <Input
        autoFocus
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <hr />

      {gistsByName?.map((gist) => (
        <h2 key={gist.url}>{gist.url}</h2>
      ))}
    </div>
  );
}
