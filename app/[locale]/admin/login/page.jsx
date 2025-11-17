'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem('adminToken', data.token);
        // Redirect to admin dashboard
        router.push(`/${locale}/admin/dashboard`);
      } else {
        setError(data.error || '登录失败');
      }
    } catch (err) {
      setError('网络错误，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand via-brand-light to-brand-dark relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="absolute inset-0 pattern-dots opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="glass p-8 rounded-2xl shadow-2xl border border-white/10">
          {/* Logo 区域 */}
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-accent/10 rounded-xl mb-4">
              <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">管理员登录</h1>
            <p className="text-gray-300 text-sm">Nexolve 后台管理系统</p>
          </div>

          {/* 登录表单 */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
                管理员密码
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-brand-dark/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="请输入管理员密码"
                required
                disabled={loading}
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn btn-primary py-3 text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '登录中...' : '登录'}
            </button>
          </form>

          {/* 提示信息 */}
          <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
            <p className="text-xs text-gray-300 text-center">
              💡 提示：首次使用请通过环境变量 <code className="text-accent">ADMIN_PASSWORD</code> 设置管理员密码
            </p>
          </div>
        </div>

        {/* 返回首页链接 */}
        <div className="text-center mt-6">
          <a href={`/${locale}`} className="text-sm text-gray-300 hover:text-accent transition-colors inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回首页
          </a>
        </div>
      </div>
    </div>
  );
}
