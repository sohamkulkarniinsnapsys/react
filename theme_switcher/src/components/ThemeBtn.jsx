import React from "react";
import useTheme from "../contexts/theme";

export default function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const onChange = (e) => {
    const checked = e.currentTarget.checked;
    if (checked) darkTheme();
    else lightTheme();
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <div className="relative inline-block w-12 h-6">
        {/* Hidden checkbox that controls the toggle */}
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={onChange}
          checked={themeMode === "dark"}
        />

        {/* Track */}
        <div className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-primary transition-colors"></div>

        {/* Knob */}
        <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6"></div>
      </div>

      <span className="text-text text-sm">
        {themeMode === "dark" ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}
