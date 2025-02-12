export const fetchData = async (userInput: string) => {
  if (!userInput) return { error: "Wprowadź tekst do analizy!" };

  try {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: userInput }),
      },
    );

    if (!response.ok) {
      throw new Error("Błąd serwera!");
    }

    const data = await response.json();
    const sentiment = data[0]?.[0]?.label || "UNKNOWN";
    return { data, sentiment };
  } catch (error: any) {
    return { error: error.message || "Wystąpił nieoczekiwany błąd" };
  }
};
