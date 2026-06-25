import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { NotificationsPage } from "./pages/NotificationsPage";
import { PriorityNotificationsPage } from "./pages/PriorityNotificationsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<NotificationsPage />} />
        <Route
          path="/priority"
          element={<PriorityNotificationsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}