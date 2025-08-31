import type { Config } from "tailwindcss";
export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { primary: "#2962FF", secondary: "#00C853" }, borderRadius: { "2xl": "1.5rem" } } },
  plugins: []
} satisfies Config;
