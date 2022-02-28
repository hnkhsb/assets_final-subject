$(function () {
  $("#slideContents").slick({
    // 自動再生
    autoplay: true,
    // 再生スピード
    autoplaySpeed: 5000, // ミリ秒
    // ページ遷移のスピード
    speed: 2000,
    // ページ送りの表示
    dots: false,
    // マウスホバー時にスライドを止めない
    pauseOnHover: false,
    // ドット選択時にスライドを止めない
    pauseOnFocus: false,
    // フェード
    fade: true,
    arrows: false,
    slidesToShow: 1,
    slideToScroll: 1,
  });

  //   ハンバーガーメニューーーーーーーーーーーーーーーーーー
  $("#menuBtn").on("click", function () {
    console.log("click!");
    $("#menuSlide").toggleClass("active");
    $("#menuBtnTop").toggleClass("active");
    $("#menuBtnUnder").toggleClass("active");
    $(".menu_filter").toggleClass("fade-in");
  });
  //  top-page_top-btn------
  $(".top_btn_car").hover(
    function () {
      $(".top_btn_car>img").attr("src", "icon/icon_903030.png");
    },
    function () {
      $(".top_btn_car>img").attr("src", "icon/icon_fff4e3.png");
    }
  );
  // pageTop------------------------------

  $("#pageTop > a").on("click", function () {
    console.log("click");

    // event.preventDefault();
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );

    // aタグの解除
    return false;
  });

  $(window).on("scroll", function () {
    const dy = $(this).scrollTop() + $(window).height();
    const newsPosY = $(".news > h1").offset().top + 40;
    const featurePosY = $(".feature > h1").offset().top + 40;
    const setPosY = $(".set > h1").offset().top + 40;
    const rankingPosY = $(".ranking > h1").offset().top + 40;
    const gearPosY = $(".gear > h1").offset().top + 40;
    const howtoPosY = $(".how-to > h1").offset().top + 40;

    // console.log(carPosY);
    // console.log(newsPosY);
    // console.log(featurePosY);
    // console.log(setPosY);
    // console.log(rankingPosY);
    // console.log(gearPosY);
    // console.log(howtoPosY);

    if (dy > newsPosY) {
      $(".news>.car-icon_btn_common").addClass("slide_btn");
      $(".news>ol").addClass("fade-in-left");
    }
    if (dy > featurePosY) {
      $("#pageTop").addClass("fade-in");
      $(".feature>ul").addClass("fade-in-left");
      $(".feature>.car-icon_btn_common").addClass("slide_btn");
    } else {
      $("#pageTop").removeClass("fade-in");
    }
    if (dy > setPosY) {
      $(".set>.car-icon_btn_common").addClass("slide_btn");
      $(".set>ul").addClass("fade-in-left");
    }
    if (dy > rankingPosY) {
      $(".ranking>.car-icon_btn_common").addClass("slide_btn");
    }
    if (dy > gearPosY) {
      $(".gear>.car-icon_btn_common").addClass("slide_btn");
    }
    if (dy > howtoPosY) {
      $(".how-to>.car-icon_btn_common").addClass("slide_btn");
    }
  });
  // top>news   モーダル------------------
  // ------------------------------
  const newsListArray = [
    ".news-modal_001",
    ".news-modal_002",
    ".news-modal_003",
  ];
  $(".news>ol>li").on("click", function () {
    const index = $(this).index();
    console.log(index + "番目のニュース");

    $(".modal-filter").addClass("active");
    $(newsListArray[index]).css("display", "block");

    $(".modal-filter").on("click", function () {
      $(".modal-filter").removeClass("active");
      $(newsListArray[index]).css("display", "none");
    });
  });

  // gear-page 絞り込み、並び替えモーダル-------------

  $("#itemFilterBtn").on("click", function () {
    $(".item-filter").addClass("active");
    $(".item_filter").addClass("active");
  });
  $(".item-filter>.close-btn").on("click", function () {
    $(".item-filter").removeClass("active");
    $(".item_filter").removeClass("active");
  });

  // tag___reset-------------
  // tag___reset-------------
  $("#tagResetBtn").on("click", function () {
    console.log("click!!!");

    $('input[name="tag"]')
      .removeAttr("checked")
      .prop("checked", false)
      .change();
  });
  // ハート
  //   ------------------------------
  $(".item-list .items_body .fa-heart").on("click", function () {
    console.log("heart!!!");
    $(this).toggleClass("far");
    $(this).toggleClass("fas");
  });

  $(".favorite").on("click", function () {
    // console.log("kurikku");
    var unfavoriteItem = $(".item-list:has(i.far)");

    $(unfavoriteItem).each(function () {
      $(this).toggleClass("un-favorite");
      // console.log(unfavoriteItem);
    });
    $(this).toggleClass("active");
  });
  // sortーーーーーーーーーーーーーーーーー-
  // sortーーーーーーーーーーーーーーーーー-
  $("#itemSortBtn").on("click", function () {
    $(".item-sort").toggleClass("active");
  });

  $("label[for='popular-rank']").on("click", function () {
    $(".items_ul").html(
      $(".item-list").sort(function (a, b) {
        console.log("sot11111111");

        var x = Number($(a).data("popular"));
        var y = Number($(b).data("popular"));
        // 昇順
        return x - y;
      })
    );
    $("#sortName").html("人気順");
    $(".item-list .items_body .fa-heart").on("click", function () {
      console.log("heart!!!");
      $(this).toggleClass("far");
      $(this).toggleClass("fas");
    });
  });
  $("label[for='price-low']").on("click", function () {
    $(".items_ul").html(
      $(".item-list").sort(function (a, b) {
        // 昇順
        console.log("sort_price-low");

        var x = Number($(a).data("price"));
        var y = Number($(b).data("price"));
        // 昇順
        return x - y;
        // 降順
        // return y - x;
      })
    );
    $("#sortName").html("安い順");
    $(".item-list .items_body .fa-heart").on("click", function () {
      console.log("heart!!!");
      $(this).toggleClass("far");
      $(this).toggleClass("fas");
    });
  });
  $("label[for='price-high']").on("click", function () {
    $(".items_ul").html(
      $(".item-list").sort(function (a, b) {
        // 昇順
        console.log("sort_price-high");

        var x = Number($(a).data("price"));
        var y = Number($(b).data("price"));
        // 昇順
        // return x - y;
        // 降順
        return y - x;
      })
    );
    $("#sortName").html("高い順");
    $(".item-list .items_body .fa-heart").on("click", function () {
      console.log("heart!!!");
      $(this).toggleClass("far");
      $(this).toggleClass("fas");
    });
  });

  // 〜〜〜〜〜〜ーーー
  $("input[name='sort']:radio").on("click", function () {
    var sortId = $(this).prop("id");

    $(".sort-box label[for=" + sortId + "]>i").css("color", "#fff4e3");
    $(".sort-box label i:not([for=" + sortId + "]>i)").css("color", "#265155");
    // }
  });
});
// **********

