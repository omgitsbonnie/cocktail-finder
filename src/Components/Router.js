import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import App from "../App"
import SingleCocktail from "./SingleCocktail"

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:id" component={SingleCocktail} />
        </Switch>
    </BrowserRouter>
);

export default Router;