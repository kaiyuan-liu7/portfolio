document.addEventListener("DOMContentLoaded", function() {
    // 创建过渡元素
    const transitionElement = document.createElement('div');
    transitionElement.className = 'page-transition';
    document.body.appendChild(transitionElement);
    
    // 获取所有需要添加过渡效果的链接
    const links = document.querySelectorAll('a:not([target="_blank"]):not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"])');
    
    // 为每个链接添加点击事件
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是同一网站内的链接
            if (link.hostname === window.location.hostname) {
                e.preventDefault();
                const targetHref = link.href;
                
                // 显示过渡效果
                transitionElement.classList.add('active');
                
                // 等待过渡动画完成后再导航
                setTimeout(() => {
                    window.location.href = targetHref;
                }, 600); // 与CSS中的过渡时间匹配
            }
        });
    });
    
    // 页面加载完成后隐藏过渡效果
    window.addEventListener('pageshow', function() {
        transitionElement.classList.remove('active');
    });
}); 