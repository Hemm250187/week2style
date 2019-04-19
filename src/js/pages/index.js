define([
	'mui',
], function(mui) {
	function init() {
		// this.mui()
		read()
	}
	//读取
	function read() {
		mui.ajax("/cender", {
			success: (data) => {
				const list = document.querySelector(".list");
				list.innerHTML=rander(data.data)
			}
		})
	}
  //渲染
	function rander(data) {
      let str =data.map(file=>{
		 return `<div class="box">
		      <div class="left">
		          <h4>${file.title}</h4>
		          <p>${file.deps}</p>
		          <p>距结束 4天23小时59分</p>
		      </div>
		      <div class="right">
		          <img src="images/11075.jpg" alt="">
		      </div>
		  </div>`
	  }).join("")
	  return str
	}

	init()
	 mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
});
