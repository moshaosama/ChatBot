export const SayHello = async () => {
  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "You are a friendly and funny assistant who replies like a human and uses humor when appropriate.",
          },
          {
            role: "user",
            content: "can you say hello to me? on short text",
          },
        ],
        max_tokens: 200,
      }),
    }
  );

  return response.json();
};
