// メニューの表示/非表示を切り替える関数
function toggleMenu() {
  var navigation = document.getElementById("navigation");
  if (navigation.style.display === "block") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "block";
  }
}
