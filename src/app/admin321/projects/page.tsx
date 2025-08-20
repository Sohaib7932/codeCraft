"use client"

import { motion } from "framer-motion"
import { Plus, Edit, Trash2, ExternalLink } from "lucide-react"
import projectsData from "../../../data/projects.json"

export default function AdminProjects() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Projects Management</h1>
          <p className="text-slate-600 mt-1">Manage your portfolio projects</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {project.category}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm flex items-center justify-center space-x-1 transition-colors">
                  <Edit className="w-3 h-3" />
                  <span>Edit</span>
                </button>
                <button className="flex-1 bg-red-100 hover:bg-red-200 text-red-700 px-3 py-2 rounded-lg text-sm flex items-center justify-center space-x-1 transition-colors">
                  <Trash2 className="w-3 h-3" />
                  <span>Delete</span>
                </button>
                <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-lg text-sm transition-colors">
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
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
          This page is ready for Firebase integration. You can connect it to Firestore to manage projects in real-time.
        </p>
      </motion.div>
    </div>
  )
}
