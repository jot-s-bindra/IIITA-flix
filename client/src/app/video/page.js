"use client";

import { useSearchParams } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";

export default function VideoPage() {
  const searchParams = useSearchParams();
  const videoUrl = searchParams.get("url") || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Default video

  return (
    <div>
      <VideoPlayer videoUrl={videoUrl} />
    </div>
  );
}
