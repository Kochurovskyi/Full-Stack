function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Wellcome to the React Quiz!</h2>
      <h3>We have {numQuestions} questions for you.</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Go!
      </button>
    </div>
  );
}

export default StartScreen;
