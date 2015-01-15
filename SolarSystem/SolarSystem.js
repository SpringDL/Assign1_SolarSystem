/// <reference path="C:\Users\Spring\Documents\GitHub\Assign1_SolarSystem\SolarSystem\SolarSystem\libs/three.min.js" />
//Filename: SolarSystem.js
//Author: Danny Luk - 300709186

//Global Variables
var scene, camera, renderer;
var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto;
var mercuryPivot, venusPivot, earthPivot, marsPivot, jupiterPivot, saturnPivot, uranusPivot, neptunePivot, plutoPivot;
var saturnRings;
var moon, moonPivot;
var sMoon1, sMoon2, sMoonPivot, sMoonPivot2;
var spinMoons = true;
var gui, controls;

//Initialize
function init() {
    //Create Gui + Controls
    initGuiControl();

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
    var sunGeometry = new THREE.SphereGeometry(50, 50, 50);
    var sunMaterial = new THREE.MeshLambertMaterial({ color: 0xFDB813 });
    sun = new THREE.Mesh(sunGeometry, sunMaterial);
    //Position Sun
    sun.position.set (0, 0, 0);
    //Add Sun to Scene
    scene.add(sun);

    //Create Pivot Points for Planets   >>  Different Pivots for Different Speeds
    mercuryPivot = new THREE.Object3D();
    sun.add(mercuryPivot);
    venusPivot = new THREE.Object3D();
    sun.add(venusPivot);
    earthPivot = new THREE.Object3D();
    sun.add(earthPivot);
    marsPivot = new THREE.Object3D();
    sun.add(marsPivot);
    jupiterPivot = new THREE.Object3D();
    sun.add(jupiterPivot);
    saturnPivot = new THREE.Object3D();
    sun.add(saturnPivot);
    uranusPivot = new THREE.Object3D();
    sun.add(uranusPivot);
    neptunePivot = new THREE.Object3D();
    sun.add(neptunePivot);
    plutoPivot = new THREE.Object3D();
    sun.add(plutoPivot);

    //Create Mercury
    var mercuryGeometry = new THREE.SphereGeometry(5, 20, 20);
    var mercuryMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 });
    mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
    //Position Mercury
    mercury.position.set(0, 0, -70);
    //Add Mercury to Scene
    scene.add(mercury);
    //Make Child of Pivot Point
    mercuryPivot.add(mercury);

    //Create Venus
    var venusGeometry = new THREE.SphereGeometry(10, 20, 20);
    var venusMaterial = new THREE.MeshLambertMaterial({ color: 0xFF9900 });
    venus = new THREE.Mesh(venusGeometry, venusMaterial);
    //Position Venus
    venus.position.set(0, 0, -100);
    //Add Venus to Scene
    scene.add(venus);
    //Make Child of Pivot Point
    venusPivot.add(venus);

    //Create Earth
    var earthGeometry = new THREE.SphereGeometry(10, 20, 20);
    var earthMaterial = new THREE.MeshLambertMaterial({ color: 0x0099FF });
    earth = new THREE.Mesh(earthGeometry, earthMaterial);
    //Position Earth
    earth.position.set(0, 0, -135);
    //Add Earth to Scene
    scene.add(earth);
    //Make Child of Pivot Point
    earthPivot.add(earth);

    //Create Mars
    var marsGeometry = new THREE.SphereGeometry(7, 20, 20);
    var marsMaterial = new THREE.MeshLambertMaterial({ color: 0xCC6600 });
    mars = new THREE.Mesh(marsGeometry, marsMaterial);
    //Position Mars
    mars.position.set(0, 0, -170);
    //Add Mars to Scene
    scene.add(mars);
    //Make Child of Pivot Point
    marsPivot.add(mars);

    //Create Jupiter
    var jupiterGeometry = new THREE.SphereGeometry(23, 20, 20);
    var jupiterMaterial = new THREE.MeshLambertMaterial({ color: 0xCCCC52 });
    jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
    //Position Jupiter
    jupiter.position.set(0, 0, -225);
    //Add Jupiter to Scene
    scene.add(jupiter);
    //Make Child of Pivot Point
    jupiterPivot.add(jupiter);

    //Create Saturn
    var saturnGeometry = new THREE.SphereGeometry(20, 20, 20);
    var saturnMaterial = new THREE.MeshLambertMaterial({ color: 0xFF8533 });
    saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    //Position Saturn
    saturn.position.set(0, 0, -310);
    //Add Saturn to Scene
    scene.add(saturn);
    //Make Child of Pivot Point
    saturnPivot.add(saturn);

    //Saturn's Rings
    var sRingGeometry = new THREE.RingGeometry(23, 35, 32);
    var sRingMaterial = new THREE.MeshBasicMaterial({ color: 0xFF8533 });
    saturnRings = new THREE.Mesh(sRingGeometry, sRingMaterial);
    saturnRings.rotation.set(0, 30.15, 0);
    scene.add(saturnRings);
    saturn.add(saturnRings);

    //Create Uranus
    var uranusGeometry = new THREE.SphereGeometry(18, 20, 20);
    var uranusMaterial = new THREE.MeshLambertMaterial({ color: 0x94FFB8 });
    uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
    //Position Uranus
    uranus.position.set(0, 0, -400);
    //Add Uranus to Scene
    scene.add(uranus);
    //Make Child of Pivot Point
    uranusPivot.add(uranus);

    //Create Neptune
    var neptuneGeometry = new THREE.SphereGeometry(19, 20, 20);
    var neptuneMaterial = new THREE.MeshLambertMaterial({ color: 0x0052CC });
    neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
    //Position Neptune
    neptune.position.set(0, 0, -475);
    //Add Neptune to Scene
    scene.add(neptune);
    //Make Child of Pivot Point
    neptunePivot.add(neptune);

    //Create Pluto
    var plutoGeometry = new THREE.SphereGeometry(5, 20, 20);
    var plutoMaterial = new THREE.MeshLambertMaterial({ color: 0xE0E0EB });
    pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
    //Position Pluto
    pluto.position.set(0, 0, -535);
    //Add Pluto to Scene
    scene.add(pluto);
    //Make Child of Pivot Point
    plutoPivot.add(pluto);



    //Setup Earth's Moon Orbit
    moonPivot = new THREE.Object3D();
    earth.add(moonPivot);

    //Create Earth's Moon
    var moonGeometry = new THREE.SphereGeometry(3, 20, 20);
    var moonMaterial = new THREE.MeshLambertMaterial({ color: 0x999999 });
    moon = new THREE.Mesh(moonGeometry, moonMaterial);
    //Position Earth's Moon
    moon.position.set(0, 0, -20);
    //Add Earth's Moon to Scene
    scene.add(moon);
    //Make Child of Pivot Point
    moonPivot.add(moon);



    //Setup Saturn's Moon Orbit
    sMoonPivot = new THREE.Object3D();
    saturn.add(sMoonPivot);
    sMoonPivot.rotation.x = 75;

    //Create Saturn's Moon
    var sMoon1Geometry = new THREE.SphereGeometry(4, 20, 20);
    var sMoon1Material = new THREE.MeshLambertMaterial({ color: 0x99FF99 });
    sMoon1 = new THREE.Mesh(sMoon1Geometry, sMoon1Material);
    //Position Saturn's Moon
    sMoon1.position.set(0, 0, -30);
    //Add Earth's Saturn to Scene
    scene.add(sMoon1);
    //Make Child of Pivot Point
    sMoonPivot.add(sMoon1);



    //Setup Saturn's Moon Orbit
    sMoonPivot2 = new THREE.Object3D();
    saturn.add(sMoonPivot2);
    sMoonPivot2.rotation.x = 80;

    //Create Saturn's Moon
    var sMoon2Geometry = new THREE.SphereGeometry(6, 20, 20);
    var sMoon2Material = new THREE.MeshLambertMaterial({ color: 0x6666FF });
    sMoon2 = new THREE.Mesh(sMoon2Geometry, sMoon2Material);
    //Position Saturn's Moon
    sMoon2.position.set(0, 0, 40);
    //Add Earth's Saturn to Scene
    scene.add(sMoon2);
    //Make Child of Pivot Point
    sMoonPivot2.add(sMoon2);





    //Position Camera
    camera.position.x = 0;
    camera.position.y = 550;
    camera.position.z = 0;
    camera.lookAt(scene.position);

    //Add Ambient Lighting
    var ambientLight = new THREE.AmbientLight(0x0c0c0c);
    scene.add(ambientLight);

    //Add Spotlight for lighting
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 500, 0);
    scene.add(spotLight);
    var spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set(0, 500, 1000);
    scene.add(spotLight2);
}

