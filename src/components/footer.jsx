import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-0 bg-white w-full dark:bg-gray-800 py-4 dark:text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} LokerIn</p>
      </div>
    </footer>
  );
}

export default Footer;
