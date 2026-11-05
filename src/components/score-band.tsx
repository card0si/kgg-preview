export function ScoreBand() {
  return (
    <div className="score-band max-w-xl" role="img" aria-label="Score bands: early, developing, ready">
      <div className="score-band-track" />
      <div className="score-band-labels">
        <span>Early</span>
        <span>Developing</span>
        <span>Ready</span>
      </div>
      <span className="score-band-marker" hidden aria-hidden="true" />
    </div>
  );
}
