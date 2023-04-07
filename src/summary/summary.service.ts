import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SummaryService {
  async summarize(text: string): Promise<string> {
    // Call the OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: `Summarize the following text: "${text}"`,
        max_tokens: 50,
        n: 1,
        stop: null,
        temperature: 0.5,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      },
    );

    return response.data.choices[0].text.trim();
  }
}