export const sentimentDescriptions: Record<
  string,
  { icon: string; description: string; proTip?: string }
> = {
  POSITIVE: {
    icon: "😊",
    description: "Tekst ma pozytywny wydźwięk.",
  },
  NEGATIVE: {
    icon: "😞",
    description: "Tekst ma negatywny wydźwięk.",
    proTip: "Spróbuj napisać swój tekst bardziej pozytywnie.",
  },
  NEUTRAL: {
    icon: "😐",
    description: "Tekst jest neutralny, nie wyraża skrajnych emocji.",
    proTip:
      "Możesz dodać trochę pozytywnych epitetów, aby stworzyć pozytywny tekst.",
  },
};
