import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-3/4 sm:pt-2 pt-4 border-t-2 border-gray-400 dark:border-stone-700 mt-5 flex sm:flex-row flex-col justify-between items-center px-16 space-y-3 sm:mb-0 mb-10">
      <div className="text-black dark:text-white">
        <p className="text-sm sm:text-base">
          © {new Date().getFullYear()} Liuco. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
