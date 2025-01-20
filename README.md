import Vex from 'vexflow';

// Create an SVG renderer and attach it to the DIV element named "boo"
const VF = Vex.Flow;
const div = document.getElementById("boo");
const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context
renderer.resize(500, 200);
const context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
const stave = new VF.Stave(10, 40, 400);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();
