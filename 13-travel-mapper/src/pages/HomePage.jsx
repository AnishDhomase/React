import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>homepage</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default HomePage;
