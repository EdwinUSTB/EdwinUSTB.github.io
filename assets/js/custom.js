// 自定义JavaScript - 修复新闻图片尺寸问题
document.addEventListener('DOMContentLoaded', function() {
    // 修复新闻板块缩略图尺寸
    function fixNewsImageSizes() {
        const newsSection = document.getElementById('news');
        if (newsSection) {
            const images = newsSection.querySelectorAll('img');
            images.forEach(function(img) {
                // 移除内联的width和height属性
                img.removeAttribute('width');
                img.removeAttribute('height');
                
                // 添加CSS类来应用新的样式
                img.classList.add('news-thumbnail');
                
                // 直接设置样式属性
                img.style.width = '350px';
                img.style.height = '250px';
                img.style.minWidth = '350px';
                img.style.minHeight = '250px';
                img.style.maxWidth = '350px';
                img.style.maxHeight = '250px';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '12px';
                img.style.flexShrink = '0';
                img.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                img.style.display = 'block';
                img.style.margin = '0';
                img.style.padding = '0';
            });
        }
    }
    
    // 页面加载完成后立即执行
    fixNewsImageSizes();
    
    // 监听动态内容变化（如果有Ajax加载）
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                fixNewsImageSizes();
            }
        });
    });
    
    // 开始观察
    const newsSection = document.getElementById('news');
    if (newsSection) {
        observer.observe(newsSection, {
            childList: true,
            subtree: true
        });
    }
    
    // 窗口大小变化时重新应用样式
    window.addEventListener('resize', function() {
        setTimeout(fixNewsImageSizes, 100);
    });
});

// 为新闻图片添加额外的CSS类
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .news-thumbnail {
            width: 350px !important;
            height: 250px !important;
            min-width: 350px !important;
            min-height: 250px !important;
            max-width: 350px !important;
            max-height: 250px !important;
            object-fit: cover !important;
            border-radius: 12px !important;
            flex-shrink: 0 !important;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
            display: block !important;
            margin: 0 !important;
            padding: 0 !important;
        }
        
        @media (max-width: 768px) {
            .news-thumbnail {
                width: 100% !important;
                max-width: 400px !important;
                height: 250px !important;
                margin: 0 auto 1rem auto !important;
            }
        }
        
        @media (max-width: 480px) {
            .news-thumbnail {
                height: 200px !important;
                max-width: 350px !important;
            }
        }
    `;
    document.head.appendChild(style);
});
