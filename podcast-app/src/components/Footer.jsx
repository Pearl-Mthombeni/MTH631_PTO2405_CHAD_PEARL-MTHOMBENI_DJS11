import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleResetHistory = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset your entire listening history? This will remove all your progress and completed marks. This action cannot be undone."
    );
    if (confirmed) {
      // Remove all keys that start with "progress-"
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("progress-")) {
          localStorage.removeItem(key);
        }
      });
      // Remove the completed episodes data
      localStorage.removeItem("completedEpisodes");
      navigate("/");
    }
  };

  return (
    <footer className="bg-blue-950 text-white text-center py-4 mt-10 border-gray-700">
      <button
        onClick={handleResetHistory}
        className="hover:underline hover:text-gray-300 transition"
      >
        ⚠️ Reset History
      </button>
      <p className="text-sm">&copy; 2023 Podcast App. All rights reserved.</p>
    </footer>
  );
}