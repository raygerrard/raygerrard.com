import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import Contact from "./pages/Contact";
import * as React from "react";
import { Navigation } from "./components/Navigation";

export const App = () => (
    <Router>
        <div className="min-h-screen flex p-4 flex-col h-full overflow-y-auto overflow-x-hidden">
            <Navigation />
            <div className="flex flex-1 sm:items-center justify-center">
                <Switch>
                    <Route
                        render={({ location }) => (
                            <AnimatePresence exitBeforeEnter initial={false}>
                                <Switch location={location} key={location.pathname}>
                                    <Route exact path="/" component={About} />
                                    <Route exact path="/contact" component={Contact} />
                                </Switch>
                            </AnimatePresence>
                        )}
                    />
                </Switch>
            </div>
        </div>
    </Router>
);