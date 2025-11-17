import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const KB_FILE = path.join(process.cwd(), 'data', 'knowledge-base.json');

// 确保数据目录存在
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// 获取知识库
export async function GET() {
  try {
    await ensureDataDir();

    try {
      const content = await fs.readFile(KB_FILE, 'utf-8');
      return NextResponse.json(JSON.parse(content));
    } catch {
      // 如果文件不存在，返回默认内容
      const defaultKB = {
        systemPrompt: 'You are a helpful AI assistant for Nexolve, a digital solutions firm specializing in AI automation, web development, custom apps, blockchain compliance, digital marketing, and WeChat mini programs. You help visitors learn about our services and answer their questions professionally and concisely.',
        faqs: [
          {
            id: 1,
            question: 'Nexolve 提供哪些主要服务？',
            answer: 'Nexolve 提供六大核心服务：AI 自动化、网站与数字增长、定制应用开发、区块链合规、数字营销和微信小程序开发。我们专注于为企业提供可衡量 ROI 的数字化解决方案。'
          },
          {
            id: 2,
            question: '如何联系 Nexolve？',
            answer: '您可以通过邮箱 hello@nexolve.ai 联系我们，或者访问我们网站的联系页面填写表单。我们的团队会尽快回复您的咨询。'
          }
        ],
      };
      return NextResponse.json(defaultKB);
    }
  } catch (error) {
    console.error('Error reading knowledge base:', error);
    return NextResponse.json(
      { error: '读取知识库失败' },
      { status: 500 }
    );
  }
}

// 保存知识库
export async function POST(request) {
  try {
    await ensureDataDir();
    const kb = await request.json();

    await fs.writeFile(KB_FILE, JSON.stringify(kb, null, 2));

    return NextResponse.json({
      success: true,
      message: '知识库已保存'
    });
  } catch (error) {
    console.error('Error saving knowledge base:', error);
    return NextResponse.json(
      { error: '保存知识库失败' },
      { status: 500 }
    );
  }
}
