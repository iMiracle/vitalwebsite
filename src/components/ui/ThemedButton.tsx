"use client";

import { BsMoonStars, BsSun } from "react-icons/bs";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemedButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <BsSun className="text-lg" />;
  }

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <BsMoonStars className="text-lg" /> : <BsSun className="text-lg"/>}
    </div>
  );
}
