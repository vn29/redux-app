import React, {Component} from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Mesh } from 'three'



export class ThreeWindow extends Component {
  constructor( props ) {
    super( props )
    this.state = {}
    this.handleChange   = this.handleChange.bind( this )
    
  }

  componentDidMount() {
    this.sceneSetup()
    this.addCustomSceneObjects()
    this.startAnimationLoop()
    window.addEventListener('resize', this.handleWindowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
    window.cancelAnimationFrame(this.requestID)
    this.controls.dispose()
  }

  handleWindowResize = () => {
    const width = this.el.clientWidth
    const height = this.el.clientHeight
    this.renderer.setSize( width, height )
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  sceneSetup = () => {
    const width = this.el.clientWidth
    const height = this.el.clientHeight
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.controls = new OrbitControls( this.camera, this.el )
    this.camera.position.z = 5
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize( 600, 600 )
    this.el.appendChild( this.renderer.domElement )
    this.handleWindowResize() //needed to add this special
  }

  addCustomSceneObjects = () => {
    const geometry = new THREE.BoxGeometry( 2, 2, 2)
    const material = new THREE.MeshPhongMaterial( { 
      color: 0x156289,
      emissive: 0x072534,
      side: THREE.DoubleSide,
      flatShading: true
    })
    this.cube = new THREE.Mesh( geometry, material )
    this.scene.add( this.cube )
    
    const lights = []
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 )
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 )
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 )

    lights[0].position.set(0,200,0)
    lights[1].position.set(100,200,100)
    lights[2].position.set(-100,-200,-100)

    this.scene.add( lights[ 0 ] )
    this.scene.add( lights[ 1 ] )
    this.scene.add( lights[ 2 ] )
  }

  startAnimationLoop = () => {
    this.renderer.render( this.scene, this.camera )
    this.requestID = window.requestAnimationFrame( this.startAnimationLoop)
  }

  handleChange(e) {
    e.preventDefault()
    if (e.target.name === "x") { 
      this.scene.children[0].scale.x = e.target.value
    }
    if (e.target.name === "y") { 
      this.scene.children[0].scale.y = e.target.value
    }
    if (e.target.name === "z") { 
      this.scene.children[0].scale.z = e.target.value
    }
      
  }

  render() {
    return(
      <div >
        <div ref={ref => ( this.el = ref )}  width="1000" height = "1000"/>
        <form>
        <input type="text" placeholder="10" name ="x" onChange={ this.handleChange }/>
          <input type="text" placeholder="10" name ="y" onChange={ this.handleChange }/>
          <input type="text" placeholder="10" name ="z" onChange={ this.handleChange }/>
        </form>
        
      </div>
    )
  }



}