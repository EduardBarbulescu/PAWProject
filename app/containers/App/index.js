/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import Login from '../Login/Loadable';
import Register from '../Register/Loadable';
import Training from '../Training/Loadable';
import Meal from '../Meal/Loadable';
import About from '../About/Loadable';
import Abs from '../Abs/Loadable';
import Legs from '../Legs/Loadable';
import Arms from '../Arms/Loadable';
import Chest from '../Chest/Loadable';
import Traps from '../Traps/Loadable';
import Back from '../Back/Loadable';
import Shoulders from '../Shoulders/Loadable';
import BulkinDiet from '../Bulkin diet/Loadable';
import DietForFatLoss from '../DietForFatLoss/Loadable';
import PowerLiftingDiet from '../PowerliftingDiet/Loadable';
import WeightLossDiet from '../WeightLossDiet/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/training" component={Training} />
        <Route exact path="/abs" component={Abs} />
        <Route exact path="/arms" component={Arms} />
        <Route exact path="/back" component={Back} />
        <Route exact path="/shoulders" component={Shoulders} />
        <Route exact path="/legs" component={Legs} />
        <Route exact path="/chest" component={Chest} />
        <Route exact path="/traps" component={Traps} />
        <Route exact path="/meal" component={Meal} />
        <Route exact path="/bulkindiet" component={BulkinDiet} />
        <Route exact path="/dietforfatloss" component={DietForFatLoss} />
        <Route exact path="/powerliftingdiet" component={PowerLiftingDiet} />
        <Route exact path="/weightlossdiet" component={WeightLossDiet} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
