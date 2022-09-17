const ranking = () => {
    let url = "https://script.google.com/macros/s/AKfycbz5ZKUUjiWsWOMwhhfkP9oBWUX_mAK5iODRBCdhBH_RYpCPQB5wuLRuUHKqtv70n-s7/exec";

    // ウェブアプリの実行
    fetch(url) // グループ名とパスワードが一致するか確認
    .then(response => response.json())
    .then(data => { // 結果取得
        const mainArea = document.getElementById("main");
        addDiv(mainArea, null, (t) => {
            t.textContent = "Top 10";
        });
        const rankArea = addDiv(mainArea, "rank_area");
        const rank = addDiv(rankArea, "rank");
        const rankKanji = addDiv(rankArea, "rank");
        const rankPoint = addDiv(rankArea, "rank");

        rankSet(rank, rankKanji, rankPoint, data);
    });
}

const rankSet = (rank, rankKanji, rankPoint, data) => {
    for(let i = 0; i < data.length; i++){
        addDiv(rank, null, (t) => {
            t.textContent = i + 1 + ": ";
        });
        addDiv(rankKanji, null, (t) => {
            t.textContent = data[i].漢字;
        });
        addDiv(rankPoint, null, (t) => {
            t.textContent = data[i].ポイント + " point";
        });
    }
}