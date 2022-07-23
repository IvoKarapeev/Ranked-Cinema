import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";


function App() {
    return (
        <div>
            
            <main>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
