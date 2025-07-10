// 修复新闻缩略图尺寸
document.addEventListener('DOMContentLoaded', function() {
    // 等待页面完全加载
    setTimeout(function() {
        // 查找所有新闻区域的图片
        const newsImages = document.querySelectorAll('.block-collection[id="news"] img');
        
        newsImages.forEach(function(img) {
            // 移除内联的width和height属性
            img.removeAttribute('width');
            img.removeAttribute('height');
            
            // 设置新的尺寸
            img.style.width = '350px';
            img.style.height = '250px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '12px';
            img.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            img.style.flexShrink = '0';
            img.style.display = 'block';
            img.style.margin = '0';
            img.style.padding = '0';
        });
        
        console.log('新闻缩略图尺寸已修复，共处理了', newsImages.length, '张图片');
    }, 500); // 延迟500ms确保DOM完全加载
});

// 监听动态内容变化（如果有的话）
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1) { // 元素节点
                    const images = node.querySelectorAll ? node.querySelectorAll('.block-collection[id="news"] img') : [];
                    images.forEach(function(img) {
                        img.removeAttribute('width');
                        img.removeAttribute('height');
                        img.style.width = '350px';
                        img.style.height = '250px';
                        img.style.objectFit = 'cover';
                        img.style.borderRadius = '12px';
                        img.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                        img.style.flexShrink = '0';
                    });
                }
            });
        }
    });
});

// 开始监听
if (document.querySelector('.block-collection[id="news"]')) {
    observer.observe(document.querySelector('.block-collection[id="news"]'), {
        childList: true,
        subtree: true
    });
}
