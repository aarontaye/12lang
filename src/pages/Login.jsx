import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Mail, Lock, Phone, Chrome } from "lucide-react"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    console.log("Login attempt:", { email, password })

    setTimeout(() => {
      localStorage.setItem("user", JSON.stringify({ email, name: "Test User" }))
      navigate("/onboarding")
      setLoading(false)
    }, 500)
  }

  const handlePhoneOTP = () => {
    console.log("Phone OTP clicked")
  }

  const handleGoogle = () => {
    console.log("Google sign-in clicked")
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#080501" }}>
      {/* Ethiopian Flag Stripe */}
      <div className="flex h-1">
        <div className="flex-1" style={{ backgroundColor: "#078930" }} />
        <div className="flex-1" style={{ backgroundColor: "#FCD116" }} />
        <div className="flex-1" style={{ backgroundColor: "#CE1126" }} />
      </div>

      {/* Login Card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div
          className="w-full max-w-md rounded-lg p-8 shadow-2xl"
          style={{ backgroundColor: "#1A1105" }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: "#D4A017",
              }}
            >
              <span className="text-[#080501] font-bold text-3xl">ኢ</span>
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-center text-3xl font-bold mb-2"
            style={{ fontFamily: "Playfair Display, serif", color: "#D4A017" }}
          >
            Ethiopia Language AI
          </h1>

          {/* Subtitle */}
          <p
            className="text-center mb-8"
            style={{
              fontFamily: "DM Sans, sans-serif",
              color: "#A39B85",
              fontSize: "14px",
            }}
          >
            Sign in to continue
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            {/* Email Input */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#D4A017" }}
              >
                Email
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2" style={{ borderColor: "#2E1F08" }}>
                <Mail size={18} style={{ color: "#8B7355" }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 bg-transparent ml-2 outline-none text-sm"
                  style={{ color: "#E8D9C3" }}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "#D4A017" }}
              >
                Password
              </label>
              <div className="flex items-center border rounded-lg px-3 py-2" style={{ borderColor: "#2E1F08" }}>
                <Lock size={18} style={{ color: "#8B7355" }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="flex-1 bg-transparent ml-2 outline-none text-sm"
                  style={{ color: "#E8D9C3" }}
                  required
                />
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-lg font-semibold transition-all duration-200 mt-6"
              style={{
                background: "linear-gradient(135deg, #D4A017 0%, #B8860B 100%)",
                color: "#080501",
              }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ backgroundColor: "#2E1F08" }} />
            <span style={{ color: "#8B7355", fontSize: "12px" }}>or</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "#2E1F08" }} />
          </div>

          {/* Alternative Sign In */}
          <div className="space-y-3 mb-6">
            {/* Phone OTP Button */}
            <button
              onClick={handlePhoneOTP}
              className="w-full py-2 rounded-lg font-semibold border transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                borderColor: "#D4A017",
                color: "#D4A017",
              }}
            >
              <Phone size={18} />
              <span>Continue with Phone OTP</span>
            </button>

            {/* Google Button */}
            <button
              onClick={handleGoogle}
              className="w-full py-2 rounded-lg font-semibold border transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                borderColor: "#D4A017",
                color: "#D4A017",
              }}
            >
              <Chrome size={18} />
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm" style={{ color: "#A39B85" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#D4A017" }} className="font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
