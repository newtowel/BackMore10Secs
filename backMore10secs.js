//クリックイベントを監視し、クリックしたものが「コメントの再生時間～」アイテムだったらページ内の「10秒戻す」ボタンをクリック
document.addEventListener('click', (e) => {
    if (e.target.className == 'ContextMenuItem' && e.target.innerHTML.includes('コメントの再生時間')) {
        document.getElementsByClassName('ActionButton ControllerButton PlayerSeekBackwardButton')[0].click();
    }
});