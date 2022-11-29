createUnityInstance(document.querySelector("#unity-canvas"), {
  dataUrl: "Build/CakeGameDraft3.data",
  frameworkUrl: "Build/CakeGameDraft3.framework.js",
  codeUrl: "Build/CakeGameDraft3.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Cake Game",
  productVersion: "1.0",
  // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
  // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
});