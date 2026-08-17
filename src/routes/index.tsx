import { createFileRoute } from "@tanstack/react-router";
import App from "../App.jsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Student Management Portal | Dashboard, Directory & Tasks" },
      {
        name: "description",
        content:
          "A beginner React student portal with a dashboard, profile, student directory, registration form and task manager saved in localStorage.",
      },
      { property: "og:title", content: "Student Management Portal" },
      {
        property: "og:description",
        content:
          "Beginner-friendly React app combining a dashboard, profile, student directory, registration and task manager.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
