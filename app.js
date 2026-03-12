
window.addEventListener("scroll", () => {
  const header = document.getElementById("fixed-header");
  if (window.scrollY > 100) {
    header.style.transform = "translateY(0)";
    header.style.opacity = "1";
  } else {
    header.style.transform = "translateY(-100%)";
    header.style.opacity = "0";
  }
});

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target); // 一度表示したら監視解除
        }
      });
    }, {
      threshold: 0.2 // 20%見えたら発火
    });

    targets.forEach(target => observer.observe(target));
  });

  /* ===================================================
   Filtering Function (Pickup & News)
   =================================================== */
$(function () {
  // フィルタボタン（共通クラス）
  const $filterBtns = $(".pickup-filter-list li");

  // 対象アイテム（Pickupページ用とNewsページ用をまとめて取得）
  // ※ ページに存在しないクラスは無視されるのでエラーにはなりません
  const $allItems = $(".pickup-item, .news-archive-item");

  // ボタンクリック時の処理
  $filterBtns.on("click", function () {
    // 1. アクティブクラスの切り替え
    $filterBtns.removeClass("active");
    $(this).addClass("active");

    // 2. フィルタ値を取得 (all, column, report, notice, event)
    const filterValue = $(this).attr("data-filter");

    // 3. 表示切り替え
    if (filterValue === "all") {
      // "全て"なら全アイテムを表示
      $allItems.fadeIn(300);
    } else {
      // それ以外ならカテゴリが一致するものだけ表示
      $allItems.each(function () {
        const itemCategory = $(this).attr("data-category");
        if (itemCategory === filterValue) {
          $(this).fadeIn(300);
        } else {
          $(this).hide();
        }
      });
    }
  });
});
