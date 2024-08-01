function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percent = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percent > 90) {
    emoji = "🥇";
  } else if (percent > 80) {
    emoji = "🎉";
  } else if (percent > 60) {
    emoji = "👍";
  } else {
    emoji = "👎";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percent)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart QUIZ
      </button>
    </>
  );
}

export default FinishedScreen;
