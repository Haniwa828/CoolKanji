// div追加
const addDiv = (parentDiv, className = null, callBack = null) => { // 引数に=をつけることでデフォルトの値設定
    const newElm = document.createElement("div");

    newElm.classList.add(className);
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentDiv.appendChild(newElm);

    return newElm;
}

// select追加
const addSelect = (parentDiv, name, className = null, callBack = null) => {
    const newElm = document.createElement("select");

    newElm.name = name;
    newElm.classList.add(className);
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentDiv.appendChild(newElm);

    return newElm;
}

// option追加
const addOption = (parentDiv, value, className = null, callBack = null) => {
    const newElm = document.createElement("option");

    newElm.value = value;
    newElm.classList.add(className);
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentDiv.appendChild(newElm);

    return newElm;
}

// button追加
const addButton = (parentDiv, type, className = null, callBack = null) => {
    const newElm = document.createElement("button");

    newElm.type = type;
    newElm.classList.add(className);
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentDiv.appendChild(newElm);

    return newElm;
}






// details追加
const addDetails = (parentDiv, id, className = null, callBack = null) => {
    const newElm = document.createElement("details");

    newElm.id = id;
    newElm.classList.add(className);
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentDiv.appendChild(newElm);

    return newElm;
}

// summary追加
const addSummary = (parentDiv, caption, className = null, callBack = null) => {
    const newElm = document.createElement("summary");
    
    newElm.textContent = caption;
    newElm.classList.add(className);
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentDiv.appendChild(newElm);
}

// label追加
const addLabel = (parentDiv, target, value = null, className = null, callBack = null) => {
    const newElm = document.createElement("label");
    
    newElm.textContent = value;
    newElm.htmlFor = target;
    newElm.classList.add(className);
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentDiv.appendChild(newElm);
}

// input追加
const addInput = (parentDiv, id, inputType, value = null, className = null, fileType = null, callBack = null) => {
    const newElm = document.createElement("input");
    
    newElm.id = id;
    newElm.type = inputType;
    newElm.value = value;
    newElm.accept = fileType;
    newElm.classList.add(className);
    if(callBack && typeof(callBack) === "function") callBack(newElm);
    
    parentDiv.appendChild(newElm);

    return newElm;
}