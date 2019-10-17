import React, { useState } from "react";
import axios from "axios";
import ListNews from "./list";
import "bulma/css/bulma.css";
import "../components/main.css";

const Search = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  function ApiCall(e) {
    axios
      .get("http://content.guardianapis.com/search?api-key=test&q=" + search+"&show-tags=keyword")
      .then(function(response) {
        setNews(response.data.response.results);
        setError(false)
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  const callDefault = () => {
    axios
      .get(
        "http://content.guardianapis.com/search?api-key=test&show-fields=thumbnail,headline&show-tags=keyword&page=1&page-size=10"
      )
      .then(function(response) {
        setNews(response.data.response.results);
        setError(false);
      })
      .catch(function(error) {
        setNews([]);
        setError(true);
      });
  };

  const setKey = (_key) =>{
    setSearch(_key);
    ApiCall(_key)
  }
  if (news.length === 0 && search.trim() === "" && error) callDefault();
  return (
    <div>
      <div className="column is-half is-offset-one-quarter ">
        <div className=" field has-addons has-text-centered ">
          <div className="field  ">
            <div className="control ">
              <input
                className="input is-success is-rounded width1"
                type="text"
                placeholder=""
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>
          <a
            className="button is-primary is-rounded"
            onClick={(e) => {
              ApiCall();
            }}>
            Search
          </a>
        </div>
      </div>
      <h1 className='align'>{search==="" ? "" : "Search :" + search }</h1>
      <ListNews news={news} setKey={setKey} />
    </div>
  );
};

export default Search;
