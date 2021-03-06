import * as React from "react";
import { render } from "react-dom";

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "./app.scss";
import { Colors, Classes } from "@blueprintjs/core";

import { Navigation } from "./Navigation";
import { BpSuggest } from "./BpSuggest";

const divStyles = {};

const App = () => (
  <div style={divStyles}>
    <BpSuggest />
  </div>
);

render(<App />, document.getElementById("root"));
