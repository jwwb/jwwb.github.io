	/**
	 * 标签单击事件的回调函数
	 * @param node - 调用节点（标签）
	 */
	function clickTab(node) {
	  node.classList.add('active');
	  for (const tab of document.getElementsByClassName('tab')) {
		if (tab.id === 0) {
				tab.classList.add('active');
		}
		else if (tab.id !== node.id) {
	      tab.classList.remove('active');
	    }
	  }
	}