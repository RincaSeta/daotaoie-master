$(function(){
  //sidebar tab
  $(".menu-link").click(function(){
    var dataLink = $(this).attr("data-link");

    $(".menu-link").removeClass("currentLink");
    $(".content").removeClass("currentContent");

    $(this).addClass("currentLink");
    $("."+dataLink).addClass("currentContent");

    $("."+dataLink+"TongQuanContent").addClass("currentTab");
    $("."+dataLink+"TongQuanTab").addClass("currentTabName");
  });

  // tab content
  $(".tab-name").click(function(){
    var dataList = $(this).attr("data-tabs");

    $(".tab-name").removeClass("currentTabName");
    $(".tab-content").removeClass("currentTab");

    $(this).addClass("currentTabName");
    $("."+dataList).addClass("currentTab");
  });

  //Collapsible
  // $(".collapsible").click(function(){
  //   var dataToggle = $(this).attr("data-toggle");
  //   $("."+dataToggle).toggleClass("dpn");
  // });

  // Nội dung dự án
  $(".dsDuAnLon").click(function(){
    var dataContent = $(this).attr("data-content");

    $("."+dataContent).css("display", "block");
    $(".layerDe").show();

    $("."+dataContent+"TongQuan").addClass("currentTabHuongDan");
  
  });

  //tab hướng dẫn dự án
  $(".tab-huongdan-name").click(function(){
    var dataListHuongDan = $(this).attr("data-tabs");

    $(".tab-huongdan-name").removeClass("currentTabName");
    $(".tab-huongdan-content").removeClass("currentTabHuongDan");

    $(this).addClass("currentTabName");
    $("."+dataListHuongDan).addClass("currentTabHuongDan");
  });


  //Close button
	$(".btn-close").click(function() {
    $(".huongDanDuAn").hide();
    $(".layerDe").hide();
	});

});