import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Business } from "./components/Business";
import { Layout } from "./components/Layout";
import { Personal } from "./components/Personal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Personal />} />
          <Route path="personal" element={<Personal />} />
          <Route path="business" element={<Business />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
