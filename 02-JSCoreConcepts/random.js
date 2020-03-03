let randomRange = (min, max) =>{
    return Math.floor(Math.random() * (max - min) ) + min;
}

let showRandomTab = () =>{
    let arr = []
    for(let i = 0; i < 10; i++){
        arr.push(randomRange(5, 20))
    }

    console.log(arr)
}

showRandomTab()