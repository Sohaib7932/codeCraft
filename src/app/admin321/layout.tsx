"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../lib/firebase"
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Database,
  BarChart3
} from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Check authentication status with Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsAuthenticated(true)
        sessionStorage.setItem("adminAuthenticated", "true")
        sessionStorage.setItem("adminLoginTime", new Date().toISOString())
        sessionStorage.setItem("adminUserId", user.uid)
        sessionStorage.setItem("adminEmail", user.email || "")
      } else {
        // User is signed out
        setIsAuthenticated(false)
        sessionStorage.removeItem("adminAuthenticated")
        sessionStorage.removeItem("adminLoginTime")
        sessionStorage.removeItem("adminUserId")
        sessionStorage.removeItem("adminEmail")
        
        if (pathname !== "/admin321") {
          router.push("/admin321")
        }
      }
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [router, pathname])

  const handleLogout = async () => {
    try {
      await signOut(auth)
      // Firebase auth state change will handle the cleanup
      router.push("/admin321")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  const navigation = [
    { name: "Dashboard", href: "/admin321/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/admin321/projects", icon: FileText },
    { name: "Case Studies", href: "/admin321/case-studies", icon: Database },
    { name: "Messages", href: "/admin321/messages", icon: MessageSquare },
    { name: "Analytics", href: "/admin321/analytics", icon: BarChart3 },
    { name: "Settings", href: "/admin321/settings", icon: Settings },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!isAuthenticated && pathname !== "/admin321") {
    return null // Will redirect in useEffect
  }

  // If on login page, don't show admin layout
  if (pathname === "/admin321") {
    return <>{children}</>
  }

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex h-full flex-col bg-slate-900">
          {/* Sidebar header */}
          <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-slate-800">
            <Link href="/admin321/dashboard" className="text-xl font-bold text-white">
              CodeCraft Admin
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Logout button */}
          <div className="p-6 border-t border-slate-800">
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: sidebarOpen ? 0 : -320 }}
        className="fixed inset-y-0 left-0 z-50 w-80 bg-slate-900 lg:hidden"
      >
        <div className="flex h-full flex-col">
          {/* Sidebar header */}
          <div className="flex h-16 shrink-0 items-center justify-between px-6 border-b border-slate-800">
            <Link href="/admin321/dashboard" className="text-xl font-bold text-white">
              CodeCraft Admin
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6">
            <ul className="space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:text-white hover:bg-slate-800"
                      }`}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Logout button */}
          <div className="p-6 border-t border-slate-800">
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-80">
        {/* Top bar */}
        <div className="flex h-16 shrink-0 items-center gap-x-4 border-b border-slate-200 bg-white px-6 shadow-sm">
          <button
            type="button"
            className="lg:hidden text-slate-600 hover:text-slate-900"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="h-6 w-px bg-slate-200 lg:hidden" />

          <div className="flex flex-1 justify-between items-center">
            <h1 className="text-xl font-semibold text-slate-900">
              {navigation.find(nav => nav.href === pathname)?.name || "Admin Panel"}
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-slate-600">
                Welcome, {sessionStorage.getItem("adminEmail")?.split("@")[0] || "Admin"}
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {(sessionStorage.getItem("adminEmail")?.charAt(0) || "A").toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="h-full">
            <div className="max-w-7xl mx-auto p-6">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
