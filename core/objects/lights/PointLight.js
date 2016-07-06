"use strict";

function PointLight(hex, intensity, distance, decay)
{
	THREE.PointLight.call(this, hex, intensity, distance, decay);

	this.name = "point_light";
	
	this.castShadow = true;

	this.shadow.camera.near = 0.01;
	this.shadow.camera.far = 50000;
	this.shadow.bias = 0.01;
}

//Function Prototype
PointLight.prototype = Object.create(THREE.PointLight.prototype);
PointLight.prototype.update = update;
PointLight.prototype.initialize = initialize;

//Initialize
function initialize()
{
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].initialize();
	}
}

//Update State
function update()
{
	for(var i = 0; i < this.children.length; i++)
	{
		this.children[i].update();
	}
}
