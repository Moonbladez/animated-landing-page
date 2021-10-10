//MODULES
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

//COMPONENTS
import { Earth } from "./Components/Earth";
import { CallToAction } from "./Components/CallToAction";

//STYLING
import "./App.css";
import styled from "styled-components";

const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

function App() {
    return (
        <CanvasContainer>
            <CallToAction />
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    );
}

export default App;
