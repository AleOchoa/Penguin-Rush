let p1
let p2
let lab
let pez
let nivel=1
let canvas=document.querySelector("canvas")
let ctx=canvas.getContext("2d")
let win=new Image()
 win.src="./Imagenes/winner.svg"
ctx.translate(300,300)
ctx.save()
let interval
let frames
let movimientos=[[],["r"],["u"],["l"],["d"],["l","r"],["u","d"],["r","d"],["r","u"],["l","u"],["l","d"],["l","r","u"],["l","u","d"],["r","u","d"],["l","r","d"]]
class Laberinto{
    constructor(){
        this.premio={
            x:0,
            y:0
        }
        this.inicio={
            x:0,
            y:0
        }
        this.angulo=0
        this.tablero=[]
        }
    getLab(){
        let opciones=[
            //Opcion1
            { 
                 premio:{
                     x:1,
                     y:5
                 },
                 inicio:{
                     x:6,
                     y:6
                 },
                 tablero:[[7,8,7,2,7,13,8],[5,10,9,7,9,3,3],[14,6,8,10,8,1,1],[3,7,11,7,9,10,11],[7,9,10,9,7,6,11],[14,8,7,8,5,1,5],[3,10,9,10,12,9,3]]
            },
            //Opcion 2
            { 
                 premio:{
                     x:3,
                     y:4
                 },
                 inicio:{
                     x:2,
                     y:0
                 },
                 tablero:[[7,8,4,13,6,6,8],[5,10,8,14,8,7,9],[3,1,10,9,3,10,8],[7,11,7,8,1,7,9],[5,14,9,10,9,10,8],[5,10,8,7,8,7,9],[10,2,10,9,10,12,2]]
            },
            //Opcion 3
            { 
                 premio:{
                     x:5,
                     y:0
                 },
                 inicio:{
                     x:3,
                     y:6
                 },
                 tablero:[[7,8,7,6,6,6,8],[5,3,5,7,8,7,11],[14,6,9,3,10,9,5],[10,8,7,8,7,8,3],[4,12,9,10,9,10,8],[1,7,8,7,8,7,9],[10,9,10,9,10,12,12]]
            },
            //Opcion 4
            { 
                 premio:{
                     x:6,
                     y:0
                 },
                 inicio:{
                     x:6,
                     y:5
                 },
                 tablero:[[7,6,6,6,6,13,2],[5,4,8,7,8,10,8],[14,8,14,9,10,8,5],[5,10,9,1,7,9,5],[10,6,6,9,10,8,5],[7,8,7,8,7,9,5],[3,10,9,10,9,4,9]]
            }
     ]
     let index=Math.floor(Math.random()*5)
     this.premio.x=opciones[index].premio.x
     this.premio.y=opciones[index].premio.y
     this.inicio.x=opciones[index].inicio.x
     this.inicio.y=opciones[index].inicio.y
     this.tablero=[...opciones[index].tablero]
    }
    rotate(){
        let rota=(Math.floor((Math.random()*3)+1)*90)
        this.angulo=(this.angulo+rota)%360
        ctx.rotate(rota*Math.PI/180)
    }
    draw() {
        ctx.clearRect(-300,-300,600,600)
        //laberinto
        ctx.fillStyle="#9CEAEF"
        ctx.lineWidth="5px"
        ctx.strokeStyle="#07BEB8"
        ctx.fillRect(-175,-175,350,350)
        ctx.strokeRect(-175,-175,350,350)
        for (let i=0;i<7;i++)
        {
            for (let j=0; j<7;j++)
            {
                this.draw2(i,j)
            }
        }

        //medio circulo superior
        ctx.beginPath()
        ctx.fillStyle="#07BEB8"
        ctx.moveTo(50,-175)
        ctx.lineTo(-50,-175)
        ctx .arc (0, -175, 50, 0, Math.PI, true)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        //triangulo direccion
        ctx.beginPath()
        ctx.fillStyle="#9CEAEF"
        ctx.moveTo(-20,-190)
        ctx.lineTo(20,-190)
        ctx.lineTo(0,-210)
        ctx.lineTo(-20,-190)
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }
    draw2(labx,laby){
        ctx.lineWidth="5px"
        ctx.strokeStyle="#07BEB8"
        ctx.beginPath()
        switch(this.tablero[labx][laby]) {
            case 1:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                break;
            case 2:
                ctx.moveTo(-175+(50*(labx)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*laby))
                break;
            case 3:
                ctx.moveTo(-175+(50*(labx)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*laby))
                break;
            case 4:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*(laby+1)))
                break;
            case 5:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx)),-175+(50*(laby+1)))
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*laby))    
                break;
            case 6:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*laby))
                ctx.moveTo(-175+(50*(labx)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx)),-175+(50*laby))
                break;
            case 7:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*(laby+1)))
                break;
            case 8:
                ctx.moveTo(-175+(50*(labx)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                break;
            case 9:
                ctx.moveTo(-175+(50*(labx)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*laby))
                break;
            case 10:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*laby))
                break;
            case 11:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx)),-175+(50*(laby+1)))
                break;
            case 12:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*(laby+1)))
                ctx.lineTo(-175+(50*(labx+1)),-175+(50*laby))
                break;
            case 13:
                ctx.moveTo(-175+(50*(labx)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*(laby+1)))
                break;
            case 14:
                ctx.moveTo(-175+(50*(labx+1)),-175+(50*laby))
                ctx.lineTo(-175+(50*(labx)),-175+(50*laby))
                break;
            default:
                break;

        }
        ctx.stroke()
        ctx.closePath()
    }

}



