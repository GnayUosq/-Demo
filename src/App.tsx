/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Flame, Star, ChevronLeft, Share2, Heart, ChevronRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOVIE_QUOTES } from './data';

const DOUBAN_GREEN = '#2E9E4A';

export default function App() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans tracking-wide pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
          <h1 className="text-lg font-bold">电影详情</h1>
        </div>
        <div className="flex items-center gap-4">
          <Share2 className="w-5 h-5 text-gray-600" />
          <button 
            onClick={() => setShowComparison(!showComparison)}
            className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-500 flex items-center gap-1"
          >
            <Info className="w-3 h-3" />
            {showComparison ? '返回 Demo' : '设计对比'}
          </button>
        </div>
      </header>

      <div className="max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {showComparison ? (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-6"
            >
              <h3 className="text-2xl font-bold mb-8 text-center" style={{ color: DOUBAN_GREEN }}>设计构思：Before vs After</h3>
              
              <div className="space-y-8">
                <ComparisonItem 
                  title="入口布局"
                  before="隐藏在二级菜单或长影评中"
                  after="与演职员、剧照并列，一级入口直达"
                />
                <ComparisonItem 
                  title="交互形式"
                  before="纵向列表，干扰主线阅读"
                  after="横向滑动抽屉，保持页面节奏感"
                />
                <ComparisonItem 
                  title="视觉呈现"
                  before="纯文字排版，缺乏电影氛围"
                  after="毛玻璃/深色半透明卡片，提取剧照主色"
                />
              </div>

              <button 
                onClick={() => setShowComparison(false)}
                className="w-full mt-12 py-3 rounded-xl text-white font-bold shadow-lg shadow-green-200"
                style={{ backgroundColor: DOUBAN_GREEN }}
              >
                进入体验 Demo
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="demo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Movie Info Section */}
              <div className="px-4 py-6 flex gap-5 items-start">
                <img 
                  src="https://picsum.photos/seed/movie-poster/240/360" 
                  alt="Poster" 
                  className="w-28 h-40 object-cover rounded-lg shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">经典台词实验室</h2>
                  <div className="text-sm text-gray-500 mb-4 leading-relaxed">
                    2026 / 中国大陆 / 剧情 / 奇幻 / 120分钟
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-gray-100 rounded-md text-sm font-bold">想看</button>
                    <button className="flex-1 py-2 bg-gray-100 rounded-md text-sm font-bold">看过</button>
                  </div>
                </div>
              </div>

              {/* Rating Card */}
              <div className="px-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between border border-gray-100">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">豆瓣评分™</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold">9.2</span>
                      <div className="flex text-orange-400">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">12.5万人评价</p>
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                      <div className="w-[90%] h-full bg-orange-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Cast Section */}
              <SectionHeader title="演职员" count={12} />
              <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 mb-8">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="flex-shrink-0 w-20">
                    <img 
                      src={`https://picsum.photos/seed/cast-${i}/160/240`} 
                      className="w-20 h-28 object-cover rounded-md mb-2"
                      referrerPolicy="no-referrer"
                    />
                    <p className="text-xs font-bold truncate">演职员 {i}</p>
                    <p className="text-[10px] text-gray-400">导演/主演</p>
                  </div>
                ))}
              </div>

              {/* Videos/Photos Section */}
              <SectionHeader title="视频/剧照" count={145} />
              <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 mb-8">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/photo-${i}/400/300`} 
                    className="flex-shrink-0 w-48 h-32 object-cover rounded-md"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>

              {/* Classic Lines Section (NEW) */}
              <SectionHeader title="经典台词" count={85} showNew />
              <div className="flex gap-4 overflow-x-auto no-scrollbar px-4 mb-10 pb-4">
                {MOVIE_QUOTES.slice(0, 3).map((quote, index) => (
                  <HorizontalQuoteCard key={quote.id} quote={quote} index={index} />
                ))}
                <div className="flex-shrink-0 w-32 h-44 bg-gray-50 rounded-xl flex flex-col items-center justify-center border border-dashed border-gray-200 text-gray-400">
                  <ChevronRight className="w-6 h-6 mb-1" />
                  <span className="text-xs">查看全部</span>
                </div>
              </div>

              {/* Short Reviews Placeholder */}
              <SectionHeader title="短评" count={3240} />
              <div className="px-4 space-y-4">
                {[1,2].map(i => (
                  <div key={i} className="border-b border-gray-50 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-gray-200" />
                      <span className="text-xs font-bold text-gray-700">用户 {i}</span>
                      <div className="flex text-orange-400 scale-75">
                        {[1,2,3,4].map(j => <Star key={j} className="w-2 h-2 fill-current" />)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      这是一条电影短评的占位文字，展示页面整体布局感。
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SectionHeader({ title, count, showNew }: { title: string; count: number; showNew?: boolean }) {
  return (
    <div className="px-4 mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        {showNew && (
          <span className="bg-[#2E9E4A] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold scale-90">NEW</span>
        )}
      </div>
      <button className="text-sm text-gray-400 flex items-center gap-0.5">
        全部 {count} <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function HorizontalQuoteCard({ quote, index }: any) {
  // Extracting a "main color" feel via seed-based gradient
  const gradients = [
    'from-indigo-900/90 to-black/80',
    'from-emerald-900/90 to-black/80',
    'from-rose-900/90 to-black/80',
    'from-amber-900/90 to-black/80'
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex-shrink-0 w-72 h-44 relative rounded-xl overflow-hidden shadow-lg group"
    >
      {/* Background Image */}
      <img
        src={quote.imageUrl}
        alt={quote.movieTitle}
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      
      {/* Frosted Glass / Dark Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} backdrop-blur-[2px]`} />
      
      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white text-sm md:text-base font-medium text-center leading-relaxed line-clamp-3">
            “{quote.quote}”
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <p className="text-white/50 text-[10px] font-medium truncate max-w-[180px]">
            《{quote.movieTitle}》
          </p>
          <div className="flex items-center gap-1 text-[#2E9E4A] bg-white/10 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
            <Heart className="w-3 h-3 fill-current" />
            <span className="text-[10px] font-bold text-white">{(quote.interactionScore * 100).toFixed(0)}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ComparisonItem({ title, before, after }: { title: string; before: string; after: string }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="w-1 h-4 rounded-full" style={{ backgroundColor: DOUBAN_GREEN }} />
        <h4 className="font-bold text-gray-900">{title}</h4>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1 font-bold">Before</p>
          <p className="text-sm text-gray-500 leading-relaxed">{before}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
          <p className="text-[10px] uppercase tracking-widest text-green-400 mb-1 font-bold">After</p>
          <p className="text-sm text-green-800 leading-relaxed font-medium">{after}</p>
        </div>
      </div>
    </div>
  );
}
