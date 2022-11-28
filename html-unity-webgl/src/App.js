import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./App.css"

function App() {
    
    const { unityProvider } = useUnityContext({
        loaderUrl: './CakeGameBuildTempMusic/Build/CakeGameBuildTempMusic.loader.js',
        dataUrl: './CakeGameBuildTempMusic/Build/CakeGameBuildTempMusic.data',
        frameworkUrl: './CakeGameBuildTempMusic/Build/CakeGameBuildTempMusic.framework.js',
        codeUrl: './CakeGameBuildTempMusic/Build/CakeGameBuildTempMusic.wasm',
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Cake Game",
        productVersion: "1.0",
    });
    const { unityProvider4 } = useUnityContext({
        loaderUrl: './CakeGBuild/Build/CakeGBuild.loader.js',
        dataUrl: './CakeGBuild/Build/CakeGBuild.data',
        frameworkUrl: './CakeGBuild/Build/CakeGBuild.framework.js',
        codeUrl: './CakeGBuild/Build/CakeGBuild.wasm',
    });
  const { unityProvider2 } = useUnityContext({
        loaderUrl: './CGBuild/Build/CGBuild.loader.js',
        dataUrl: './CGBuild/Build/CGBuild.data',
        frameworkUrl: './CGBuild/Build/CGBuild.framework.js',
        codeUrl: './CGBuild/Build/CGBuild.wasm',
    });
    

    
    return (<canvas id="unity-canvas" width="500px" height="500px" ><Unity unityProvider={unityProvider}/></canvas>);
}
export default App