var searchBox = ".search-box"; // 絞り込む項目を選択するエリア
var listItem = ".item-list"; // 絞り込み対象のアイテム
var hideClass = "is-hide"; // 絞り込み対象外の場合に付与されるclass名

$(function () {
  // 絞り込み項目を変更した時
  $(document).on("change", searchBox + " input", function () {
    search_filter();
  });
});

/**
 * リストの絞り込みを行う
 */
function search_filter() {
  // 非表示状態を解除
  $(listItem).removeClass(hideClass);
  for (var i = 0; i < $(searchBox).length; i++) {
    var name = $(searchBox).eq(i).find("input").attr("name");
    // 選択されている項目を取得
    var searchData = get_selected_input_items(name);
    // 選択されている項目がない、またはALLを選択している場合は飛ばす
    if (searchData.length === 0 || searchData[0] === "") {
      continue;
    }
    // リスト内の各アイテムをチェック
    for (var j = 0; j < $(listItem).length; j++) {
      // アイテムに設定している項目を取得
      var itemData = $(listItem).eq(j).data(name);
      // 絞り込み対象かどうかを調べる
      if (searchData.indexOf(itemData) === -1) {
        $(listItem).eq(j).addClass(hideClass);
      }
    }
  }
}

// /**
//  * inputで選択されている値の一覧を取得する
//  * @param  {String} name 対象にするinputのname属性の値
//  * @return {Array}       選択されているinputのvalue属性の値
//  */
function get_selected_input_items(name) {
  var searchData = [];
  $("[name=" + name + "]:checked").each(function () {
    searchData.push($(this).val());
  });
  return searchData;
}
$(function () {
  // console.log(nameCategory);

  $("[name='category']:radio").change(function () {
    // var nameCategory = $("input[name='category']");

    var categoryId = $(this).prop("id");
    // console.log(categoryId);
    if ($(".category input[id=" + categoryId + "]").prop("checked") == true) {
      // console.log("true");

      $(".category label[for=" + categoryId + "]").addClass("active");
      $(".category label:not([for=" + categoryId + "])").removeClass("active");
    }
  });
  $("[name='tag']:checkbox").change(function () {
    // var nameCategory = $("input[name='category']");

    var tagId = $(this).prop("id");
    // console.log(categoryId);
    if ($(".tag input[id=" + tagId + "]").prop("checked") == true) {
      // console.log("true");

      $(".tag label[for=" + tagId + "]").addClass("active");
    } else {
      $(".tag label[for=" + tagId + "]").removeClass("active");
    }
  });
});
// ************
