// src/App.tsx

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import DoctorsPage from "./pages/DoctorsPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import BookAppointmentPage from "./pages/BookAppointmentPage";

// Uncomment these once you migrate them
// import DoctorsPage from "@/pages/DoctorsPage";
// import TreatmentsPage from "@/pages/TreatmentsPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />


        <Route path="/blogs" element={<BlogsPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/gallery" element={<GalleryPage />} />

        <Route
          path="/book-appointment"
          element={<BookAppointmentPage />}
        />

        
         <Route path="/doctors" element={<DoctorsPage />} /> 
         <Route path="/treatments" element={<TreatmentsPage />} /> 

        <Route
          path="*"
          element={
            <main className="flex min-h-screen items-center justify-center">
              <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            </main>
          }
        />
      </Routes>
    </QueryClientProvider>
  );
}