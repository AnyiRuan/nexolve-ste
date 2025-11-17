import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { password } = await request.json();

    // 从环境变量获取管理员密码，默认为 'nexolve2025'
    const adminPassword = process.env.ADMIN_PASSWORD || 'nexolve2025';

    if (password === adminPassword) {
      // 生成简单的 token (实际生产环境应该使用 JWT)
      const token = Buffer.from(`admin:${Date.now()}`).toString('base64');

      return NextResponse.json({
        success: true,
        token,
        message: '登录成功'
      });
    } else {
      return NextResponse.json(
        { error: '密码错误，请重试' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: '服务器错误' },
      { status: 500 }
    );
  }
}
