import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ request }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center">
      {request.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
