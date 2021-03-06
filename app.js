
const threeScene = new THREE.Scene();
threeScene.background = new THREE.Color(0x525b88);
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("canvas"),
});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
//create a sphere
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.MeshBasicMaterial({
    // color: 0xff0000,
    map: new THREE.TextureLoader().load(
      "https://dariush-hassani.github.io/react-threejs-globe/texture.png"
    ),
  })
);
threeScene.add(sphere);

const group = new THREE.Group();
group.add(sphere);
threeScene.add(group);
const starGeometry = new THREE.BufferGeometry();
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
});

const starVertices = [];
for (let i = 0; i < 10000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = (Math.random() - 0.5) * 2000;
  starVertices.push(x, y, z);
}
starGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starVertices, 3)
);

const stars = new THREE.Points(starGeometry, starMaterial);
threeScene.add(stars);
camera.position.z = 18;

const mouse = {
  x: undefined,
  y: undefined,
};
// const controls = new THREE.OrbitControls(camera, renderer.domElement);

// controls.autoRotate = true;
// controls.dispose();
// controls.update();
// controls.enableZoom = true;
// controls.maxDistance = 18;

function animate() {
  requestAnimationFrame(animate);
  if (camera.position.z >= 17) {
    sphere.rotation.y += 0.002;
  }
  // controls.update();
  renderer.render(threeScene, camera);
}
animate();
if (screen.width == 390) {
  gsap.to(camera.position, {
    z: 10,
    duration: 4,
    scrollTrigger: {
      trigger: ".full1",
      start: "top 100%",
      end: "top",
      scrub: 4,
      toggleActions: "restart none none none",
      pin: ".canvas",
      markers: {
        startColor: "purple",
        endColor: "fuchsia",
      },
    },
  });
} else {
  gsap.to(camera.position, {
    z: 6,
    duration: 4,
    scrollTrigger: {
      trigger: ".full1",
      start: "top 100%",
      end: "top",
      scrub: 4,
      toggleActions: "restart none none none",
      pin: ".canvas",
    },
  });
}

gsap.to(sphere.rotation, {
  y: 3.14,
  x: 0.4,
  duration: 4,
  scrollTrigger: {
    trigger: ".full1",
    start: "top 100%",
    end: "top",
    scrub: 4,
    toggleActions: "restart none none none",
    pin: ".canvas",
  },
});

