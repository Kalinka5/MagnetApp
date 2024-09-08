import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from "./home";
import WhoWeAre from "./whoWeAre";
import Clients from "./clients";
import Candidates from "./candidates";
import SearchJob from "./searchJob";
import ContactUs from "./contactUs";
import CookiePolicy from "./CookiePolicy";
import PravicyPolicy from "./PravicyPolicy";
import RetentionPolicy from "./RetentionPolicy";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="who-we-are" element={<WhoWeAre />} />
            <Route path="clients" element={<Clients />} />
            <Route path="candidates" element={<Candidates />} />
            <Route path="search-job" element={<SearchJob />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="pravicy-policy" element={<PravicyPolicy />} />
            <Route path="retention-policy" element={<RetentionPolicy />} />
            <Route path="*" element={<Navigate to="" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
