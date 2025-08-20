"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  MessageSquare,
  TrendingUp,
  Eye,
  Calendar,
  Activity,
  Database,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats] = useState({
    totalProjects: 8,
    totalCaseStudies: 8,
    totalMessages: 12,
    monthlyViews: 2547,
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: "project",
      message: "New project inquiry from TechCorp",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "case_study",
      message: "Healthcare case study updated",
      time: "4 hours ago",
    },
    {
      id: 3,
      type: "message",
      message: "Contact form submission received",
      time: "6 hours ago",
    },
    {
      id: 4,
      type: "view",
      message: "Website traffic spike detected",
      time: "8 hours ago",
    },
  ]);

  interface StatCardProps {
    title: string;
    value: string | number;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    trend?: number;
  }

  const StatCard = ({ title, value, icon: Icon, color, trend }: StatCardProps) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600">{title}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{value}</p>
          {trend && (
            <p className="text-sm text-green-600 flex items-center mt-2">
              <TrendingUp className="w-4 h-4 mr-1" />+{trend}% from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
        <p className="text-blue-100">
          Here&apos;s what&apos;s happening with your CodeCraft website today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Projects"
          value={stats.totalProjects}
          icon={FileText}
          color="bg-blue-500"
          trend={12}
        />
        <StatCard
          title="Case Studies"
          value={stats.totalCaseStudies}
          icon={Database}
          color="bg-green-500"
          trend={8}
        />
        <StatCard
          title="Messages"
          value={stats.totalMessages}
          icon={MessageSquare}
          color="bg-yellow-500"
          trend={15}
        />
        <StatCard
          title="Monthly Views"
          value={stats.monthlyViews.toLocaleString()}
          icon={Eye}
          color="bg-purple-500"
          trend={23}
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Recent Activity
            </h2>
            <Activity className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-slate-900">{activity.message}</p>
                  <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
            View all activity
          </button>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Quick Actions
            </h2>
            <Calendar className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-slate-900">
                  Add New Project
                </span>
              </div>
              <span className="text-slate-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-colors">
              <div className="flex items-center space-x-3">
                <Database className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-slate-900">
                  Create Case Study
                </span>
              </div>
              <span className="text-slate-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-slate-900">
                  View Messages
                </span>
              </div>
              <span className="text-slate-400">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-yellow-300 hover:bg-yellow-50 transition-colors">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-medium text-slate-900">
                  Analytics Report
                </span>
              </div>
              <span className="text-slate-400">→</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Firebase Integration Ready Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200 rounded-xl p-6"
      >
        <div className="flex items-start space-x-4">
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Firebase Integration Ready
            </h3>
            <p className="text-slate-700 mb-4">
              This admin dashboard is prepared for Firebase integration. You can
              easily connect it to Firebase for real-time data management,
              authentication, and database operations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">
                Firestore Ready
              </span>
              <span className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
                Auth Integration
              </span>
              <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                Real-time Updates
              </span>
              <span className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full">
                Storage Ready
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
