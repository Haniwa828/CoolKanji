const vote = (kanjiArray) => { // 投票エリア設置
    const mainArea = document.getElementById("main");
    addDiv(mainArea, "error", (t) =>{ // エラーメッセージ
        t.textContent = "Select all options without overlap.";
        t.style.color = "#ff0000";
        t.style.display = "none";
    }); // 選択肢用
    const voteArea = addDiv(mainArea, "vote_area"); // エリア全体
    const voteText = addDiv(voteArea, "vote_text"); // テキスト用
    const voteOption = addDiv(voteArea, "vote_option"); // 選択肢用
    

    voteSet(voteText, voteOption, kanjiArray, "most");
    voteSet(voteText, voteOption, kanjiArray, "2nd");
    voteSet(voteText, voteOption, kanjiArray, "3rd");
}

const voteSet = (voteText, voteOption, kanjiArray, rank) => {
    addDiv(voteText, "option_label", (t) =>{ // ラベル
        t.textContent = `Choose the ${rank} coolest Kanji:　`;
    });

    const options = addSelect(voteOption, rank, "vote_option_top"); // 選択肢
    addOption(options, "notSelected", "options", (t) => { // デフォルト
        t.textContent = "Select";
    });

    for(let i = 0; i < kanjiArray.length; i++){ // 設置
        addOption(options, kanjiArray[i], "options", (t) => {
            t.textContent = String(i + 1) + ": " + kanjiArray[i];
        });
    }
}