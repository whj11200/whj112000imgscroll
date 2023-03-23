window.addEventListener('scroll', function() {
    var element = document.getElementById('element-id'); // 움직일 HTML 요소의 ID를 지정합니다.
    var scrollPosition = window.scrollY; // 현재 스크롤 위치를 가져옵니다.
    element.style.transform = 'translateY(' + scrollPosition + 'px)'; // translateX 또는 translateZ 등 다른 속성을 사용할 수도 있습니다.
  });