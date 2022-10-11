import "./style.css";

// Dentro da função recebemos (props), porém estamos desestruturando esse objeto.
export const Card = ({ name, time }) => {
  return (
    <div className="card">
      <strong>{name}</strong>
      <small>{time}</small>
    </div>
  );
};
