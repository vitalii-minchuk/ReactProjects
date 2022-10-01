import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddNewWord from "./pages/AddNewWord";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new" element={<AddNewWord />} />
        <Route path="test" element={<Quiz />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
