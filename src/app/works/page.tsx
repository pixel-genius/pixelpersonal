"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { works, projectCategories } from "@/data/globalData";

export default function Works() {
    const [selectedItem, setSelectedItem] = useState<typeof works[0] | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredWorks = selectedCategory === "All" 
        ? works 
        : works.filter(work => work.category === selectedCategory);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
                        My Projects
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Explore my creative journey through innovative projects that showcase my passion for design, development, and problem-solving. Each project represents my commitment to excellence and attention to detail.
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {projectCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                                selectedCategory === category
                                    ? "bg-blue-600 text-white shadow-lg"
                                    : "bg-white dark:bg-background text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredWorks.map((item) => (
                        <Dialog key={item.id} open={selectedItem?.id === item.id} onOpenChange={(open) => !open && setSelectedItem(null)}>
                            <DialogTrigger asChild>
                                <div className="group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-secondary shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        {/* Enhanced Glassmorphism Overlay with better hover visibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                                <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-xl p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                    <h3 className="text-xl font-bold text-white mb-3 drop-shadow-lg">
                                                        {item.title}
                                                    </h3>
                                                    <Badge variant="secondary" className="text-white bg-white/30 border border-white/40 backdrop-blur-sm font-medium">
                                                        {item.category}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogTrigger>
                            
                            <DialogContent className="sm:max-w-[800px] bg-white dark:bg-gray-900">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {item.title}
                                    </DialogTitle>
                                    <Badge variant="secondary" className="text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                                        {item.category}
                                    </Badge>
                                </DialogHeader>
                                <div className="grid gap-6 py-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full aspect-square object-cover rounded-xl"
                                    />
                                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>

                {/* Empty State */}
                {filteredWorks.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-500 dark:text-gray-400">
                            No projects found in the "{selectedCategory}" category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}