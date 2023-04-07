import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class OpenaiService {
  async fetchSummary(text: string): Promise<string> {
    // Replace this URL with the OpenAI API URL.
    const openaiApiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    // Replace this with your OpenAI API key.
    const openaiApiKey = process.env.OPENAI_API_KEY;
    const response = await fetch(openaiApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        prompt: `Summarize the following text: "${text}"`,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.7,
      }),
    });
    const data = await response.json();
    const summary = data.choices[0]?.text.trim() || 'No summary available.';
    return summary;
  }
}
