import { ReactElement } from "react";

type HeadingProps = { title: string; name: string };

const Heading = ({ title, name }: HeadingProps): ReactElement => {
  return (
    <h1>
      {title} {name}{" "}
    </h1>
  );
};
export default Heading;
