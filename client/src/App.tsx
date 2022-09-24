import Header from "./components/Header";
import Route from "./components/Routing/Route";
import { Routes } from "./hooks/useRouting";
import Cart from "./Views/Cart";
import Create from "./Views/Create";
import Edit from "./Views/Edit";
import Main from "./Views/Main";
import NotFound from "./Views/NotFound";

function App() {
  return (
    <>
      <Header />
      <Route path={Routes.HOME}>
        <Main />
      </Route>
      <Route path={Routes.CART}>
        <Cart />
      </Route>
      <Route path={Routes.EDIT}>
        <Edit />
      </Route>
      <Route path={Routes.CREATE}>
        <Create />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </>
  );
}

export default App;
