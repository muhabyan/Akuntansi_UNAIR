export interface AIMessage {
  role: 'user' | 'model';
  content: string;
}

export async function chatWithAI(
  messages: AIMessage[],
  apiKey: string,
  systemInstruction?: string
): Promise<string> {
  if (!apiKey) {
    throw new Error('API Key tidak ditemukan. Silakan masukkan di pengaturan.');
  }

  const isGroq = apiKey.startsWith('gsk_');

  if (isGroq) {
    // Groq API (OpenAI Compatible)
    const endpoint = 'https://api.groq.com/openai/v1/chat/completions';
    
    const formattedMessages: any[] = [];
    if (systemInstruction) {
      formattedMessages.push({ role: 'system', content: systemInstruction });
    }
    messages.forEach(msg => {
      formattedMessages.push({
        role: msg.role === 'model' ? 'assistant' : 'user',
        content: msg.content
      });
    });

    const payload = {
      model: 'llama-3.3-70b-versatile',
      messages: formattedMessages,
      temperature: 0.7, // Increased temperature to prevent repetition loops
      presence_penalty: 0.6,
      frequency_penalty: 0.6,
      max_tokens: 512 // Limit output to prevent infinite loops
    };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error?.message || 'Terjadi kesalahan saat menghubungi API Groq.');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error: any) {
      throw new Error(error.message || 'Gagal terhubung ke AI Tutor (Groq).');
    }

  } else {
    // Gemini API
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

    const contents = messages.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const payload: any = {
      contents,
      generationConfig: {
        temperature: 0.7
      }
    };

    if (systemInstruction) {
      payload.systemInstruction = {
        parts: [{ text: systemInstruction }]
      };
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error?.message || 'Terjadi kesalahan saat menghubungi API Gemini.');
      }

      const data = await response.json();
      if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
        return data.candidates[0].content.parts.map((p: any) => p.text).join('');
      }
      return 'Respon kosong atau format tidak dikenali.';
    } catch (error: any) {
      throw new Error(error.message || 'Gagal terhubung ke AI Tutor (Gemini).');
    }
  }
}
