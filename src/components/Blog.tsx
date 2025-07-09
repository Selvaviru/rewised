import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, Clock, Eye, BookOpen, TrendingUp, FileText, Calculator } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Income Tax Return Filing: Complete Guide for FY 2024-25',
      excerpt: 'Everything you need to know about ITR filing for the current financial year, including new rules, deductions, and deadlines.',
      content: 'Detailed guide on ITR filing process, forms, and requirements...',
      author: 'CA Rajesh Kumar',
      date: '2025-01-15',
      category: 'Income Tax',
      readTime: '8 min read',
      views: 1250,
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['ITR', 'Tax Filing', 'Income Tax', 'Deductions']
    },
    {
      id: 2,
      title: 'GST Return Filing: Monthly vs Quarterly - Which is Better?',
      excerpt: 'Compare monthly and quarterly GST return filing options to choose the best approach for your business.',
      content: 'Comprehensive comparison of GST filing frequencies...',
      author: 'CA Priya Sharma',
      date: '2025-01-12',
      category: 'GST',
      readTime: '6 min read',
      views: 890,
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['GST', 'Business', 'Compliance', 'Returns']
    },
    {
      id: 3,
      title: 'Top 10 Tax Saving Investments for Salaried Employees',
      excerpt: 'Maximize your tax savings with these proven investment options under Section 80C and other deductions.',
      content: 'Detailed analysis of tax-saving investment options...',
      author: 'CA Anitha Devi',
      date: '2025-01-10',
      category: 'Tax Planning',
      readTime: '10 min read',
      views: 2100,
      image: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Tax Saving', 'Investments', '80C', 'Salary']
    },
    {
      id: 4,
      title: 'Business Registration in India: Step-by-Step Process',
      excerpt: 'Complete guide to registering your business in India, including required documents and procedures.',
      content: 'Step-by-step business registration process...',
      author: 'CS Maduri Bharani',
      date: '2025-01-08',
      category: 'Business',
      readTime: '12 min read',
      views: 1560,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Business Registration', 'Startup', 'Company', 'Legal']
    },
    {
      id: 5,
      title: 'TDS Compliance: Common Mistakes to Avoid',
      excerpt: 'Learn about common TDS compliance mistakes and how to avoid penalties with proper documentation.',
      content: 'Common TDS mistakes and prevention strategies...',
      author: 'CA Daniel Kumar',
      date: '2025-01-05',
      category: 'TDS',
      readTime: '7 min read',
      views: 750,
      image: 'https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TDS', 'Compliance', 'Penalties', 'Documentation']
    },
    {
      id: 6,
      title: 'Trademark Registration: Protect Your Brand Identity',
      excerpt: 'Understanding the importance of trademark registration and the complete process to protect your brand.',
      content: 'Comprehensive guide to trademark registration...',
      author: 'Advocate Priya Menon',
      date: '2025-01-03',
      category: 'Intellectual Property',
      readTime: '9 min read',
      views: 980,
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Trademark', 'Brand Protection', 'IP', 'Legal']
    }
  ];

  const categories = ['All', 'Income Tax', 'GST', 'Tax Planning', 'Business', 'TDS', 'Intellectual Property'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Income Tax': return <Calculator className="w-4 h-4" />;
      case 'GST': return <FileText className="w-4 h-4" />;
      case 'Tax Planning': return <TrendingUp className="w-4 h-4" />;
      case 'Business': return <BookOpen className="w-4 h-4" />;
      default: return <Tag className="w-4 h-4" />;
    }
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tax Tips & Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tax news, tips, and expert insights to make informed financial decisions
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift animate-fadeInUp"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium text-white ${
                    post.category === 'Income Tax' ? 'bg-blue-500' :
                    post.category === 'GST' ? 'bg-green-500' :
                    post.category === 'Tax Planning' ? 'bg-purple-500' :
                    post.category === 'Business' ? 'bg-orange-500' :
                    'bg-gray-500'
                  }`}>
                    {getCategoryIcon(post.category)}
                    <span>{post.category}</span>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 hover:translate-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 animate-fadeInUp">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Tax Tips</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tax updates, tips, and insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;