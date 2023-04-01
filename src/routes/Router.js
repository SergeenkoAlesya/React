import { Route, Routes } from "react-router-dom";

import CounterConteiner from "../pages/Counter/containers/counterContainer";
import ConditionalRenderingContainer from "../pages/ConditionalRendering/containers/ConditionalRenderingContainer";
import FunctionalCounterConteiners from "../pages/functionalCounter/conteiners/FunctionalCounterConteiner";

import { ROUTE_NAMES } from "./routeNames";
import HomePageConteiner from "../pages/Home/containers/HomePageContainer";
import ListsContainer from "../pages/Lists/containers/ListsContainer";
import CountersManadgerContainers from "pages/CountersManadger/containers/CountersManadgerContainers";
import FormsContainers from "pages/Forms/containers/FormsContainers";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<HomePageConteiner />} />
      <Route path={ROUTE_NAMES.COUNTER} element={<CounterConteiner />} />
      <Route
        path={ROUTE_NAMES.FUNCTIONAL_COUNTER}
        element={<FunctionalCounterConteiners />}
      />
      <Route
        path={ROUTE_NAMES.COUNTERS_MANADGER}
        element={<CountersManadgerContainers />}
      />
      <Route
        path={ROUTE_NAMES.CONDITIONAL_RENDERING}
        element={<ConditionalRenderingContainer />}
      />
      <Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />} />
      <Route path={ROUTE_NAMES.FORMS} element={<FormsContainers />} />
      <Route path="*" element={<h1>404 NOT Found</h1>} />
    </Routes>
  );
};

export default Router;
