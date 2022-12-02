import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Porfile from "./components/Porfile";
import CreatApprenticeship from "./components/CreatApprenticeship";
import ViewDashboard from "./components/ViewDashboard";
import ViewApprenticeships from "./components/ViewApprenticeships";
import CreatInterShips from "./components/CreatInterShips";
import ViewInterShips from "./components/ViewInterShips";
import ViewJop from "./components/ViewJop";
import CreatJop from "./components/CreatJop";
import ViewSetting from "./components/ViewSetting";

function App() {
  return (
    <div className=" relative">
      <Router>
        <Routes>
          <Route path="/Profile" element={<Porfile />}>
            <Route path="Dashboard" element={<ViewDashboard />} />
            <Route path="InterShips" element={<ViewInterShips />} />
            <Route path="Jop" element={<ViewJop />} />
            <Route path="Setting" element={<ViewSetting />} />
            <Route path="Apprenticeships" element={<ViewApprenticeships />} />
          </Route>
          <Route
            path="/CreatApprenticeship"
            element={<CreatApprenticeship />}
          />
          <Route path="/CreatInterShips" element={<CreatInterShips />} />
          <Route path="/CreatJop" element={<CreatJop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
