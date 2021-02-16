import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export default {
	name: 'animator',
	data() {
		return {
			cube: null,
			renderer: null,
			scene: null,
			camera: null
		}
	},
	methods: {
		init: function() {
			this.scene  = new THREE.Scene();
			this.camera = new THREE.PerspectiveCamera(
				75,
				window.innerWidth / window.innerHeight,
				0.1,
				1000
			);
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize(window.innerWidth, window.innerHeight);

			document.body.appendChild(this.renderer.domElement);

			const geometry = new THREE.BoxGeometry(1, 1, 1);
			const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

			this.cube = new THREE.Mesh(geometry, material);
			this.scene.add(this.cube);

			this.camera.position.z = 5;

			const animate = function() {}
		},
		animate: function() {
			requestAnimationFrame(this.animate);

			this.cube.rotation.x += 0.01;
			this.cube.rotation.y += 0.01;

			this.renderer.render(this.scene, this.camera);
		}
	}
}


/*export function createBoxRotationContext(container) {
	var ctx = new Object();
	ctx.init = function init() {
		ctx.container = container;
		ctx.camera    = new THREE.PerspectiveCamera(70, ctx.container.clientWidth / ctx.container.clientHeight, 0.01, 10);
		
		ctx.camera.position.z = 1;
		ctx.scene = new THREE.Scene();

		let geometry = new THREE.BoxGeometry(1, 1, 1);
		let material = new THREE.MeshNormalMaterial();
		ctx.box      = new THREE.Mesh(geometry, material);
		
		//ctx.fnhelper = new THREE.FaceNormalsHelper(ctx.box, 0,3, 0x0000ff, 0.1);
		ctx.axes     = new THREE.AxesHelper(5);

		ctx.scene.add(ctx.box);
		ctx.scene.add(ctx.axes);
		//ctx.scene.add(ctx.fnhelper);

		ctx.renderer = new THREE.WebGLRenderer({antialias: true});
		ctx.renderer.setSize(ctx.container.clientWidth, ctx.container.clientHeight);
		ctx.container.appendChild(ctx.renderer.domElement);
	},
	ctx.animate = function animate() {
		requestAnimationFrame(animate);
		ctx.box.rotation.x += 0.01;
		ctx.box.rotation.y += 0.02;
		//ctx.fnhelper.update();
		ctx.renderer.render(ctx.scene, ctx.camera);
	}
	return ctx;
};*/