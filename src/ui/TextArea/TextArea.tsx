import "./TextArea.css";

interface TextAreaProps {
  className?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({
  className,
  placeholder,
  maxLength,
  minLength,
  value,
  onChange,
}) => {
  return (
    <div className="textarea-container">
      <textarea
        className={`custom-textarea ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
      />
    </div>
  );
};
