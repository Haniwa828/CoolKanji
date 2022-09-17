// ロード直後に関数設置
(()=>{  
    // 漢字の設置
    window.addEventListener("DOMContentLoaded", () => {
        save(20, "fontSize");
        load();
    });
})();


const load = () => {
    const main = document.getElementById("main");

    while(main.firstChild){ // 子要素削除
        main.removeChild(main.firstChild);
    }

    const kanjiArray = kanji(recall("fontSize"));
    vote(kanjiArray);
    submitButton();
    save(kanjiArray, "kanjiArray");
}
 