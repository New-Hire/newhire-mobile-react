import Link from "next/link";

export function Footer() {
  return (
    <div className="border-t shrink-0">
      <nav className="flex h-14 items-center justify-center">
        <Link
          className="flex-1 flex flex-col items-center justify-center text-sm"
          href="/user"
        >
          <HomeIcon className="w-6 h-6" />
          <span className="sr-only">User</span>
        </Link>
        <Link
          className="flex-1 flex flex-col items-center justify-center text-sm"
          href="/company"
        >
          <SearchIcon className="w-6 h-6" />
          <span className="sr-only">Company</span>
        </Link>
        <Link
          className="flex-1 flex flex-col items-center justify-center text-sm"
          href="/company"
        >
          <BellIcon className="w-6 h-6" />
          <span className="sr-only">Notifications</span>
        </Link>
        <Link
          className="flex-1 flex flex-col items-center justify-center text-sm"
          href="#"
        >
          <BookmarkIcon className="w-6 h-6" />
          <span className="sr-only">Bookmarks</span>
        </Link>
      </nav>
    </div>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function BookmarkIcon(props) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
}

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
