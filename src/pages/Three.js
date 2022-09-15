import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Three = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(30, 1);
      camera.position.set(0, 0, 5);
      const loader = new GLTFLoader();
      scene.background = new THREE.Color("white");
      const light = new THREE.DirectionalLight(0xffff00, 10);
      scene.add(light);

      loader.load("low_poly_building/scene.gltf", (gltf) => {
        scene.add(gltf.scene);
        renderer.render(scene, camera);
        console.log("asd", canvasRef);
      });
    }
  }, []);

  return <canvas ref={canvasRef} id="canvas" width="300" height="300"></canvas>;
};

export default Three;
