$(function () {
  var $copyIcon = $(
    '<i class="fas fa-copy code_copy" title="copy" aria-hidden="true"></i>'
  );
  var $notice = $('<div class="codecopy_notice"></div>');

  $(".code-area").each(function () {
    $(this).prepend($copyIcon.clone());
    $(this).prepend($notice.clone());
  });

  $(".code-area .fa-copy").on("click", function () {
    var codeElement = $(this).siblings("pre").find("code")[0];
    if (!codeElement) return;

    var text = codeElement.innerText || codeElement.textContent;
    var $icon = $(this);

    navigator.clipboard
      .writeText(text)
      .then(function () {
        $icon
          .prev(".codecopy_notice")
          .text("COPY")
          .animate({ opacity: 1, top: 30 }, 450, function () {
            setTimeout(function () {
              $icon.prev(".codecopy_notice").animate({ opacity: 0, top: 0 }, 650);
            }, 400);
          });
      })
      .catch(function (err) {
        $icon
          .prev(".codecopy_notice")
          .text("COPY FAILED")
          .animate({ opacity: 1, top: 30 }, 650, function () {
            setTimeout(function () {
              $icon.prev(".codecopy_notice").animate({ opacity: 0, top: 0 }, 650);
            }, 400);
          });
        console.error("Copy failed", err);
      });
  });
});
