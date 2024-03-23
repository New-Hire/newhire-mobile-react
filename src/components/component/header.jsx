
export function Header() {
  return (
    <div className="border-b bg-white dark:bg-gray-950 border-gray-100/40 dark:border-gray-800/40">
      <div className="w-full max-w-8xl mx-auto px-4">
        <div className="grid gap-4 h-14 items-center text-lg font-semibold">
          <div className="flex h-14 items-center">
            <ChevronLeftIcon className="h-6 w-6" />
            <h1 className="ml-2.5">newhire</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}
