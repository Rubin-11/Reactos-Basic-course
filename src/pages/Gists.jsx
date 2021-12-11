import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { useDispatch, useSelector } from "react-redux";
import { getGists, gistSelector, searchGistsByUserName } from "../store/gists";

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

const searchGistsByUserNameDebounsed = debounce((query, dispatch) => {
  dispatch(searchGistsByUserName(query ?? "bogdanq"));
}, 500);

export function Gists() {
  const [value, setValue] = useState("");

  const {
    gists,
    gistsLoading,

    gistsSearch,
    gistsLoadingSearch,
  } = useSelector(gistSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  useEffect(() => {
    searchGistsByUserNameDebounsed(value, dispatch);
  }, [value, dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h1>Gists</h1>
        {buttons.map((button, index) => (
          <button onClick={() => dispatch(getGists(button))} key={index}>
            {button}
          </button>
        ))}
        {gistsLoading ? (
          <h1>Loading</h1>
        ) : (
          gists.map((gist, index) => <p key={index}>{gist.url}</p>)
        )}
      </div>

      <div>
        <h1>Search Gists</h1>

        <input
          placeholder="enter name..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {gistsLoadingSearch ? (
          <h1>Loading</h1>
        ) : (
          gistsSearch.map((gist, index) => <p key={index}>{gist.url}</p>)
        )}
      </div>
    </div>
  );
}
