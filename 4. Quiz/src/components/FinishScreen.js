function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = Math.round((points / maxPossiblePoints) * 100);

  return (
    <p className="result">
      You Score <strong>{points} </strong> out of {maxPossiblePoints} points.
      That's {percentage}%!
    </p>
  );
}

export default FinishScreen;
