import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PagesPromotionSearch from './Promotion/Search/Search';

const router = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={PagesPromotionSearch} />
            </Switch>
        </Router>
    );
};

export default router;