//
function animate() {
    mercuryPivot.rotation.y -= controls.rotationSpeed * 0.09;
    venusPivot.rotation.y -= controls.rotationSpeed * 0.08;
    earthPivot.rotation.y -= controls.rotationSpeed * 0.07;
    marsPivot.rotation.y -= controls.rotationSpeed * 0.06;
    jupiterPivot.rotation.y -= controls.rotationSpeed * 0.05;
    saturnPivot.rotation.y -= controls.rotationSpeed * 0.04;
    uranusPivot.rotation.y -= controls.rotationSpeed * 0.03;
    neptunePivot.rotation.y -= controls.rotationSpeed * 0.02;
    plutoPivot.rotation.y -= controls.rotationSpeed * 0.01;

    if (spinMoons) {
        moonPivot.rotation.y += 0.07;
        sMoonPivot.rotation.y += 0.09;
        sMoonPivot2.rotation.y += 0.05;
    }

    // render using requestAnimationFrame
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

//
function initGuiControl() {
    controls = new function () {
        this.rotationSpeed = 0.25;

        //
        this.moonRotation = function () {
            if (spinMoons) {
                spinMoons = false;
            } else if (!spinMoons) {
                spinMoons = true;
            }
        };
    }

    gui = new dat.GUI();
    gui.add(controls, 'rotationSpeed', -50.0, 50.0, 1);
    gui.add(controls, 'moonRotation');
}

//
window.onload = function () {
    init();
    createGeometry();
    animate();
};
