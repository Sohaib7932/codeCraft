"use client"

import { motion } from "framer-motion"
import { Clock, User, Reply } from "lucide-react"

export default function AdminMessages() {
  const messages = [
    {
      id: 1,
      name: "John Smith",
      email: "john@techcorp.com",
      subject: "Project Inquiry - E-commerce Platform",
      message: "Hello, we're interested in developing a new e-commerce platform for our business. Could we schedule a consultation?",
      timestamp: "2024-01-15T10:30:00Z",
      status: "unread"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah@healthcare.com",
      subject: "Healthcare App Development",
      message: "We need a mobile app for patient management. What's your experience in healthcare solutions?",
      timestamp: "2024-01-14T15:45:00Z",
      status: "read"
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike@startup.io",
      subject: "MVP Development Quote",
      message: "Looking for a development partner to build our MVP. Can you provide a rough estimate?",
      timestamp: "2024-01-13T09:20:00Z",
      status: "replied"
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "unread": return "bg-red-100 text-red-700"
      case "read": return "bg-yellow-100 text-yellow-700"
      case "replied": return "bg-green-100 text-green-700"
      default: return "bg-slate-100 text-slate-700"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Messages</h1>
          <p className="text-slate-600 mt-1">Manage contact form submissions and inquiries</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Mark All Read
          </button>
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow ${
              message.status === "unread" ? "border-l-4 border-l-blue-500" : ""
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{message.name}</h3>
                  <p className="text-sm text-slate-600">{message.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status)}`}>
                  {message.status}
                </span>
                <div className="flex items-center text-xs text-slate-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {new Date(message.timestamp).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-medium text-slate-900 mb-2">{message.subject}</h4>
              <p className="text-slate-700 text-sm leading-relaxed">{message.message}</p>
            </div>

            <div className="flex space-x-2">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm flex items-center space-x-1 transition-colors">
                <Reply className="w-3 h-3" />
                <span>Reply</span>
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm transition-colors">
                Mark as Read
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm transition-colors">
                Archive
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Firebase Integration Notice */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-orange-50 border border-orange-200 rounded-xl p-6"
      >
        <h3 className="text-lg font-semibold text-orange-900 mb-2">🔥 Firebase Integration Ready</h3>
        <p className="text-orange-700">
          Connect this page to Firebase to receive and manage real-time contact form submissions from your website.
        </p>
      </motion.div>
    </div>
  )
}
