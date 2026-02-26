async function askAI(question) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_OPENAI_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    return "Sorry, I couldn't answer that.";
  }
}

async function sendQuestion() {
  const input = document.getElementById("chat-input").value;
  const response = await askAI(input);
  document.getElementById("chat-response").innerText = response;
}
