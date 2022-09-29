import "./ItemCount.scss";

export const DetailCount = ({ max, counter, setCounter, handleAgregar }) => {
  const handleSumar = () => {
    if (counter < max) setCounter(counter + 1);
  };

  const handleRestar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <hr />
      <button
        onClick={handleRestar}
        className={`btn ${counter === 0 ? "btn-danger" : "btn-success"} ${counter === 0 ? 'counter-disabled' : ''}`}
      >
        -
      </button>
      <span className="mx-2">{counter}</span>
      <button
        onClick={handleSumar}
        className={`btn ${counter === max ? "btn-danger" : "btn-success"}`}
        disabled={counter === max}
      >
        +
      </button>
      <hr />
      <button onClick={handleAgregar} className={`btn ${counter === 0 ? "btn-danger" : "btn-primary"} ${counter === 0 ? 'counter-disabled' : ''}`}>Comprar</button>
    </>
  );
};
