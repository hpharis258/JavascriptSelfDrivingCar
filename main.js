const canvas = document.getElementById("screen");
canvas.width="200";

const context = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.9);
const car = new Car(road.getLaneCenter(1),100,30,50, "KEYS");
const traffic= [new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2)
];

function animate()
{
    for(let i =0; i <traffic.length; i++)
    {
        traffic[i].update(road.borders, []);
    }
    car.update(road.borders, traffic);
    canvas.height=window.innerHeight;
    context.save();
    context.translate(0,-car.y+canvas.height*0.7);
    road.drawRoad(context);
    for(let i =0; i<traffic.length; i++)
    {
        traffic[i].draw(context, "blue");
    }
    car.draw(context);
    context.restore();
    requestAnimationFrame(animate);
}

animate();