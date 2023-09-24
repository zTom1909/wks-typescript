import ReactDOM from "react-dom";

interface AddProps {
  title: string;
}

function App({ title }: AddProps): JSX.Element {
  return <div>Henry Workshop - {title}</div>;
}

ReactDOM.render(<App title="Typescript" />, document.querySelector("#root"));
