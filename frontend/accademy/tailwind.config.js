export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'neon-blue': '#00f0ff',
        'neon-purple': '#8a4fff',
        'cyber-bg': '#0a0a1a',
        'cyber-card': '#1a1a2e',
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px #00f0ff, 0 0 10px #8a4fff" },
          "100%": { boxShadow: "0 0 20px #00f0ff, 0 0 30px #8a4fff" },
        },
      },
    },
  },
  plugins: [],
};
