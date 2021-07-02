class rope {

    constructor(a,b){

        var opstions={
            bodyA:a,
            bodyB:b,
            length:10,
            stiffness:0.04

        }

          this.sling= Constraint.create(opstions)
          World.add(world,this.sling)
    }
     
    display(){
       
       line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,
        this.sling.bodyB.position.x,this.sling.bodyB.position.y)


    }
    
}