import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs/promises';
import path from 'path';

// 加载知识库
async function loadKnowledgeBase() {
  const kbFile = path.join(process.cwd(), 'data', 'knowledge-base.json');
  try {
    const content = await fs.readFile(kbFile, 'utf-8');
    return JSON.parse(content);
  } catch {
    // 返回默认知识库
    return {
      systemPrompt: 'You are a helpful AI assistant for Nexolve, a digital solutions firm specializing in AI automation, web development, custom apps, blockchain compliance, digital marketing, and WeChat mini programs. You help visitors learn about our services and answer their questions professionally and concisely.',
      faqs: []
    };
  }
}

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // 加载知识库
    const kb = await loadKnowledgeBase();

    // 构建增强的系统提示词
    let systemPrompt = kb.systemPrompt;

    if (kb.faqs && kb.faqs.length > 0) {
      systemPrompt += '\n\nHere are some frequently asked questions you should be familiar with:\n\n';
      kb.faqs.forEach((faq, index) => {
        systemPrompt += `Q${index + 1}: ${faq.question}\nA${index + 1}: ${faq.answer}\n\n`;
      });
      systemPrompt += 'Use this information to provide accurate and helpful responses to user questions.';
    }

    // Convert messages to Anthropic format
    const anthropicMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1024,
      messages: anthropicMessages,
      system: systemPrompt,
    });

    return new Response(
      JSON.stringify({
        message: response.content[0].text
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to process chat message',
        details: error.message
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
