export interface GeminiMessage {
  role: 'user' | 'model';
  content: string;
}

export async function chatWithGemini(
  messages: GeminiMessage[],
  apiKey: string,
  systemInstruction?: string
): Promise<string> {
  if (!apiKey) {
    throw new Error('API Key tidak ditemukan. Silakan masukkan di pengaturan.');
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  // Format the history for Gemini API
  const contents = messages.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  const payload: any = {
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 1000,
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
    return data.candidates[0].content.parts[0].text;
  } catch (error: any) {
    throw new Error(error.message || 'Gagal terhubung ke AI Tutor.');
  }
}