class Player{
    constructor(lx,ly,x0,y0,tipo){
        this.labx=lx,
        this.laby=ly,
        this.x=x0,
        this.y=y0,
        this.img=new Image()
        this.img.src="./Imagenes/4PINGUINOS.png"
        this.img.onload=()=>{
            this.draw()
        }
        this.tipo=tipo
        this.direccion='d'
       // this.moviendo=false

    }
    draw(){
        let tipo2
        switch (this.direccion) {
            case 'd':
                tipo2=0
                break;
            case 'u':
                tipo2=3
                break;
            case 'r':
                tipo2=2
                break;
            case 'l':
                tipo2=1
                break;
            default:
                break;
        }
        ctx.drawImage(this.img,(150*this.tipo)+100,tipo2*50,50,50,this.x,this.y,40,40)
    }
    moveLeft(){
        this.x-=50
        this.labx--
    }
    moveRight(){
        this.x+=50
        this.labx++
    }
    moveUp(){
        this.y-=50
        this.laby--
    }
    moveDown(){
        this.y+=50
        this.laby++
    }
}
class Premio{
    constructor(x0,y0){
        this.labx=x0
        this.laby=y0
        this.width=40
        this.heigth=40
        this.img=new Image()
        this.img.src="./Imagenes/PEZ.svg"
        this.img.onload=()=>{
            this.draw()
        }
    }
    draw(){
        ctx.drawImage(this.img,-175+(this.labx*50),-175+(this.laby*50),this.width,this.heigth)
    }

}
function winner(){
    let w1=p1.labx===pez.labx && p1.laby===pez.laby
    let w2=p2.labx===pez.labx && p2.laby===pez.laby
    if (w1===true) {
        if (w2===true) {
            return "draw"
        }
        else {
            return "player1"
        }
    }
    else {
        if (w2===true) {
            return "player2"
        }
        else {
            return "no winner"
        }

    }
}

