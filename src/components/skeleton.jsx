export function SkeletonText() {
  return (
    <div className="w-full animate-pulse sm:w-96 ">
      <div className="mb-4 h-4 w-full rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-4 h-2.5 w-1/2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
}
export function SkeletonButton() {
  return (
    <div role="status" className=" mt-8 max-w-sm animate-pulse">
      <div className="absolute bottom-4 right-4 h-8 w-28 rounded-full bg-lochmara-500 px-4 py-2 font-semibold text-white hover:bg-lochmara-600 active:bg-lochmara-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700"></div>
    </div>
  );
}
