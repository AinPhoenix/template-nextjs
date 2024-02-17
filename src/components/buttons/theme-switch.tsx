"use client";

import { useIsMounted } from "@/hooks/useIsMounted";
import { MoonIcon, SunDim } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitchButton = () => {
  const mounted = useIsMounted();
  const { systemTheme, theme, setTheme } = useTheme();

  let _theme = systemTheme;
  if (theme !== "system") {
    _theme = theme as "dark" | "light";
  }

  const handleThemeToggle = () => {
    setTheme(_theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md hover:bg-secondary"
      onClick={handleThemeToggle}
    >
      {_theme === "dark" ? <SunDim /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitchButton;
