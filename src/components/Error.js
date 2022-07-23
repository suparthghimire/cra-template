export default function ErrorComponent(props) {
  const { errors, parent } = props;
  return (
    <ul className="mt-2 list-unstyled">
      {errors.map((err, i) => (
        <li key={`error-${parent}-${i}`}>
          <SingleError text={err}></SingleError>
        </li>
      ))}
    </ul>
  );
}

function SingleError(props) {
  const { text } = props;
  return <span className="text-danger fst-italic">{text}</span>;
}
