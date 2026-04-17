const EVENT_CATEGORY_BY_FOLDER = {
  activations: "Activations",
  airport: "Airport",
  bilingual: "Bilingual",
  birthday: "Birthday",
  conference: "Conference",
  coordination: "Coordination",
  dowry: "Dowry",
  hospitality: "Hospitality",
  planning: "Planning",
  ushering: "Ushering",
  waiting: "Waiting",
  other: "Other",
} as const;

const EVENT_CATEGORY_ORDER: (keyof typeof EVENT_CATEGORY_BY_FOLDER)[] = [
  "airport",
  "ushering",
  "conference",
  "coordination",
  "activations",
  "hospitality",
  "planning",
  "waiting",
  "bilingual",
  "dowry",
  "birthday",
  "other",
];

export const eventCategories = ["All", ...EVENT_CATEGORY_ORDER.map((k) => EVENT_CATEGORY_BY_FOLDER[k])] as const;

export type EventCategory = Exclude<(typeof eventCategories)[number], "All">;

export type EventGalleryItem = {
  src: string;
  title: string;
  category: EventCategory;
};

const eventImageModules = import.meta.glob<{ default: string }>(
  "/src/assets/events/**/*.{jpg,jpeg,png,webp,gif}",
  { eager: true },
);

function toTitleCase(value: string) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function categoryFromPath(path: string): EventCategory {
  const normalized = path.replaceAll("\\", "/").toLowerCase();
  const match = normalized.match(/\/assets\/events\/([^/]+)\//);
  const folder = (match?.[1] ?? "other") as keyof typeof EVENT_CATEGORY_BY_FOLDER;

  if (folder in EVENT_CATEGORY_BY_FOLDER) return EVENT_CATEGORY_BY_FOLDER[folder];

  // Best-effort fallback; keep the UI working and log a clue in dev.
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[events-data] Unknown events folder "${folder}" for path: ${path}`);
  }
  return EVENT_CATEGORY_BY_FOLDER.other;
}

function titleFromPath(path: string) {
  const normalized = path.replaceAll("\\", "/");
  const parts = normalized.split("/").filter(Boolean);
  const folder = parts.at(-2) ?? "Event";
  const file = parts.at(-1) ?? "Photo";
  const base = file.replace(/\.[^.]+$/, "");
  if (/^\d+$/.test(base)) return toTitleCase(folder);
  if (base.toLowerCase() === "hero") return `${toTitleCase(folder)} Hero`;
  return toTitleCase(`${folder} ${base}`);
}

export const galleryEvents: EventGalleryItem[] = Object.entries(eventImageModules)
  .map(([path, mod]) => ({
    src: mod.default,
    title: titleFromPath(path),
    category: categoryFromPath(path),
  }))
  .sort((a, b) => a.title.localeCompare(b.title));
