"use client"

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
        <div className="text-white text-lg font-medium">Loading Portfolio...</div>
      </div>
    </div>
  )
}
