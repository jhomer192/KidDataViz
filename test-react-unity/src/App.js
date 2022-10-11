import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";


function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/crateclickerloader.js",
    dataUrl: "build/crateclicker.data",
    frameworkUrl: "build/crateclicker.framework.js",
    codeUrl: "build/crateclicker.wasm",
  });
  return (
    <div>
      <Unity unityProvider={unityProvider} />
    </div>
  );
}
export default App;
