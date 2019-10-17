import React, { useState } from "react";
import axios from "axios";
import "bulma/css/bulma.css";


const NewsView = () => {
    return(
        <div>
          

                        <div ClassName="card">
                     <div ClassName="card-image">
                    <figure ClassName="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                   </div>
                   <div ClassName="card-content">
                    <div ClassName="media">
                    <div ClassName="media-left">
                    
                    </div>
                    <div ClassName="media-content">
                        <p ClassName="title is-4">John Smith</p>
                        <p ClassName="subtitle is-6">@johnsmith</p>
                    </div>
                    </div>

                    <div ClassName="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    
                    
                        </div>
                        </div>
                        </div>
        </div>
    )
    
}


export default NewsView;
