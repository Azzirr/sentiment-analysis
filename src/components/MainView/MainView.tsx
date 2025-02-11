import { Modal } from "../../ui/Modal/Modal";
import { TextArea } from "../../ui/TextArea/TextArea";

export const MainView: React.FC = () => {
  return (
    <>
      <TextArea placeholder="Wpisz tekst..." minLength={1} maxLength={500} />
      <Modal>
        <h2>Twoja analiza</h2>
        <p>Negative/Positive/Neutral</p>
      </Modal>
    </>
  );
};
