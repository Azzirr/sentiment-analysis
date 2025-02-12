import { useState } from "react";
import { Button } from "../Button/Button";

interface MainViewDetailsProps {
  label: "POSITIVE" | "NEGATIVE" | "NEUTRAL";
  score: number;
}

export const MainViewDetails: React.FC<MainViewDetailsProps> = ({
  label,
  score,
}) => {
  const [isDetails, setIsDetails] = useState<boolean>(false);

  const handleDetails = () => {
    setIsDetails(!isDetails);
  };

  return (
    <div>
      {isDetails ? (
        <div>
          <Button onClick={handleDetails}>Ukryj szczegóły</Button>
          <p>Label: {label}</p>
          <p>Score: {score}</p>
        </div>
      ) : (
        <Button onClick={handleDetails}>Pokaż szczegóły</Button>
      )}
    </div>
  );
};
