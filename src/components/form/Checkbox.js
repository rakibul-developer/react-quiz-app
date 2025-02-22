export default function Checkbox({ className, levelFor, text, ...rest }) {
  return (
    <label className={className} for={levelFor}>
      <input {...rest} />
      <span> {text} </span>
    </label>
  );
}
