import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Onboarding from "./pages/Onboarding"
import Home from "./pages/Home"
import Translate from "./pages/Translate"
import Phrases from "./pages/Phrases"
import Tutor from "./pages/Tutor"
import Emergency from "./pages/Emergency"
import Children from "./pages/Children"
import Culture from "./pages/Culture"
import GeezClassical from "./pages/GeezClassical"
import Settings from "./pages/Settings"

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user")
  return user ? children : <Navigate to="/login" replace />
}

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default function App() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  if (!isReady) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/onboarding" element={<Onboarding />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Home />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/translate"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Translate />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/phrases"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Phrases />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/tutor"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Tutor />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/emergency"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Emergency />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/children"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Children />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/culture"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Culture />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/geez"
          element={
            <ProtectedRoute>
              <MainLayout>
                <GeezClassical />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Settings />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  )
}
