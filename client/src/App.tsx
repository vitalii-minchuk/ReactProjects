import Header from "./components/Header";
import Route from "./components/Routing/Route";
import { Routes } from "./hooks/useRouting";
import Cart from "./Views/Cart";
import Edit from "./Views/Edit";
import Main from "./Views/Main";

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
    </>
  );
}

export default App;
