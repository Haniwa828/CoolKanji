// ロード直後に関数設置
(()=>{  
    // 漢字の設置
    window.addEventListener("DOMContentLoaded", () => {
        load();
    });
})();


const load = () => {
    const main = document.getElementById("main");

    while(main.firstChild){ // 子要素削除
        main.removeChild(main.firstChild);
    }

    const kanjiArray = kanji();
    vote(kanjiArray);
    submitButton();
    save(kanjiArray);
}
 