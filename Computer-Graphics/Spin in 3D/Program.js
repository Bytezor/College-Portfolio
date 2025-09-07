'use strict'

let rx = 0;
let ry = 0;
let rz = 0;
let timer = null;
let Objects = []

function MakeItems() {
    let cx = canvas.width/2;
    let cy = canvas.height/2;

    let obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition","firstT", Stego_Triangles );
    obj.Viewport(0,0, cx, cy);
    obj.rotation = { x: 90, y: 190, z: 45 };
    obj.scale = { x: 1, y: 1, z: 1 };
    obj.translate = { x: 0, y: 0, z: 0 };
    obj.rotationPoint = { x: 0, y: 0, z: 0 };
    obj.rotateTranslate = { x: 0, y: 0, z: 0};
    obj.scaleModifier = 0.02;
    Objects.push(obj);

    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Tank_Triangles );
    obj.Viewport(cx,0, cx,cy);
    obj.rotation = { x: 0, y: -30, z: 0 };
    obj.scale = { x: 1, y: 1, z: 1 };
    obj.translate = { x: 0, y: -.25, z: 0 };
    obj.rotationPoint = { x: 0, y: 0, z: 0 };
    obj.rotateTranslate = { x: 0, y: 0, z: 0};
    obj.translateModifier = 0.01;
    Objects.push(obj);

    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Lizard_Triangles );
    obj.Viewport(cx,cy, cx,cy);
    obj.rotation = { x: -90, y: 0, z: 30 };
    obj.scale = { x: 1, y: 1, z: 1 };
    obj.translate = { x: 0, y: 0, z: 0 };
    obj.rotationPoint = { x: 0, y: 0, z: 0 };
    obj.rotateTranslate = { x: 0, y: 0, z: 0};
    Objects.push(obj);

    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",XWing_Triangles );
    obj.Viewport(0,cy, cx,cy);
    obj.rotation = { x: -70, y: 0, z: 60 };
    obj.scale = { x: 1, y: 1, z: 1 };
    obj.translate = { x: 0, y: 0, z: 0 };
    obj.rotationPoint = { x: 0, y: 0, z: 0 };
    obj.rotateTranslate = { x: 0, y: 0, z: 0};
    obj.translateModifier = 0.01;
    Objects.push(obj);

    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Plane_Triangles );
    obj.Viewport(cx,0, cx,cy);
    obj.rotation = { x: 90, y: 0, z: -90 };
    obj.scale = { x: 0.4, y: 0.4, z: 0.4 };
    obj.translate = { x: 0, y: 0.5, z: 0 };
    obj.rotationPoint = { x: 0, y: 0, z: 0 };
    obj.rotateTranslate = { x: 0, y: 0.5, z: 0};
    Objects.push(obj);

    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Plane_Triangles );
    obj.Viewport(cx,0, cx,cy);
    obj.rotation = { x: 90, y: 0, z: 90 };
    obj.scale = { x: 0.4, y: 0.4, z: 0.4 };
    obj.translate = { x: 0, y: 0.5, z: 0 };
    obj.rotationPoint = { x: 0, y: 0, z: 0 };
    obj.rotateTranslate = { x: 0, y: 0.5, z: 0};
    Objects.push(obj);

    obj = new Widget(canvas.GL(), canvas.Program(), 
                           "vPosition", "firstT",Dragon_Triangles );
    obj.Viewport(cx,0, cx,cy);
    obj.rotation = { x: 0, y: 0, z: 0 };
    obj.scale = { x: 0.3, y: 0.3, z: 0.3 };
    obj.translate = { x: 0, y: 0.5, z: 0 };
    obj.rotationPoint = { x: 0, y: 0, z: 0 };
    obj.rotateTranslate = { x: 0, y: 0, z: 0};
    obj.scaleModifier = 0.005;
    Objects.push(obj);
}

function SetUPItemTrans(obj) {
    let loc = canvas.GL().getUniformLocation(canvas.Program(), "midT");

    let trans = mat4(1);
    trans = mult(trans, translate(obj.rotationPoint.x, obj.rotationPoint.y, obj.rotationPoint.z));
    trans = mult(trans, translate(obj.translate.x, obj.translate.y, obj.translate.z));
    trans = mult(trans, rotate(rx + obj.rotation.x, [1,0,0]));
    trans = mult(trans, rotate(ry + obj.rotation.y, [0,1,0]));
    trans = mult(trans, rotate(rz + obj.rotation.z, [0,0,1]));
    trans = mult(trans, translate(-obj.rotationPoint.x, -obj.rotationPoint.y, -obj.rotationPoint.z));
    trans = mult(trans, translate(obj.rotateTranslate.x, obj.rotateTranslate.y, obj.rotateTranslate.z));
    trans = mult(trans, scalem(obj.scale.x, obj.scale.y, obj.scale.z));
    canvas.GL().uniformMatrix4fv(loc, false, flatten(trans))
}

function SetUP() {
    MakeItems();

    canvas.AddKeypress(Keypress);
    Reset();
}

function Reset() {
    rx = 0;
    ry = 0;
    rz = 0;
}

function Keypress(evnt) {
    if (evnt.key >= '0' && evnt.key <= '9') {
        ToggleItemVis(evnt.key-'0');
    } else {
       switch(evnt.key) {
          case 'x': ++rx; break;
          case 'X': --rx; break;
          case 'y': ++ry; break;
          case 'Y': --ry; break;
          case 'z': ++rz; break;
          case 'Z': --rz; break;
          case 'r': Reset(); break;
       }
    }

    Display();
}

function ToggleItemVis(id) {
    if (id < Objects.length) {
         if (Objects[id].Visible() ) {
	     Objects[id].Hide();
	 } else {
	     Objects[id].Show();
	 }
    }
}

function DisplayItem(item) {
    SetUPItemTrans(item);
    item.Display(canvas.GL());
}

function Display() {
    canvas.Clear();
    Objects.forEach(DisplayItem);
}

function ObjectsRotate() {
    Objects[0].scale.x += Objects[0].scaleModifier;
    Objects[0].scale.y += Objects[0].scaleModifier;
    Objects[0].scale.z += Objects[0].scaleModifier;
    Objects[1].translate.x += Objects[1].translateModifier;
    if (Objects[1].translate.x <= -0.5 || Objects[1].translate.x >= 0.5) {
        Objects[1].translateModifier *= -1
    }
    if (Objects[0].scale.x <= 0.5 || Objects[0].scale.x >= 1.5) {
        Objects[0].scaleModifier *= -1
    }
    Objects[2].rotation.z += 5;
    Objects[3].translate.y += Objects[3].translateModifier;
    if (Objects[3].translate.y <= -0.75 || Objects[3].translate.y >= 0.75) {
        Objects[3].translateModifier *= -1
    }
    Objects[4].rotation.z += 5;
    Objects[5].rotation.z += 5;
    Objects[6].rotation.y += 1;
    Objects[6].scale.x += Objects[6].scaleModifier;
    Objects[6].scale.y += Objects[6].scaleModifier;
    Objects[6].scale.z += Objects[6].scaleModifier;
    if (Objects[6].scale.x <= 0.1 || Objects[6].scale.x >= 0.5) {
        Objects[6].scaleModifier *= -1
    }
    Display();
}

function StartTicks() {
    timer = setInterval(ObjectsRotate, 50)
}

SetUP()
Display();
StartTicks();