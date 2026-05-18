import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  const navItems = [
    { icon: "⌂", label: "Home", path: "/home" },
    { icon: "⇄", label: "Translate", path: "/translate" },
    { icon: "💬", label: "Phrases", path: "/phrases" },
    { icon: "✦", label: "AI Tutor", path: "/tutor" },
    { icon: "✚", label: "Emergency", path: "/emergency" },
    { icon: "★", label: "Children", path: "/children" },
    { icon: "◈", label: "Culture", path: "/culture" },
    { icon: "ግዕዝ", label: "Ge'ez Classical", path: "/geez" },
    { icon: "⚙", label: "Settings", path: "/settings" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div
      className="flex flex-col transition-all duration-300 ease-in-out bg-[#110B02] border-r"
      style={{
        width: isCollapsed ? "58px" : "210px",
        borderRightColor: "#2E1F08",
      }}
    >
      {/* Logo Section */}
      <div className="p-4 flex items-center gap-3 border-b" style={{ borderBottomColor: "#2E1F08" }}>
        <div
          className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{
            width: "40px",
            height: "40px",
            backgroundColor: "#D4A017",
          }}
        >
          <span className="text-[#110B02] font-bold text-lg">ኢ</span>
        </div>
        {!isCollapsed && (
          <span className="text-[#D4A017] font-bold text-sm whitespace-nowrap">
            Ethiopia AI
          </span>
        )}
      </div>

      {/* Ethiopian Flag Stripe */}
      <div className="flex h-1">
        <div className="flex-1" style={{ backgroundColor: "#078930" }} />
        <div className="flex-1" style={{ backgroundColor: "#FCD116" }} />
        <div className="flex-1" style={{ backgroundColor: "#CE1126" }} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-0 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center gap-3 px-4 py-3 transition-all duration-200 border-l-4"
            style={{
              borderLeftColor: isActive(item.path) ? "#D4A017" : "transparent",
              backgroundColor: isActive(item.path) ? "#2A1A05" : "transparent",
              color: isActive(item.path) ? "#D4A017" : "#8B7355",
            }}
            title={isCollapsed ? item.label : ""}
          >
            <span className="flex-shrink-0 text-xl w-6 text-center">{item.icon}</span>
            {!isCollapsed && (
              <span className="text-sm font-medium font-sans" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <div className="p-4 border-t flex justify-center" style={{ borderTopColor: "#2E1F08" }}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded hover:bg-[#2A1A05] transition-colors"
          style={{ color: "#D4A017" }}
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </div>
  )
}
