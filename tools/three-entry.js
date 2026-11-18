// 童年夏日棉花糖（index.html）用到的 Three.js 與 addon，打包成 vendor/three-bundle.min.js
// 重新打包：在 tools 資料夾執行 npm install 後 npm run build
export * from 'three';
export { OrbitControls } from 'three/addons/controls/OrbitControls.js';
export { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
export { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
export { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
export { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
export { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
export { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