function update(){
frames++
lab.draw()
pez.draw()
p1.draw()
p2.draw()
if (frames%(100*(5.5-(1.5*nivel)))===0) {
    lab.rotate()
} 
switch (winner()) {
    case 'no winner':
        break;
    case 'player1':
        clearInterval(interval)
        interval=undefined 
        modifAngulo()      
        ctx.clearRect(-300,-300,600,600)
        ctx.drawImage(win,-100,-100,200,200)
        ctx.drawImage(p1.img,(150*p1.tipo)+100,0,48,48,-45,-100,100,100)
        ctx.font="48px serif"
        ctx.fillStyle="red"
        ctx.fillText('Player 1',-80,140,200)
        break;
    case 'player2':
        clearInterval(interval) 
        interval=undefined
        modifAngulo()      
        ctx.clearRect(-300,-300,600,600)
        ctx.drawImage(win,-100,-100,200,200)
        ctx.drawImage(p2.img,(150*p2.tipo)+100,0,48,48,-35,-100,100,100)
        ctx.font="48px serif"
        ctx.fillStyle="red"
        ctx.fillText('Player 2',-80,140,200)
        break;
    case 'draw':
        clearInterval(interval)
        interval=undefined 
        modifAngulo()      
        ctx.clearRect(-300,-300,600,600)
        ctx.drawImage(p1.img,(150*p1.tipo)+100,100,48,48,-60,-100,100,100)
        ctx.drawImage(p2.img,(150*p2.tipo)+100,50,48,48,5,-100,100,100)
        ctx.font="48px serif"
        ctx.fillStyle="red"
        ctx.fillText('Draw',-40,140,200)
        break;
    }
}
function modifAngulo(){
    switch (lab.angulo) {
        case 0:
            ctx.rotate(0*Math.PI/180)
            break;
        case 90:
            ctx.rotate(270*Math.PI/180)
            break;
        case 180:
            ctx.rotate(180*Math.PI/180)
            break;
        case 270:
            ctx.rotate(90*Math.PI/180)
            break;
    }
}
function start(){
    if (interval) return
    ctx.restore()
    frames=0
    lab=new Laberinto()
    lab.getLab()
    p1=new Player(lab.inicio.x,lab.inicio.y,-175+(lab.inicio.x*50),-175+(lab.inicio.y*50),0)
    p2=new Player(lab.inicio.x,lab.inicio.y,-175+(lab.inicio.x*50),-175+(lab.inicio.y*50),1)
    pez=new Premio(lab.premio.x,lab.premio.y)
    lab.draw()
    p1.draw()
    p2.draw()
    pez.draw()
    interval=setInterval(update,1000/50)
}


  document.addEventListener('keydown', ({ keyCode }) => {
    switch (keyCode) {
        case 37:
            if (p1.labx>0 && movimientos[lab.tablero[p1.labx][p1.laby]].includes('l') && !p1.moviendo){
            p1.direccion='l'
            //framesP1=1
            //p1.moviendo=true
            //intervalP1=setInterval(p1.moveLeft,1000/50)
            p1.moveLeft()
            }
            break;
        case 38:
               if (p1.laby>0 && movimientos[lab.tablero[p1.labx][p1.laby]].includes('u') && !p1.moviendo){
               p1.direccion="u"
               p1.moveUp()
            }
               break;
        case 39:
                if (p1.labx<6 && movimientos[lab.tablero[p1.labx][p1.laby]].includes('r') && !p1.moviendo){
                p1.direccion="r"
                p1.moveRight()
             }
             break;
        case 40:
                if (p1.laby<6 && movimientos[lab.tablero[p1.labx][p1.laby]].includes('d') && !p1.moviendo){
                p1.direccion="d"
                p1.moveDown()
             }
                break;
        case 65:
            if (p2.labx>0 && movimientos[lab.tablero[p2.labx][p2.laby]].includes('l') && !p2.moviendo){
            p2.direccion='l'
            p2.moveLeft()
            }
            break;
        case 87:
               if (p2.laby>0 && movimientos[lab.tablero[p2.labx][p2.laby]].includes('u') && !p2.moviendo){
               p2.direccion="u"
               p2.moveUp()
            }
               break;
        case 68:
                if (p2.labx<6 && movimientos[lab.tablero[p2.labx][p2.laby]].includes('r') && !p2.moviendo){
                p2.direccion="r"
                p2.moveRight()
             }
             break;
        case 83:
                if (p2.laby<6 && movimientos[lab.tablero[p2.labx][p2.laby]].includes('d') && !p2.moviendo){
                p2.direccion="d"
                p2.moveDown()
             }
                break;
            }
  })

  window.onload = function() {
    document.getElementById("start-button").onclick = function() {
      start();
    }
    document.getElementById("beginner").onclick = function() {
        if (interval) return
        nivel=1;
        document.getElementById("nivel").innerText="Beginner"
      }
    document.getElementById("normal").onclick = function() {
        if (interval) return
        nivel=2;
        document.getElementById("nivel").innerText="Normal"
      }
    document.getElementById("expert").onclick = function() {
        if (interval) return
        nivel=3;
        document.getElementById("nivel").innerText="Expert"
      }
    

    let ini=new Image()
    ini.src="./Imagenes/pinguino.svg"
    ini.onload = function(){
        ctx.drawImage(ini, -100,-100,200,200);
      }
  } 