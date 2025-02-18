"use client";

import { useRouter } from "next/navigation";

export default function FeedPage() {
  const router = useRouter();

  // Hardcoded YouTube videos
  const videos = [
    { id: 1, title: "First Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { id: 2, title: "Second Video", url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ" }
  ];

  return (
    <div style={{ padding: "20px", display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
      {videos.map((video) => (
        <div 
          key={video.id} 
          style={{ cursor: "pointer", border: "1px solid #ccc", padding: "10px", borderRadius: "8px", background: "#222", color: "white", width: "300px" }}
          onClick={() => router.push(`/video?url=${encodeURIComponent(video.url)}`)}
        >
          <img 
            src={`https://img.youtube.com/vi/${video.url.split("v=")[1]}/0.jpg`} 
            alt={video.title} 
            style={{ width: "100%", borderRadius: "8px" }}
          />
          <h3 style={{ textAlign: "center", marginTop: "10px" }}>{video.title}</h3>
        </div>
      ))}
    </div>
  );
}
