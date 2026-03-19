import { useState } from "react";
import { Link } from "react-router";
import { Play, Plus, Star, Clock, Heart } from "lucide-react";
import type { ContentItem } from "../data/mockData";

interface ContentCardProps {
  item: ContentItem;
  size?: "sm" | "md" | "lg";
  showProgress?: boolean;
  progress?: number;
  orientation?: "portrait" | "landscape";
}

const badgeStyles: Record<string, { bg: string; text: string }> = {
  "4K": { bg: "#F7941D", text: "#000" },
  HD: { bg: "#3498DB", text: "#fff" },
  NEW: { bg: "#27AE60", text: "#fff" },
  LIVE: { bg: "#E74C3C", text: "#fff" },
};

export function ContentCard({
  item,
  size = "md",
  showProgress = false,
  progress = 0,
  orientation = "portrait",
}: ContentCardProps) {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);

  const detailPath =
    item.type === "movie"
      ? `/films/${item.id}`
      : item.type === "series"
      ? `/series/${item.id}`
      : `/live/${item.id}`;

  const heightClass =
    orientation === "portrait"
      ? size === "sm"
        ? "h-36"
        : size === "lg"
        ? "h-80"
        : "h-56"
      : size === "sm"
      ? "h-24"
      : size === "lg"
      ? "h-52"
      : "h-36";

  return (
    <Link
      to={detailPath}
      className="group relative block rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
      style={{
        width:
          orientation === "portrait"
            ? size === "sm"
              ? "96px"
              : size === "lg"
              ? "200px"
              : "160px"
            : size === "sm"
            ? "180px"
            : size === "lg"
            ? "300px"
            : "240px",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.6)" : "0 4px 12px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className={`${heightClass} relative`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0) 100%)",
            opacity: hovered ? 1 : 0.6,
            transition: "opacity 0.25s ease",
          }}
        />

        {/* Badge */}
        {item.badge && (
          <div
            className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-xs font-bold"
            style={{
              background: badgeStyles[item.badge]?.bg || "#F7941D",
              color: badgeStyles[item.badge]?.text || "#000",
              fontSize: "9px",
              letterSpacing: "0.05em",
            }}
          >
            {item.badge}
          </div>
        )}

        {/* Like button */}
        <button
          className="absolute top-2 right-2 p-1 rounded-full transition-all duration-200"
          style={{
            background: "rgba(10,10,10,0.7)",
            opacity: hovered ? 1 : 0,
          }}
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
        >
          <Heart
            size={12}
            fill={liked ? "#F7941D" : "none"}
            stroke={liked ? "#F7941D" : "#fff"}
          />
        </button>

        {/* Hover play button */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.25s ease" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(247,148,29,0.9)" }}
          >
            <Play size={16} fill="#fff" stroke="none" className="ml-0.5" />
          </div>
        </div>

        {/* Progress bar */}
        {showProgress && progress > 0 && (
          <div
            className="absolute bottom-0 left-0 right-0 h-0.5"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <div
              className="h-full"
              style={{ width: `${progress}%`, background: "#F7941D" }}
            />
          </div>
        )}
      </div>

      {/* Info */}
      <div
        className="absolute bottom-0 left-0 right-0 p-2"
        style={{ opacity: hovered ? 1 : 0.8, transition: "opacity 0.25s ease" }}
      >
        <p className="text-white text-xs font-semibold truncate">{item.title}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Star size={9} fill="#F7941D" stroke="none" />
          <span style={{ color: "#B3B3B3", fontSize: "10px" }}>{item.rating}</span>
          <span style={{ color: "#555", fontSize: "10px" }}>•</span>
          <span style={{ color: "#B3B3B3", fontSize: "10px" }}>{item.year}</span>
        </div>
      </div>
    </Link>
  );
}

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  seeAllPath?: string;
  orientation?: "portrait" | "landscape";
  size?: "sm" | "md" | "lg";
  showProgress?: boolean;
  progressMap?: Record<string, number>;
}

export function ContentRow({
  title,
  items,
  seeAllPath,
  orientation = "portrait",
  size = "md",
  showProgress = false,
  progressMap = {},
}: ContentRowProps) {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-10">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        {seeAllPath && (
          <Link
            to={seeAllPath}
            className="text-sm font-medium transition-colors duration-200 hover:text-white"
            style={{ color: "#F7941D" }}
          >
            Voir tout →
          </Link>
        )}
      </div>
      <div
        className="flex gap-3 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-10 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <ContentCard
            key={item.id}
            item={item}
            size={size}
            orientation={orientation}
            showProgress={showProgress}
            progress={progressMap[item.id] || 0}
          />
        ))}
      </div>
    </section>
  );
}
