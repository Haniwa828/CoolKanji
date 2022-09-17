const submitButton = () => {
    const mainArea = document.getElementById("main");
    addButton(mainArea, "submit", "button", (t) =>{ // ラベル
        t.textContent = "Submit";
        t.addEventListener('click', submitCheck); // クリック時のイベント追加
    });
    addDiv(mainArea, "submitting", (t) =>{ 
        t.textContent = "Submitting...";
        t.style.display = "none";
    });
}


const submitCheck = () => {
    const first = document.getElementsByName("most")[0].value;
    const second = document.getElementsByName("2nd")[0].value;
    const third = document.getElementsByName("3rd")[0].value;
    const error = document.getElementsByClassName("error")[0]; 
    
    const kanjiArray = recall();

    switch(true){
        case first == "notSelected": // 選択されてるか
        case second == "notSelected":
        case third == "notSelected":
        case first == second: // 被りがあるか
        case second == third:
        case third == first:
            error.style.display = "block";
            break;

        default:
            // URLの作成
            let url = "https://script.google.com/macros/s/AKfycbzXGiKLpsPiL96b-g4Km9J_El_0mHyef-b1xZ4WaJvXx31kVSsI51J2JqVyJFb36qZp/exec?array="
            url = url + kanjiArray.join() + "&first=" + first + "&second=" + second + "&third=" + third;

            const submitButton = document.getElementsByClassName("button");
            const submitting= document.getElementsByClassName("submitting");

            for(let i = 0; i < submitButton.length; i++){
                submitButton[i].style.display = "none";
            }
            submitting[0].style.display = "block";
            error.style.display = "none";

            // ウェブアプリの実行
            fetch(url) // グループ名とパスワードが一致するか確認
            .then(response => response.json())
            .then(data => { // 結果取得
                load();
            });
            break;
    }
}