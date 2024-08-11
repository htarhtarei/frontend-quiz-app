interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar = ({ value, max }:ProgressBarProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-purple-600 h-3 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
