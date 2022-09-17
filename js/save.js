const save = (data) => {
    const savedData = JSON.stringify(data);
    sessionStorage.setItem("kanjiArray", savedData);

    console.log("保存成功");
}

const recall = () => {
    let getData = sessionStorage.getItem("kanjiArray");
    getData = JSON.parse(getData)

    return getData;
}