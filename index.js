class Cell {
    constructor(x,y, distance , path){
        this.x=x
        this.y=y
        this.distance=distance
        this.path=path
    }
}
function isInside(x, y) {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) return true;
    return false;
}

function knightMoves(initial , final) {
    let visited= new Array ()
    let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    let dy = [-1, -2, -2, -1, 1, 2, 2, 1];
    let queue= []
    queue.push(new Cell(initial[0], initial[1],0, [initial]));
    for (let i = 0; i < 8; i++) {
        visited[i] = new Array();
        for (let j = 0; j < 8; j++)
            visited[i][j] = false;
    }
    while(queue.length){
        let current = queue.shift();
        if (current.x==final[0] && current.y==final[1]){
            show(current.distance, current.path)
            return current.distance
        }
        for (let i = 0; i<8; i++){
            let x = current.x+dx[i];
            let y = current.y+dy[i];
            if (isInside(x, y) && !visited[x][y]){
                queue.push(new Cell (x , y, current.distance +1,current.path.concat([[x,y]])));

            }
        }
    }
}

function show(moves, path){
    console.log(`You made it in ${moves} moves!  Here's your path:`)
    path.forEach(pos=>{
        console.log(pos)
    })
}

knightMoves([0,0],[4,7])