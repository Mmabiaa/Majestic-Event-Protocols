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
    <section className="px-6 py-12 bg-warm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`relative px-4 sm:px-6 py-2 text-xs sm:text-sm uppercase tracking-wider font-light transition-all duration-300 ${
                activeCategory === cat
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
              {/* Animated underline */}
              <span 
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-px bg-gold transition-all duration-300 ${
                  activeCategory === cat ? "w-6 sm:w-8" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}