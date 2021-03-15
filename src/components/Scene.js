import React from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.myref = React.createRef();
  }
  componentDidMount() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      100,
      (window.innerWidth + 100) / (window.innerHeight - 100),
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ReinhardToneMapping;
    this.myref.current.appendChild(this.renderer.domElement);
    // this.props.myref.current &&
    //   this.props.myref.current.appendChild(this.renderer.domElement);

    const pointLight = new THREE.PointLight(0xffffff, 30, 200);
    pointLight.position.set(-10, 15, 10);
    this.scene.add(pointLight);

    let hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x212121, 5);
    this.scene.add(hemiLight);

    this.camera.position.z = 20;
    // this.camera.position.x = 10;
    // this.camera.rotation.y = -50;

    // const controls = new OrbitControls(this.camera, this.renderer.domElement);
    // controls.update();

    const loader = new GLTFLoader();
    let sc = this.scene;
    loader.load("./assets/techparkModelColored.glb", function (gltf) {
      let model = gltf.scene;
      model.position.set(13, 0, 0);
      model.rotation.y = -Math.PI / 3;

      gsap.from(model.position, { duration: 2, y: -15, ease: "elastic" });
      sc.add(model);
    });
    this.animate();
  }
  animate = () => {
    requestAnimationFrame(this.animate);
    this.renderer.render(this.scene, this.camera);
  };
  render() {
    return <div ref={this.myref} className="container"></div>;
  }
}

export default Scene;
