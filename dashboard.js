import React, { useState } from 'react';
import { Search, X, ChevronRight, Grid, List, BookOpen, Wrench, Map, Tv, Bookmark, Globe, Music, Zap, Mail, Download, Coffee, ShoppingCart, MessageSquare, Loader, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const BookmarkDashboard = () => {
  // Website data categorized with specific icons
  const categorizedWebsites = {
    "Data Visualization & Maps": [
      { url: "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-1.98,-304.63,1480/loc=-4.034,55.092", name: "Earth Nullschool", description: "Real-time global wind, weather, ocean, and pollution visualization", icon: <Globe size={20} /> },
      { url: "https://restor.eco/?lat=26&lng=14.23&zoom=3", name: "Restor", description: "Platform for ecosystem restoration and conservation efforts worldwide", icon: <Globe size={20} /> },
      { url: "https://www.shipmap.org/", name: "Ship Map", description: "Interactive map of global shipping movements", icon: <Map size={20} /> },
      { url: "https://www.carbonmap.org/", name: "Carbon Map", description: "Visualization of carbon emissions and climate responsibility", icon: <Map size={20} /> },
      { url: "https://globe.adsbexchange.com/", name: "ADS-B Exchange", description: "Real-time flight tracking visualization", icon: <Loader size={20} /> },
      { url: "https://rsoe-edis.org/eventMap", name: "RSOE EDIS", description: "Emergency and disaster information service with interactive map", icon: <Zap size={20} /> }
    ],
    "Digital Libraries & Education": [
      { url: "https://github.com/P1xt/p1xt-guides", name: "P1xt Guides", description: "Programming and computer science learning path guides", icon: <Bookmark size={20} /> },
      { url: "https://libgen.is/", name: "Library Genesis", description: "Search engine for books and academic articles", icon: <BookOpen size={20} /> },
      { url: "https://openlibrary.org/", name: "Open Library", description: "Digital lending library with millions of books", icon: <BookOpen size={20} /> },
      { url: "https://www.openculture.com/", name: "Open Culture", description: "Collection of free cultural and educational media", icon: <BookOpen size={20} /> },
      { url: "https://ask.loc.gov/", name: "Ask Library of Congress", description: "Research assistance from the Library of Congress", icon: <HelpCircle size={20} /> },
      { url: "https://www.gutenberg.org/", name: "Project Gutenberg", description: "Library of free eBooks of classic literature", icon: <BookOpen size={20} /> }
    ],
    "Tools & Utilities": [
      { url: "https://www.nytimes.com/wirecutter/", name: "Wirecutter", description: "Product reviews and recommendations", icon: <ShoppingCart size={20} /> },
      { url: "https://uk.camelcamelcamel.com/", name: "CamelCamelCamel", description: "Amazon price tracker and history charts", icon: <ShoppingCart size={20} /> },
      { url: "https://ninite.com/help/", name: "Ninite", description: "Bundle installer for popular free software", icon: <Download size={20} /> },
      { url: "https://10minutemail.com/", name: "10 Minute Mail", description: "Temporary email address service", icon: <Mail size={20} /> },
      { url: "https://www.nirsoft.net/", name: "NirSoft", description: "Collection of small and useful freeware utilities", icon: <Wrench size={20} /> },
      { url: "https://tosdr.org/en", name: "Terms of Service; Didn't Read", description: "Analyses and grades website terms of service", icon: <MessageSquare size={20} /> },
      { url: "https://www.remove.bg/", name: "Remove.bg", description: "Removes background from images automatically", icon: <Wrench size={20} /> },
      { url: "https://www5.lunapic.com/editor/?action=transparent", name: "LunaPic", description: "Online photo editor with transparency tools", icon: <Wrench size={20} /> },
      { url: "https://www.deepl.com/en/translator", name: "DeepL Translator", description: "AI-powered language translation tool", icon: <MessageSquare size={20} /> },
      { url: "https://www.justtherecipe.com/", name: "Just the Recipe", description: "Extracts just the recipe from cooking websites", icon: <Coffee size={20} /> }
    ],
    "Reference & Guides": [
      { url: "https://www.thebigproject.co.uk/", name: "The Big Project", description: "Collection of web resources and tutorials", icon: <Bookmark size={20} /> },
      { url: "https://www.fieggen.com/shoelace/", name: "Ian's Shoelace Site", description: "Comprehensive guide to shoelace knots and techniques", icon: <Bookmark size={20} /> },
      { url: "https://sleepopolis.com/calculators/sleep/", name: "Sleep Calculator", description: "Tool to optimize sleep cycles and wake times", icon: <Wrench size={20} /> },
      { url: "https://forvo.com/", name: "Forvo", description: "Pronunciation guide with audio by native speakers", icon: <MessageSquare size={20} /> },
      { url: "https://aruljohn.com/", name: "Arul John", description: "Tech tutorials and resources", icon: <Wrench size={20} /> },
      { url: "https://thenounproject.com/", name: "The Noun Project", description: "Collection of icons representing nouns/concepts", icon: <Bookmark size={20} /> }
    ],
    "Entertainment & Media": [
      { url: "https://vimm.net/vault/", name: "Vimm's Lair", description: "Preservation site for classic video games", icon: <Tv size={20} /> },
      { url: "https://radio.garden/visit/nicosia/RrfQbSTm", name: "Radio Garden", description: "Explore live radio stations around the world", icon: <Music size={20} /> },
      { url: "https://mynoise.net/", name: "myNoise", description: "Background noise and interactive soundscapes", icon: <Music size={20} /> },
      { url: "https://www.atlasobscura.com/", name: "Atlas Obscura", description: "Guide to unusual and obscure travel destinations", icon: <Globe size={20} /> },
      { url: "https://oldgamesdownload.com/", name: "Old Games Download", description: "Archive of classic PC games", icon: <Download size={20} /> },
      { url: "https://watchttn.com/", name: "Watch TTN", description: "Directory of free educational and entertaining videos", icon: <Tv size={20} /> },
      { url: "https://www.rome2rio.com/", name: "Rome2Rio", description: "Travel planning tool for routes between locations", icon: <Globe size={20} /> }
    ]
  };

  // Refined Cyberpunk color palette with more subtle tones
  const categoryInfo = {
    "Data Visualization & Maps": { 
      color: "#36EEE0", 
      gradientColor: "#2C3E50", 
      icon: <Map size={20} />,
      description: "Interactive maps and data visualizations for global insights"
    },
    "Digital Libraries & Education": { 
      color: "#F637EC", 
      gradientColor: "#2C3E50", 
      icon: <BookOpen size={20} />,
      description: "Digital libraries, educational resources, and learning platforms"
    },
    "Tools & Utilities": { 
      color: "#FFCC00", 
      gradientColor: "#2C3E50", 
      icon: <Wrench size={20} />,
      description: "Useful online tools and utilities for everyday tasks"
    },
    "Reference & Guides": { 
      color: "#FF5E7D", 
      gradientColor: "#2C3E50", 
      icon: <Bookmark size={20} />,
      description: "Reference materials and comprehensive guides on various topics"
    },
    "Entertainment & Media": { 
      color: "#3CCF4E", 
      gradientColor: "#2C3E50", 
      icon: <Tv size={20} />,
      description: "Entertainment resources, media archives, and discovery tools"
    }
  };

  // State variables
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(Object.keys(categorizedWebsites).reduce((acc, category) => {
    acc[category] = false; // Initialize all categories as collapsed
    return acc;
  }, {}));
  const [hoveredSite, setHoveredSite] = useState(null);

  // Toggle category expansion
  const toggleCategory = (category) => {
    setExpandedCategories({
      ...expandedCategories,
      [category]: !expandedCategories[category]
    });
  };

  // Get all websites as a flat array for search
  const getAllWebsites = () => {
    let allSites = [];
    Object.entries(categorizedWebsites).forEach(([category, sites]) => {
      sites.forEach(site => {
        allSites.push({...site, category});
      });
    });
    return allSites;
  };

  // Filter websites based on search term
  const getFilteredWebsites = () => {
    const allSites = getAllWebsites();
    if (!searchTerm) return null; // Return null if no search term
    
    return allSites.filter(site => 
      site.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      site.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      site.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Handle site click - would navigate in a real app
  const handleSiteClick = (url) => {
    window.open(url, '_blank');
  };

  // Create refined cyberpunk style gradient
  const getCyberpunkGradient = (category) => {
    const { color, gradientColor } = categoryInfo[category];
    return `linear-gradient(135deg, ${gradientColor}, ${color}20)`;
  };

  // Create refined cyberpunk style border glow
  const getCyberpunkBorderGlow = (category, isHovered) => {
    const { color } = categoryInfo[category];
    return isHovered ? `0 0 8px ${color}90` : 'none';
  };

  // Render grid view with refined cyberpunk styling
  const renderGridSites = (sites, category) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 mb-6">
        {sites.map((site, index) => {
          const isHovered = hoveredSite === site.url;
          return (
            <div 
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-102 cursor-pointer"
              style={{ 
                background: `#151F2E`,
                borderLeft: `2px solid ${categoryInfo[category].color}`,
                boxShadow: getCyberpunkBorderGlow(category, isHovered)
              }}
              onClick={() => handleSiteClick(site.url)}
              onMouseEnter={() => setHoveredSite(site.url)}
              onMouseLeave={() => setHoveredSite(null)}
            >
              <div className="p-4 relative z-10">
                <div className="flex items-center mb-2">
                  <div 
                    className="p-2 rounded-full mr-3"
                    style={{ 
                      color: categoryInfo[category].color,
                      background: `${categoryInfo[category].color}15`,
                      borderRadius: '50%',
                      border: `1px solid ${categoryInfo[category].color}50`
                    }}
                  >
                    {site.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{site.name}</h3>
                    <span 
                      className="text-xs opacity-70"
                      style={{ color: categoryInfo[category].color }}
                    >
                      {category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-300 line-clamp-2">{site.description}</p>
                <div 
                  className="absolute bottom-2 right-2 h-6 w-6 flex items-center justify-center rounded-full"
                  style={{ 
                    backgroundColor: `${categoryInfo[category].color}20`,
                    border: `1px solid ${categoryInfo[category].color}50`
                  }}
                >
                  <ChevronRight size={14} style={{ color: categoryInfo[category].color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Render list view with refined cyberpunk styling
  const renderListSites = (sites, category) => {
    return (
      <div className="space-y-2 mt-2 mb-6">
        {sites.map((site, index) => {
          const isHovered = hoveredSite === site.url;
          return (
            <div 
              key={index}
              className="flex items-center p-3 rounded-md cursor-pointer transition-all duration-300"
              style={{ 
                background: '#151F2E',
                borderLeft: `2px solid ${categoryInfo[category].color}`,
                boxShadow: getCyberpunkBorderGlow(category, isHovered)
              }}
              onClick={() => handleSiteClick(site.url)}
              onMouseEnter={() => setHoveredSite(site.url)}
              onMouseLeave={() => setHoveredSite(null)}
            >
              <div 
                className="p-2 rounded-full mr-3 relative"
                style={{ 
                  color: categoryInfo[category].color,
                  background: `${categoryInfo[category].color}15`,
                  borderRadius: '50%',
                  border: `1px solid ${categoryInfo[category].color}50`
                }}
              >
                {site.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-white">{site.name}</h3>
                <p className="text-xs text-gray-400 truncate">{site.description}</p>
              </div>
              <div 
                className="ml-2 h-6 w-6 flex items-center justify-center rounded-full"
                style={{ 
                  backgroundColor: `${categoryInfo[category].color}20`,
                  border: `1px solid ${categoryInfo[category].color}50`
                }}
              >
                <ChevronRight size={14} style={{ color: categoryInfo[category].color }} />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  // Render search results
  const renderSearchResults = () => {
    const filteredSites = getFilteredWebsites();
    
    if (!filteredSites || filteredSites.length === 0) {
      return (
        <div className="text-center py-12 bg-black bg-opacity-30 rounded-lg border border-gray-800">
          <p className="text-gray-400 font-mono">// NO MATCHING RESULTS FOUND //</p>
        </div>
      );
    }

    if (viewMode === 'grid') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSites.map((site, index) => {
            const isHovered = hoveredSite === site.url;
            return (
              <div 
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-102 cursor-pointer"
                style={{ 
                  background: `#151F2E`,
                  borderLeft: `2px solid ${categoryInfo[site.category].color}`,
                  boxShadow: getCyberpunkBorderGlow(site.category, isHovered)
                }}
                onClick={() => handleSiteClick(site.url)}
                onMouseEnter={() => setHoveredSite(site.url)}
                onMouseLeave={() => setHoveredSite(null)}
              >
                <div className="p-4 relative z-10">
                  <div className="flex items-center mb-2">
                    <div 
                      className="p-2 rounded-full mr-3"
                      style={{ 
                        color: categoryInfo[site.category].color,
                        background: `${categoryInfo[site.category].color}15`,
                        borderRadius: '50%',
                        border: `1px solid ${categoryInfo[site.category].color}50`
                      }}
                    >
                      {site.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{site.name}</h3>
                      <span 
                        className="text-xs opacity-70"
                        style={{ color: categoryInfo[site.category].color }}
                      >
                        {site.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2">{site.description}</p>
                  <div 
                    className="absolute bottom-2 right-2 h-6 w-6 flex items-center justify-center rounded-full"
                    style={{ 
                      backgroundColor: `${categoryInfo[site.category].color}20`,
                      border: `1px solid ${categoryInfo[site.category].color}50`
                    }}
                  >
                    <ChevronRight size={14} style={{ color: categoryInfo[site.category].color }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="space-y-2">
          {filteredSites.map((site, index) => {
            const isHovered = hoveredSite === site.url;
            return (
              <div 
                key={index}
                className="flex items-center p-3 rounded-md cursor-pointer transition-all duration-300"
                style={{ 
                  background: '#151F2E',
                  borderLeft: `2px solid ${categoryInfo[site.category].color}`,
                  boxShadow: getCyberpunkBorderGlow(site.category, isHovered)
                }}
                onClick={() => handleSiteClick(site.url)}
                onMouseEnter={() => setHoveredSite(site.url)}
                onMouseLeave={() => setHoveredSite(null)}
              >
                <div 
                  className="p-2 rounded-full mr-3 relative"
                  style={{ 
                    color: categoryInfo[site.category].color,
                    background: `${categoryInfo[site.category].color}15`,
                    borderRadius: '50%',
                    border: `1px solid ${categoryInfo[site.category].color}50`
                  }}
                >
                  {site.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-white truncate">{site.name}</h3>
                  <p className="text-xs text-gray-400 truncate">{site.description}</p>
                </div>
                <div 
                  className="text-xs px-2 py-1 rounded-md"
                  style={{ 
                    color: categoryInfo[site.category].color,
                    background: `${categoryInfo[site.category].color}15`
                  }}
                >
                  {site.category.split(' ')[0]}
                </div>
                <div 
                  className="ml-2 h-6 w-6 flex items-center justify-center rounded-full"
                  style={{ 
                    backgroundColor: `${categoryInfo[site.category].color}20`,
                    border: `1px solid ${categoryInfo[site.category].color}50`
                  }}
                >
                  <ChevronRight size={14} style={{ color: categoryInfo[site.category].color }} />
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };

  // Render category sections
  const renderCategorySections = () => {
    return Object.entries(categorizedWebsites).map(([category, sites]) => (
      <div key={category} className="mb-6">
        <div 
          className="flex items-center justify-between p-3 cursor-pointer rounded-md"
          style={{ 
            background: getCyberpunkGradient(category),
            borderLeft: `3px solid ${categoryInfo[category].color}`,
            boxShadow: `0 0 5px ${categoryInfo[category].color}50`
          }}
          onClick={() => toggleCategory(category)}
        >
          <div className="flex items-center">
            <div 
              className="p-2 rounded-full mr-3"
              style={{ 
                color: categoryInfo[category].color,
                background: `${categoryInfo[category].color}20`,
                borderRadius: '50%'
              }}
            >
              {categoryInfo[category].icon}
            </div>
            <div>
              <h2 className="font-bold text-lg text-white">{category}</h2>
              <p className="text-xs text-gray-300">{categoryInfo[category].description}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xs mr-2 font-mono" style={{ color: categoryInfo[category].color }}>
              {sites.length} items
            </span>
            <div 
              className="p-1 rounded-full"
              style={{ 
                background: `${categoryInfo[category].color}20`,
                borderRadius: '50%'
              }}
            >
              {expandedCategories[category] ? 
                <ChevronUp size={16} style={{ color: categoryInfo[category].color }} /> : 
                <ChevronDown size={16} style={{ color: categoryInfo[category].color }} />
              }
            </div>
          </div>
        </div>
        
        {expandedCategories[category] && (
          viewMode === 'grid' ? 
            renderGridSites(sites, category) : 
            renderListSites(sites, category)
        )}
      </div>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto p-4" style={{ 
      background: 'linear-gradient(135deg, #0D1117 0%, #1A202C 100%)',
      minHeight: '100vh',
      color: '#E0E0E0'
    }}>
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent" style={{
          backgroundImage: 'linear-gradient(90deg, #36EEE0, #F637EC, #FFCC00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          NETRUNNER
          <span className="text-sm font-mono ml-2 bg-clip-text text-transparent" style={{
            backgroundImage: 'linear-gradient(90deg, #36EEE0, #F637EC)',
          }}>v3.0</span>
        </h1>
        <p className="text-gray-400 border-b border-gray-800 pb-2">Your personal digital gateway <span className="font-mono text-xs">// 35 resources indexed</span></p>
      </header>

      {/* Search and View Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="SEARCH NETWORK..."
            className="w-full pl-10 pr-4 py-2 rounded-lg focus:outline-none transition-all duration-300"
            style={{
              backgroundColor: 'rgba(13, 17, 23, 0.8)',
              border: `1px solid ${searchTerm ? '#36EEE0' : '#2D3748'}`,
              color: '#E0E0E0',
              boxShadow: searchTerm ? '0 0 10px rgba(54, 238, 224, 0.3)' : 'none'
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5" style={{ color: '#36EEE0' }} size={18} />
          {searchTerm && (
            <X 
              className="absolute right-3 top-2.5 cursor-pointer hover:text-white" 
              style={{ color: '#F637EC' }}
              size={18} 
              onClick={() => setSearchTerm('')}
            />
          )}
        </div>
        <div className="flex space-x-2">
          <button 
            className="p-2 rounded transition-all duration-300"
            style={{
              backgroundColor: viewMode === 'grid' ? '#36EEE0' : 'rgba(54, 238, 224, 0.1)',
              color: viewMode === 'grid' ? '#0D1117' : '#36EEE0',
              boxShadow: viewMode === 'grid' ? '0 0 8px rgba(54, 238, 224, 0.5)' : 'none',
              border: `1px solid ${viewMode === 'grid' ? '#36EEE0' : 'rgba(54, 238, 224, 0.3)'}`
            }}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={20} />
          </button>
          <button 
            className="p-2 rounded transition-all duration-300"
            style={{
              backgroundColor: viewMode === 'list' ? '#36EEE0' : 'rgba(54, 238, 224, 0.1)',
              color: viewMode === 'list' ? '#0D1117' : '#36EEE0',
              boxShadow: viewMode === 'list' ? '0 0 8px rgba(54, 238, 224, 0.5)' : 'none',
              border: `1px solid ${viewMode === 'list' ? '#36EEE0' : 'rgba(54, 238, 224, 0.3)'}`
            }}
            onClick={() => setViewMode('list')}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Divider with dots */}
      <div className="flex items-center justify-center my-6">
        <div className="h-px w-full bg-gray-800"></div>
        <div className="mx-2 flex space-x-2">
          {Object.keys(categoryInfo).map((category, index) => (
            <div 
              key={index} 
              className="h-2 w-2 rounded-full" 
              style={{ backgroundColor: categoryInfo[category].color }}
            ></div>
          ))}
        </div>
        <div className="h-px w-full bg-gray-800"></div>
      </div>

      {/* Content section */}
      <main>
        {searchTerm ? renderSearchResults() : renderCategorySections()}
      </main>
    </div>
  );
};

export default BookmarkDashboard;
