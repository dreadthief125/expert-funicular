AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "./assets/car/scene.gltf" },
    rotationY: {type:"number", default:1}
  },
  tick: function() {
    // Do something when component first attached.
    this.data.rotationY=this.data.rotationY+1
    var rot=this.el.getAttribute('rotation')
    rot.y=this.data.rotationY
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute('rotation',{x:rot.x,y:rot.y,z:rot.z})
  }
});
