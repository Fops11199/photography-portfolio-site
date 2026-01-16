interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelectCategory(category)}
                    className={`px-6 py-2 rounded-full border border-transparent transition-all duration-300 font-medium ${
                        activeCategory === category
                            ? 'bg-accent-gold text-primary border-accent-gold'
                            : 'text-gray-400 border-gray-800 hover:border-accent-gold hover:text-accent-gold'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
