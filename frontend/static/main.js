import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );

const light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 50, 50, 50 );
scene.add( light );

const geometry = new THREE.CapsuleGeometry(1, 10, 20, 30)
const material = new THREE.MeshNormalMaterial();
const capsule = new THREE.Mesh(geometry, material);
capsule.translateY(-3)
scene.add(capsule);

camera.position.z = 5;
// const loader = new GLTFLoader();

// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
// loader.setDRACOLoader( dracoLoader );

// loader.load(
//     'Assets/SkeletonSprite.glb',
//     function(gltf){
//         scene.add(gltf.scene);
//         gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object
//     },
//     function(xhr){
//         if (xhr.total != xhr.loaded){
//             document.querySelector('.nav').classList.toggle("load");
//             document.querySelector('.content').classList.toggle("load");
//             document.querySelector('.loading').classList.toggle("load");

//         }

//         if (xhr.total == xhr.loaded){
//             document.querySelector('.nav').classList.toggle("load");
//             document.querySelector('.content').classList.toggle("load");
//             document.querySelector('.loading').classList.toggle("load");
//         }
//     },
//     function(error){
//         console.log(error);
//     }
// )

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();