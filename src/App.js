import { Allroutes } from "./routes/Allroutes";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="bg-default min-h-screen">
      <Header />
      <Allroutes />
    </div>
  );
}

export default App;
