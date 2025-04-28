// src/components/SkeletonResults.jsx
import React from "react";

const SkeletonResults = () => {
  return (
    <div className="w-full animate-pulse">
      {/* User profile skeleton */}
      <div className="flex items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-slate-700 mr-6"></div>
        <div className="space-y-3">
          <div className="h-4 bg-slate-700 rounded w-48"></div>
          <div className="h-4 bg-slate-700 rounded w-64"></div>
          <div className="h-4 bg-slate-700 rounded w-36"></div>
        </div>
      </div>

      {/* Tab indicators skeleton */}
      <div className="flex border-b border-slate-700 mb-6">
        <div className="h-10 bg-slate-700 rounded w-24 mr-4"></div>
        <div className="h-10 bg-slate-700 rounded w-24"></div>
      </div>

      {/* Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="h-5 bg-slate-700 rounded w-32 mb-4"></div>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-slate-700"></div>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <div className="h-5 bg-slate-700 rounded w-48 mb-4"></div>
          <div className="space-y-4">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      {/* List items skeleton */}
      <div className="bg-slate-800 p-6 rounded-lg">
        <div className="h-5 bg-slate-700 rounded w-24 mb-6"></div>
        <div className="space-y-6">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 h-16 bg-slate-700 rounded"></div>
            <div className="col-span-4 space-y-2">
              <div className="h-4 bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1 h-16 bg-slate-700 rounded"></div>
            <div className="col-span-4 space-y-2">
              <div className="h-4 bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-700 rounded w-3/4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonResults;