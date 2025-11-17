'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('content');
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState('');
  const router = useRouter();
  const locale = useLocale();

  // 内容管理状态
  const [contentData, setContentData] = useState({
    heroTitle: '',
    heroSubtitle: '',
    aboutText: '',
    contactEmail: 'hello@nexolve.ai',
  });

  // 知识库管理状态
  const [knowledgeBase, setKnowledgeBase] = useState({
    systemPrompt: '',
    faqs: [],
  });

  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });

  // 检查登录状态
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push(`/${locale}/admin/login`);
    } else {
      loadData();
    }
  }, []);

  // 加载数据
  const loadData = async () => {
    try {
      // 从 API 加载内容数据
      const contentRes = await fetch('/api/admin/content');
      if (contentRes.ok) {
        const data = await contentRes.json();
        setContentData(data);
      }

      // 从 API 加载知识库数据
      const kbRes = await fetch('/api/admin/knowledge-base');
      if (kbRes.ok) {
        const data = await kbRes.json();
        setKnowledgeBase(data);
      }
    } catch (error) {
      console.error('加载数据失败:', error);
    } finally {
      setLoading(false);
    }
  };

  // 保存内容
  const saveContent = async () => {
    setSaveStatus('saving');
    try {
      const response = await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contentData),
      });

      if (response.ok) {
        setSaveStatus('success');
        setTimeout(() => setSaveStatus(''), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch (error) {
      setSaveStatus('error');
    }
  };

  // 保存知识库
  const saveKnowledgeBase = async () => {
    setSaveStatus('saving');
    try {
      const response = await fetch('/api/admin/knowledge-base', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(knowledgeBase),
      });

      if (response.ok) {
        setSaveStatus('success');
        setTimeout(() => setSaveStatus(''), 3000);
      } else {
        setSaveStatus('error');
      }
    } catch (error) {
      setSaveStatus('error');
    }
  };

  // 添加常见问题
  const addFaq = () => {
    if (newFaq.question && newFaq.answer) {
      setKnowledgeBase({
        ...knowledgeBase,
        faqs: [...knowledgeBase.faqs, { ...newFaq, id: Date.now() }],
      });
      setNewFaq({ question: '', answer: '' });
    }
  };

  // 删除常见问题
  const deleteFaq = (id) => {
    setKnowledgeBase({
      ...knowledgeBase,
      faqs: knowledgeBase.faqs.filter((faq) => faq.id !== id),
    });
  };

  // 登出
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push(`/${locale}/admin/login`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand via-brand-light to-brand-dark flex items-center justify-center">
        <div className="text-white text-xl">加载中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand via-brand-light to-brand-dark">
      {/* 顶部导航栏 */}
      <header className="bg-brand-dark/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Nexolve 管理后台</h1>
                <p className="text-xs text-gray-400">网站内容与知识库管理</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`/${locale}`}
                target="_blank"
                className="text-sm text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                查看网站
              </a>
              <button
                onClick={handleLogout}
                className="text-sm px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-300 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                退出登录
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <div className="container mx-auto px-6 py-8">
        {/* Tab 切换 */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
              activeTab === 'content'
                ? 'bg-accent text-white shadow-lg shadow-accent/30'
                : 'bg-brand-dark/30 text-gray-300 hover:bg-brand-dark/50'
            }`}
          >
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              网页内容管理
            </div>
          </button>
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`flex-1 py-4 px-6 rounded-xl font-semibold transition-all ${
              activeTab === 'knowledge'
                ? 'bg-accent text-white shadow-lg shadow-accent/30'
                : 'bg-brand-dark/30 text-gray-300 hover:bg-brand-dark/50'
            }`}
          >
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              聊天机器人知识库
            </div>
          </button>
        </div>

        {/* 保存状态提示 */}
        {saveStatus && (
          <div className={`mb-6 p-4 rounded-xl ${
            saveStatus === 'success' ? 'bg-green-500/10 border border-green-500/30 text-green-300' :
            saveStatus === 'error' ? 'bg-red-500/10 border border-red-500/30 text-red-300' :
            'bg-blue-500/10 border border-blue-500/30 text-blue-300'
          }`}>
            {saveStatus === 'success' && '✓ 保存成功！'}
            {saveStatus === 'error' && '✗ 保存失败，请重试'}
            {saveStatus === 'saving' && '⏳ 保存中...'}
          </div>
        )}

        {/* 内容管理面板 */}
        {activeTab === 'content' && (
          <div className="glass p-8 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              编辑网站内容
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  首页标题
                </label>
                <input
                  type="text"
                  value={contentData.heroTitle}
                  onChange={(e) => setContentData({ ...contentData, heroTitle: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="例如：Implementation • Automation • Results"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  首页副标题
                </label>
                <textarea
                  value={contentData.heroSubtitle}
                  onChange={(e) => setContentData({ ...contentData, heroSubtitle: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="例如：AI, automation, apps and digital implementation services..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  关于我们文本
                </label>
                <textarea
                  value={contentData.aboutText}
                  onChange={(e) => setContentData({ ...contentData, aboutText: e.target.value })}
                  rows="5"
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="输入关于公司的介绍文本..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  联系邮箱
                </label>
                <input
                  type="email"
                  value={contentData.contactEmail}
                  onChange={(e) => setContentData({ ...contentData, contactEmail: e.target.value })}
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="hello@nexolve.ai"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  onClick={saveContent}
                  className="btn btn-primary flex-1 py-3 font-semibold"
                >
                  保存更改
                </button>
                <button
                  onClick={loadData}
                  className="px-6 py-3 bg-brand-dark/50 hover:bg-brand-dark border border-gray-600/30 rounded-lg text-white transition-all"
                >
                  重置
                </button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                💡 提示：修改内容后需要保存才能生效。这些内容将更新到网站的多语言翻译文件中。
              </p>
            </div>
          </div>
        )}

        {/* 知识库管理面板 */}
        {activeTab === 'knowledge' && (
          <div className="space-y-6">
            {/* 系统提示词 */}
            <div className="glass p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                AI 助手角色设定
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  系统提示词（System Prompt）
                </label>
                <textarea
                  value={knowledgeBase.systemPrompt}
                  onChange={(e) => setKnowledgeBase({ ...knowledgeBase, systemPrompt: e.target.value })}
                  rows="6"
                  className="w-full px-4 py-3 bg-brand-dark/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent font-mono text-sm"
                  placeholder="例如：You are a helpful AI assistant for Nexolve..."
                />
                <p className="mt-2 text-xs text-gray-400">
                  这段文字定义了 AI 助手的角色和行为方式。它会影响聊天机器人如何回答用户问题。
                </p>
              </div>

              <button
                onClick={saveKnowledgeBase}
                className="mt-6 btn btn-primary w-full py-3 font-semibold"
              >
                保存系统提示词
              </button>
            </div>

            {/* 常见问题管理 */}
            <div className="glass p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                常见问题（FAQ）
              </h2>

              {/* 添加新问题 */}
              <div className="mb-6 p-6 bg-brand-dark/30 rounded-xl border border-gray-600/20">
                <h3 className="text-lg font-semibold text-white mb-4">添加新问题</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      问题
                    </label>
                    <input
                      type="text"
                      value={newFaq.question}
                      onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                      className="w-full px-4 py-3 bg-brand-dark/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="例如：Nexolve 提供哪些服务？"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      答案
                    </label>
                    <textarea
                      value={newFaq.answer}
                      onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                      rows="3"
                      className="w-full px-4 py-3 bg-brand-dark/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="输入详细的答案..."
                    />
                  </div>
                  <button
                    onClick={addFaq}
                    className="btn btn-primary w-full py-2"
                  >
                    添加问题
                  </button>
                </div>
              </div>

              {/* 问题列表 */}
              <div className="space-y-4">
                {knowledgeBase.faqs.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p>还没有添加常见问题</p>
                  </div>
                ) : (
                  knowledgeBase.faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="p-5 bg-brand-dark/30 rounded-xl border border-gray-600/20 hover:border-accent/30 transition-all"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white mb-2 flex items-start gap-2">
                            <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {faq.question}
                          </h4>
                          <p className="text-gray-300 text-sm ml-7">{faq.answer}</p>
                        </div>
                        <button
                          onClick={() => deleteFaq(faq.id)}
                          className="p-2 text-red-400 hover:bg-red-500/20 rounded-lg transition-all"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {knowledgeBase.faqs.length > 0 && (
                <button
                  onClick={saveKnowledgeBase}
                  className="mt-6 btn btn-primary w-full py-3 font-semibold"
                >
                  保存所有更改
                </button>
              )}
            </div>

            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-blue-300">
                💡 提示：常见问题会帮助 AI 更准确地回答用户查询。添加更多相关问题可以提高聊天机器人的服务质量。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
