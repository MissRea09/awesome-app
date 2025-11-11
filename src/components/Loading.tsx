export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="text-center">
        <div className="inline-block relative w-20 h-20">
          <div className="absolute border-4 border-gray-200 rounded-full w-20 h-20"></div>
          <div className="absolute border-4 border-blue-600 border-t-transparent rounded-full w-20 h-20 animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
