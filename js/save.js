const save = (data, situation) => {
    const savedData = JSON.stringify(data);
    switch(true){
        case situation == "fontSize":
            sessionStorage.setItem("fontSize", savedData);
            break;
        
        case situation == "kanjiArray":
            sessionStorage.setItem("kanjiArray", savedData);
            break;

        default:
            console.log("来たよ");
            break;
    }

    console.log("保存成功");
}

const recall = (situation) => {
    let getData;

    switch(true){
        case situation == "fontSize":
            getData = sessionStorage.getItem("fontSize");
            break;
        
        case situation == "kanjiArray":
            getData = sessionStorage.getItem("kanjiArray");
            break;

        default:
            console.log("来たよ");
            break;
    }

    getData = JSON.parse(getData)

    return getData;
}