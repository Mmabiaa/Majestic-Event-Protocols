type EventsCategoryFilterProps = {
  categories: readonly string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export function EventsCategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: EventsCategoryFilterProps) {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted text-muted-foreground hover:bg-primary/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}
