document.addEventListener('alpine:init', () => {
    // console.log("galleryComponent.js: alpine:init event fired.");
    Alpine.data('gallery', () => {
        // console.log("galleryComponent.js: Alpine.data('gallery', ...) function invoked.");

        return {
            searchQuery: '',
            selectedStyles: [],
            isMobileMenuOpen: false, 
            artworks: [
                { id: 1, title: "Pixel Dreams", artist: "Emma Wilson", price: 0.3, category: "Digital Art", style: "Pixel Art", image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 2, "title": "Crimson Canvas", "artist": "John Smith", "price": 0.5, "category": "Traditional Art", "style": "Oil Painting", image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 3, "title": "Azure Tides", "artist": "Maria Garcia", "price": 0.2, "category": "Traditional Art", "style": "Watercolor", image: "https://images.unsplash.com/photo-1509419488773-405f3ad9e085?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 4, "title": "Concrete Jungle", "artist": "Kenji Tanaka", "price": 0.8, "category": "Photography", "style": "Street", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 5, "title": "Tiny Universe", "artist": "Noah Kim", "price": 0.4, "category": "Photography", "style": "Macro", image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 6, "title": "Digital Horizon", "artist": "Sophia Lee", "price": 0.6, "category": "Digital Art", "style": "Digital Painting", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 7, "title": "Sculpted Light", "artist": "David Chen", "price": 1.1, "category": "Digital Art", "style": "3D Art", image: "https://images.unsplash.com/photo-1608501078713-8e445a709b39?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 8, "title": "Pencil Portrait", "artist": "Isabelle Dubois", "price": 0.1, "category": "Traditional Art", "style": "Pencil", image: "https://images.unsplash.com/photo-1519687361033-3c0a4e3f950d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 9, title: "Vector Vista", artist: "Liam Ray", price: 0.25, category: "Digital Art", style: "Vector Art", image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 10, title: "Acrylic Flow", artist: "Chloe Adams", price: 0.7, category: "Traditional Art", style: "Acrylic", image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 11, title: "Mountain Majesty", artist: "Ethan Hunt", price: 0.9, category: "Photography", style: "Landscape", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 12, title: "Charcoal Shadows", artist: "Ava Miller", price: 0.15, category: "Traditional Art", style: "Charcoal", image: "https://images.unsplash.com/photo-1618331835717-801e97c14e00?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 13, title: "Pop Explosion", artist: "Oliver Twist", price: 0.55, category: "Abstract & Modern", style: "Pop Art", image: "https://images.unsplash.com/photo-1501471115-3401183769b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 14, title: "Wildlife Gaze", artist: "Mia Wallace", price: 1.2, category: "Photography", style: "Wildlife", image: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 15, title: "Surreal Dreamscape", artist: "Noah Fence", price: 0.65, category: "Abstract & Modern", style: "Surrealism", image: "https://images.unsplash.com/photo-1516617442634-75371039cb3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 16, title: "Collage Chaos", artist: "Grace Note", price: 0.35, category: "Mixed Media", style: "Collage", image: "https://images.unsplash.com/photo-1561835708-c0ef149491c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 17, title: "Portrait Intensity", artist: "Lucas Shade", price: 0.45, category: "Photography", style: "Portrait", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 18, title: "Modern Lines", artist: "Sophie Form", price: 0.75, category: "Abstract & Modern", style: "Modern", image: "https://images.unsplash.com/photo-1491609154219-ffd3ffafd992?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 19, title: "Bronze Form", artist: "Arthur Cast", price: 1.5, category: "Mixed Media", style: "Sculpture", image: "https://images.unsplash.com/photo-1589599983911-82b1d4f3c9a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 20, title: "Abstract Energy", artist: "Violet Hue", price: 0.85, category: "Abstract & Modern", style: "Abstract", image: "https://images.unsplash.com/photo-1502691879800-51f04f6a6e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 21, title: "Pixel City", artist: "Emma Wilson", price: 0.4, category: "Digital Art", style: "Pixel Art", image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }, // New: City skyline
                { id: 22, title: "Oil Still Life", artist: "John Smith", price: 0.6, category: "Traditional Art", style: "Oil Painting", image: "https://images.unsplash.com/photo-1610931768936-1b8e743f8f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }, // New: Paint brushes
                { id: 23, title: "Water Landscape", artist: "Maria Garcia", price: 0.25, category: "Traditional Art", style: "Watercolor", image: "https://images.unsplash.com/photo-1542228241-c3777a011770?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }, // New: Watery landscape
                { id: 24, title: "Night Street", artist: "Kenji Tanaka", price: 0.9, category: "Photography", style: "Street", image: "https://images.unsplash.com/photo-1487452066049-a710f7296400?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 25, title: "Macro Dewdrop", artist: "Noah Kim", price: 0.5, category: "Photography", style: "Macro", image: "https://images.unsplash.com/photo-1474557157379-8aa74a6ef503?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 26, title: "Fantasy Digital", artist: "Sophia Lee", price: 0.7, category: "Digital Art", style: "Digital Painting", image: "https://images.unsplash.com/photo-1599791472816-19a3c42f1500?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 27, title: "3D Abstract", artist: "David Chen", price: 1.2, category: "Digital Art", style: "3D Art", image: "https://images.unsplash.com/photo-1617900906639-cab7adceb499?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 28, title: "Graphite Sketch", artist: "Isabelle Dubois", price: 0.15, category: "Traditional Art", style: "Pencil", image: "https://images.unsplash.com/photo-1598618443855-232ee0f817f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 29, title: "Installation View", artist: "Frank Lloyd Wrong", price: 2.0, category: "Mixed Media", style: "Installation", image: "https://images.unsplash.com/photo-1522087064901-77ff15ed6ab4?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 30, title: "Vector Landscape", artist: "Liam Ray", price: 0.3, category: "Digital Art", style: "Vector Art", image: "https://images.unsplash.com/photo-1505852679233-ee9d710f8532?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 31, title: "Acrylic Portrait", artist: "Chloe Adams", price: 0.8, category: "Traditional Art", style: "Acrylic", image: "https://images.unsplash.com/photo-1581092912599-a1e3e1a4b4d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 32, title: "Forest Path", artist: "Ethan Hunt", price: 1.0, category: "Photography", style: "Landscape", image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 33, title: "Charcoal Figure", artist: "Ava Miller", price: 0.2, category: "Traditional Art", style: "Charcoal", image: "https://images.unsplash.com/photo-1598134486069-bdd7ece35164?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 34, title: "Pop Culture", artist: "Oliver Twist", price: 0.6, category: "Abstract & Modern", style: "Pop Art", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 35, title: "Bird in Flight", artist: "Mia Wallace", price: 1.3, category: "Photography", style: "Wildlife", image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 36, title: "Melted Clock", artist: "Noah Fence", price: 0.7, category: "Abstract & Modern", style: "Surrealism", image: "https://images.unsplash.com/photo-1509114397022-077219ac398c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 37, title: "Paper Cut", artist: "Grace Note", price: 0.4, category: "Mixed Media", style: "Collage", image: "https://images.unsplash.com/photo-1599286286185-c3c577211319?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
                { id: 38, title: "Studio Portrait", artist: "Lucas Shade", price: 0.5, category: "Photography", style: "Portrait", image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
            ],
            categories: {
                "Traditional Art": ["Oil Painting", "Watercolor", "Acrylic", "Charcoal", "Pencil"],
                "Digital Art": ["Digital Painting", "3D Art", "Pixel Art", "Vector Art"],
                "Photography": ["Landscape", "Portrait", "Macro", "Street", "Wildlife"],
                "Abstract & Modern": ["Abstract", "Modern", "Pop Art", "Surrealism"],
                "Mixed Media": ["Collage", "Sculpture", "Installation"]
            },

            // Add init method
            init() {
                // console.log('galleryComponent.js: Alpine component init() called.');
            },

            // Computed property to filter artworks
            get filteredArtworks() {
                // console.log("galleryComponent.js: filteredArtworks getter accessed.");
                let filtered = [];
                try {
                    if (!this.searchQuery && this.selectedStyles.length === 0) {
                        filtered = this.artworks;
                    } else {
                        filtered = this.artworks.filter(artwork => {
                            const matchesSearch = this.searchQuery ?
                                artwork.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                                artwork.artist.toLowerCase().includes(this.searchQuery.toLowerCase()) :
                                true;
                            const matchesCategory = this.selectedStyles.length > 0 ?
                                this.selectedStyles.includes(artwork.style) :
                                true;
                            return matchesSearch && matchesCategory;
                        });
                    }
                    // console.log("galleryComponent.js: filteredArtworks returning:", filtered.length, "items");
                    return filtered;
                } catch (error) {
                    console.error("galleryComponent.js: Error in filteredArtworks getter:", error);
                    return [];
                }
            },

            // Method to toggle category selection
            toggleStyle(style) {
                const index = this.selectedStyles.indexOf(style);
                if (index > -1) {
                    this.selectedStyles.splice(index, 1);
                } else {
                    this.selectedStyles.push(style);
                }
                // Update aria-pressed state for the button
                this.$nextTick(() => {
                    if (this.$event && this.$event.target) {
                        this.$event.target.setAttribute('aria-pressed', index === -1);
                    }
                });
            },

            // Method to check if a category is selected
            isStyleSelected(style) {
                return this.selectedStyles.includes(style);
            },

            // Method to get all styles from categories
            getAllStyles() {
                let styles = [];
                for (const section in this.categories) {
                    styles = styles.concat(this.categories[section]);
                }
                return styles;
            },

            // Method to toggle mobile menu visibility
            toggleMobileMenu() {
                this.isMobileMenuOpen = !this.isMobileMenuOpen;
                // console.log('[DEBUG] toggleMobileMenu function called. isMobileMenuOpen:', this.isMobileMenuOpen);
            }
        };
    });
});
