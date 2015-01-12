/// <reference path="C:\Users\Spring\Documents\GitHub\Assign1_SolarSystem\SolarSystem\SolarSystem\libs/three.min.js" />
//Filename: SolarSystem.js
//Author: Danny Luk - 300709186

//Global Variables
var scene, camera, renderer;
var sun, mercury;
var mercuryPivot;

//Initialize
function init() {
    //Create Scene
    scene = new THREE.Scene();

    //Create Camera
    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

    //Create and Set Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    //Add renderer output to Html element
    document.body.appendChild(renderer.domElement);
}

//
function createGeometry() {
    //Create Sun
    var sunGeometry = new THREE.SphereGeometry(20, 20, 20);
    var sunMaterial = new THREE.MeshLambertMaterial({ color: 0xfdb813 });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    //Position Sun
    sun.position.set (0, 0, 0);
    //Add Sun to Scene
    scene.add(sun);

    //Create Pivot Points for Planets
    mercuryPivot = new THREE.Object3D();
    sun.add(mercuryPivot);

    //Create Mercury
    var mercuryGeometry = new THREE.SphereGeometry(5, 20, 20);
    var mercuryMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 });
    mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    //Position Mercury
    mercury.position.set(0, 0, -40);
    //Add Mercury to Scene
    scene.add(mercury);
    //Make Child of Pivot Point
    mercuryPivot.add(mercury);






    //Position Camera
    camera.position.x = 0;
    camera.position.y = 150;
    camera.position.z = 0;
    camera.lookAt(scene.position);

    //Add Ambient Lighting
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    //Add Spotlight for lighting
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 1000, 0);
    scene.add(spotLight);
}

//
function animate() {
    mercuryPivot.rotation.y -= 0.01;

    // render using requestAnimationFrame
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

//
window.onload = function () {
    init();
    createGeometry();
    animate();
};
