import React, { useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";
import "../components/main.css";



const ListNews = (props) => {
  if (props.news.length !== 0) {
    return (
      <div className="">
        {props.news.map((e) => {
          return (
            <div
              className=" column ">
              {console.log(e)}
              <div className="notification is-primary">
                <a className="title is-4 has-text-left" href={e.webUrl} target="_blank" style={{textDecoration:"none"}}>
                  {e.webTitle}
                </a>
                <a className="subtitle is-6">{e.sectionName}</a>
                <br />

                {e.tags.map((v) => {
                  return (
                    <span
                      className="tag is-black is-mobile-flex"
                      onClick={(e) => {
                        props.setKey(v.webTitle);
                      }}>
                      {v.webTitle}
                    </span>
                  );
                })}
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>No News on this topic</div>;
  }
};

export default ListNews;
