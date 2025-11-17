import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'data', 'admin-content.json');

// 确保数据目录存在
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// 获取内容
export async function GET() {
  try {
    await ensureDataDir();

    try {
      const content = await fs.readFile(CONTENT_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(content));
    } catch {
      // 如果文件不存在，返回默认内容
      const defaultContent = {
        heroTitle: 'Implementation • Automation • Results',
        heroSubtitle: 'AI, automation, apps and digital implementation services delivering measurable ROI.',
        aboutText: 'Nexolve 是一家专注于数字化解决方案的公司，致力于通过 AI 自动化、网站开发、定制应用、区块链合规、数字营销和微信小程序等服务，帮助企业实现数字化转型。',
        contactEmail: 'hello@nexolve.ai',
      };
      return NextResponse.json(defaultContent);
    }
  } catch (error) {
    console.error('Error reading content:', error);
    return NextResponse.json(
      { error: '读取内容失败' },
      { status: 500 }
    );
  }
}

// 保存内容
export async function POST(request) {
  try {
    await ensureDataDir();
    const content = await request.json();

    await fs.writeFile(CONTENT_FILE, JSON.stringify(content, null, 2));

    return NextResponse.json({
      success: true,
      message: '内容已保存'
    });
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json(
      { error: '保存内容失败' },
      { status: 500 }
    );
  }
}
