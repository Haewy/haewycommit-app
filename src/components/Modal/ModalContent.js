import dp01 from "../../assets/DP_01.png";

export default function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <img src="dp01" />
      <button onClick={onClose}>Close</button>
    </div>
  );
}
