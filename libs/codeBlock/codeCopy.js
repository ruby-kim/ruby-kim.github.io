// 클릭 이벤트 수정
$(".code-area .fa-copy").on("click", function () {
  const codeElement = $(this).siblings("pre").find("code")[0];
  const text = codeElement.innerText || codeElement.textContent;

  navigator.clipboard
    .writeText(text)
    .then(() => {
      $(this)
        .prev(".codecopy_notice")
        .text("COPY")
        .animate({ opacity: 1, top: 30 }, 450, () => {
          setTimeout(() => {
            $(this)
              .prev(".codecopy_notice")
              .animate({ opacity: 0, top: 0 }, 650);
          }, 400);
        });
    })
    .catch((err) => {
      $(this)
        .prev(".codecopy_notice")
        .text("复制失败")
        .animate({ opacity: 1, top: 30 }, 650, () => {
          setTimeout(() => {
            $(this)
              .prev(".codecopy_notice")
              .animate({ opacity: 0, top: 0 }, 650);
          }, 400);
        });
      console.error("Copy failed", err);
    });
});
