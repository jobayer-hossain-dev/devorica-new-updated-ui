import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, ArrowRight } from 'lucide-react';
import { blogData } from '../data/blogData';
import { useToast } from '../components/Toast';
import CTASection from '../components/CTASection';

export default function BlogPostPage({ onOpenCalendly }) {
  const { slug } = useParams();
  const { showToast } = useToast();
  const post = blogData.find((b) => b.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Link copied to clipboard!', 'info');
  };

  return (
    <div className="w-full pt-28 lg:pt-36">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-medium font-vietnam text-[#8E8E93] hover:text-[#0A0A0A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Articles</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E4E6E9] bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#4F4F4F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3649F5]"></span>
            <span>{post.category}</span>
          </div>
          <h1 className="font-switzerMedium font-medium text-3xl sm:text-5xl text-[#0A0A0A] tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-b border-[#ECECEC] pb-6">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="font-switzerMedium font-medium text-sm text-[#0A0A0A] block">
                  {post.author.name}
                </span>
                <span className="font-vietnam text-xs text-[#8E8E93]">
                  {post.author.role} · {post.date} · {post.readTime}
                </span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[4px] border border-[#D1D1D1] bg-[#F6F6F6] hover:bg-[#EAEAEA] text-xs font-vietnam font-medium text-[#0A0A0A] transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>
        </div>

        {/* Cover Photo */}
        <div className="my-10 rounded-2xl overflow-hidden shadow-xl aspect-[16/9] bg-neutral-900">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Body */}
        <div className="prose prose-neutral max-w-none font-vietnam text-[#4A5565] text-base sm:text-lg leading-relaxed space-y-6">
          <p className="text-xl font-medium text-[#0A0A0A] leading-relaxed font-switzerMedium">
            {post.excerpt}
          </p>
          <div className="whitespace-pre-line leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>

      <CTASection onOpenCalendly={onOpenCalendly} />
    </div>
  );
}

