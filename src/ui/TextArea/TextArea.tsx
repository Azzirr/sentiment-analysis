import { useState } from "react";
import "./TextArea.css";

interface TextAreaProps {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  placeholder,
  maxLength,
  minLength,
}) => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="textarea-container">
      <textarea
        className={`custom-textarea ${className}`}
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
};
