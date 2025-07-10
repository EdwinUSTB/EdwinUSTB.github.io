// NJU-LINK Lab Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchForms = document.querySelectorAll('.search-form');
  
  searchForms.forEach(form => {
    const searchInput = form.querySelector('.search-input');
    const searchBtn = form.querySelector('.btn-search');
    
    // 搜索提交处理
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      
      if (query) {
        performSearch(query);
      }
    });
    
    // 实时搜索建议（可选）
    searchInput.addEventListener('input', function() {
      const query = this.value.trim();
      if (query.length >= 2) {
        showSearchSuggestions(query);
      } else {
        hideSearchSuggestions();
      }
    });
  });
  
  // 执行搜索
  function performSearch(query) {
    console.log('搜索查询:', query);
    
    // 这里可以实现实际的搜索逻辑
    // 可以搜索页面内容、文章、人员等
    searchInPage(query);
  }
  
  // 页面内搜索
  function searchInPage(query) {
    // 清除之前的高亮
    clearHighlights();
    
    // 搜索并高亮匹配内容
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      if (node.textContent.toLowerCase().includes(query.toLowerCase())) {
        textNodes.push(node);
      }
    }
    
    // 高亮匹配的文本
    textNodes.forEach(textNode => {
      const parent = textNode.parentNode;
      if (parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE') {
        highlightText(textNode, query);
      }
    });
    
    // 显示搜索结果
    if (textNodes.length > 0) {
      showSearchResults(textNodes.length, query);
      // 滚动到第一个匹配项
      const firstHighlight = document.querySelector('.search-highlight');
      if (firstHighlight) {
        firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      showNoResults(query);
    }
  }
  
  // 高亮文本
  function highlightText(textNode, query) {
    const text = textNode.textContent;
    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    const highlightedText = text.replace(regex, '<span class="search-highlight">$1</span>');
    
    if (highlightedText !== text) {
      const wrapper = document.createElement('span');
      wrapper.innerHTML = highlightedText;
      textNode.parentNode.replaceChild(wrapper, textNode);
    }
  }
  
  // 清除高亮
  function clearHighlights() {
    const highlights = document.querySelectorAll('.search-highlight');
    highlights.forEach(highlight => {
      const parent = highlight.parentNode;
      parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
      parent.normalize();
    });
    
    // 移除搜索结果提示
    const resultMsg = document.querySelector('.search-result-message');
    if (resultMsg) {
      resultMsg.remove();
    }
  }
  
  // 显示搜索结果
  function showSearchResults(count, query) {
    const message = document.createElement('div');
    message.className = 'search-result-message alert alert-info';
    message.innerHTML = `找到 <strong>${count}</strong> 个包含 "<strong>${query}</strong>" 的结果`;
    
    // 添加关闭按钮
    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn-close';
    closeBtn.setAttribute('aria-label', '关闭');
    closeBtn.addEventListener('click', clearHighlights);
    message.appendChild(closeBtn);
    
    document.body.insertBefore(message, document.body.firstChild);
    
    // 自动消失
    setTimeout(() => {
      if (message.parentNode) {
        message.remove();
      }
    }, 5000);
  }
  
  // 显示无结果
  function showNoResults(query) {
    const message = document.createElement('div');
    message.className = 'search-result-message alert alert-warning';
    message.innerHTML = `未找到包含 "<strong>${query}</strong>" 的内容`;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn-close';
    closeBtn.setAttribute('aria-label', '关闭');
    closeBtn.addEventListener('click', () => message.remove());
    message.appendChild(closeBtn);
    
    document.body.insertBefore(message, document.body.firstChild);
    
    setTimeout(() => {
      if (message.parentNode) {
        message.remove();
      }
    }, 3000);
  }
  
  // 搜索建议（可以扩展）
  function showSearchSuggestions(query) {
    // 这里可以实现搜索建议功能
    console.log('搜索建议:', query);
  }
  
  function hideSearchSuggestions() {
    // 隐藏搜索建议
  }
  
  // 转义正则表达式特殊字符
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
});
