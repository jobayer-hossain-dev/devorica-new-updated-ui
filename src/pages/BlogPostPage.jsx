import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { blogData } from '../data/blogData';
import { useToast } from '../components/Toast';

const topicTitles = ['Introduction', 'Why UI/UX matters more than ever', 'The trends shaping high-converting websites', 'Designing for trust and clarity', 'Performance, accessibility and motion', 'A practical conversion checklist'];

export default function BlogPostPage() {
  const { slug } = useParams();
  const { showToast } = useToast();
  const post = blogData.find((b) => b.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;
  const postIndex = blogData.findIndex((item) => item.slug === slug);
  const paragraphs = post.content.split(/\n+/).map((item) => item.trim()).filter(Boolean);
  const share = () => { navigator.clipboard?.writeText(window.location.href); showToast('Link copied to clipboard!', 'info'); };

  return (
    <div className="w-full bg-white">
      <section className="blog-post-header border-b border-[#eeeeee]">
        <div className="mx-auto flex h-full max-w-[1040px] flex-col justify-end px-5 pb-10 sm:px-8 lg:pb-[58px]">
          <Link to="/blog" className="mb-auto mt-7 inline-flex w-fit items-center gap-2 text-xs font-medium text-[#8E8E93] transition-colors hover:text-[#0A0A0A]"><ArrowLeft className="h-3.5 w-3.5" /> Back to Articles</Link>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#E4E6E9] bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#4F4F4F]"><span className="h-1.5 w-1.5 rounded-full bg-[#3649F5]" />{post.category}</div>
          <h1 className="mt-3 max-w-[900px] font-switzerMedium text-[30px] font-medium leading-[1.08] tracking-[-0.04em] text-[#0A0A0A] sm:text-5xl lg:text-[56px]">{post.title}</h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4"><div className="flex items-center gap-3"><img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full object-cover" /><div><span className="block text-sm font-medium text-[#0A0A0A]">{post.author.name}</span><span className="text-xs text-[#8E8E93]">{post.author.role} · {post.date} · {post.readTime}</span></div></div><button onClick={share} className="inline-flex items-center gap-2 rounded-[4px] border border-[#D1D1D1] bg-[#F6F6F6] px-3.5 py-1.5 text-xs font-medium text-[#0A0A0A] transition-colors hover:bg-[#EAEAEA]"><Share2 className="h-3.5 w-3.5" />Share Article</button></div>
        </div>
      </section>
      <section className="blog-post-cover bg-[#111111]"><img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" /></section>
      <section className="blog-post-body">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[190px_minmax(0,700px)] lg:gap-[74px] lg:px-0 lg:py-[88px]">
          <aside className="hidden lg:block"><div className="sticky top-28 space-y-4 border-l border-[#E6E6E6] pl-5">{topicTitles.map((title, index) => <a key={title} href={`#topic-${index}`} className={`block text-xs leading-5 transition-colors ${index === 0 ? 'font-medium text-[#0A0A0A]' : 'text-[#9A9A9A] hover:text-[#0A0A0A]'}`}>{title}</a>)}</div></aside>
          <article className="min-w-0 font-vietnam text-[16px] leading-[1.85] text-[#4A5565] sm:text-[18px]"><p className="mb-8 text-xs uppercase tracking-[0.16em] text-[#8E8E93]">{post.date} · {post.readTime}</p><h2 id="topic-0" className="mb-5 font-switzerMedium text-3xl font-medium leading-tight text-[#0A0A0A] sm:text-4xl">Introduction</h2><p className="mb-12 text-xl leading-[1.55] text-[#20242B]">{post.excerpt}</p><div className="space-y-7">{paragraphs.map((paragraph, index) => <p key={`${paragraph}-${index}`}>{paragraph}</p>)}</div>{[1, 2, 3, 4, 5].map((index) => <React.Fragment key={index}><h2 id={`topic-${index}`} className="mt-24 mb-5 font-switzerMedium text-3xl font-medium leading-tight text-[#0A0A0A] sm:text-4xl">{topicTitles[index]}</h2><p className="mb-8">A thoughtful digital experience makes the next step obvious. Strong hierarchy, purposeful whitespace, responsive components and restrained motion help visitors understand the product quickly and move with confidence.</p><p className="mb-10">Teams that combine useful content with a consistent visual system create websites that feel reliable across desktop, tablet and mobile. Every interaction should reinforce the same clear story.</p>{index < 4 && <img src={blogData[(index + 1) % blogData.length]?.coverImage || post.coverImage} alt="Article visual" className="my-12 h-[260px] w-full rounded-2xl object-cover sm:h-[390px]" />}</React.Fragment>)}</article>
        </div>
      </section>
      <section className="blog-post-tags border-y border-[#ECECEC]"><div className="mx-auto flex h-full max-w-[1040px] flex-wrap content-center gap-2 px-5 sm:px-8"><span className="mr-2 text-xs text-[#8E8E93]">Tags</span>{['UI/UX Design', 'Web Design', 'Conversion', 'Product Design'].map((tag) => <span key={tag} className="rounded-full bg-[#F4F4F4] px-3 py-1.5 text-xs text-[#4F4F4F]">{tag}</span>)}</div></section>
      <section className="blog-post-explore"><Link to="/blog" className="mx-auto flex h-full max-w-[1040px] items-center justify-between px-5 text-sm font-medium text-[#0A0A0A] transition-opacity hover:opacity-60 sm:px-8">Explore more articles <ArrowRight className="h-4 w-4" /></Link></section>
    </div>
  );
}
