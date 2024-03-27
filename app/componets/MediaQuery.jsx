import { document } from 'postcss';
import React from 'react'
import ReactDOM from "react-dom";
import Media from 'react-media'

export default function MediaQuery() {
  return (
    <div className="App">
        <media query="(min-width: 600px)">
            {(matches) => {
                return matches ? 'Hello' : "world";
            }}
            
        </media>
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App /> , rootElement);
