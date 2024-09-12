// script.js
document.addEventListener("DOMContentLoaded", function() {
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    setTimeout(function() {
        splash.style.transition = 'opacity 1s';
        splash.style.opacity = 0;
    }, 2000); // 2秒間表示した後にフェードアウト開始

    setTimeout(function() {
        splash.style.display = 'none';
        mainContent.style.display = 'block';
    }, 3000); // フェードアウト完了後にメインコンテンツを表示
});
