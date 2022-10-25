//
// circular-list
// todo
//

class Circular {//  constructor(){}
    previous(){
        return this;
    }
    next(){
        return this;
    }

    retrieve(){
        return this;
    }//search
    insert(){
        return this;
    }
    delete(){
        return this;
    }
}

let l = new Circular()
l.next()
