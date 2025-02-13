import { useState } from "react";
import { Modal } from "../../ui/Modal/Modal";
import { TextArea } from "../../ui/TextArea/TextArea";
import { Button } from "../../ui/Button/Button";
import { fetchData } from "../../api/sentimentAnalysis";
import { sentimentDescriptions } from "../../utils/sentimentDescriptions";
import { MainViewDetails } from "../../ui/MainViewDetails/MainViewDetails";

interface AnalysisResult {
  label: "POSITIVE" | "NEGATIVE" | "NEUTRAL";
  score: number;
}

export const MainView: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  const handleOpenModal = async () => {
    if (!inputText) {
      setError(
        "Wprowadź tekst do analizy! Tekst powinien zawierać minimum 1, a maksimum 500 znaków.",
      );
      return;
    }

    setIsLoading(true);
    setIsModalOpen(true);
    setError(null);

    const { data, sentiment, error: apiError } = await fetchData(inputText);

    if (apiError) {
      setError(apiError);
    } else {
      setAnalysisResult({ label: sentiment, score: data[0]?.[0]?.score });
    }

    setIsLoading(false);
  };

  return (
    <>
      <TextArea
        placeholder="Wpisz tekst..."
        minLength={1}
        maxLength={500}
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />

      <Button onClick={handleOpenModal}>Analizuj</Button>

      <Modal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
          setAnalysisResult(null);
        }}
      >
        <h2>Twoja analiza</h2>
        {isLoading ? (
          <p>Proszę czekać, trwa analiza...</p>
        ) : error ? (
          <p>{error}</p>
        ) : analysisResult ? (
          <div>
            <span>{sentimentDescriptions[analysisResult.label].icon}</span>
            <p>{sentimentDescriptions[analysisResult.label].description}</p>
            {sentimentDescriptions[analysisResult.label].proTip && (
              <p>
                <strong>Pro Tip:</strong>
                {sentimentDescriptions[analysisResult.label].proTip}
              </p>
            )}
          </div>
        ) : (
          <p>Brak wyników analizy.</p>
        )}
        {analysisResult && (
          <MainViewDetails
            label={analysisResult.label}
            score={analysisResult.score}
          />
        )}
      </Modal>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};
