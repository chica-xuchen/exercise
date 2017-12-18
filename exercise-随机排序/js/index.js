window.onload=function(){
	//获取元素
	let list=document.querySelector('.list');
	let span=document.querySelectorAll('span');

	
//	//遍历所有数据
//	for(let i=0;i<data.length;i++){
//		let li=document.createElement('li');//创建一个li
//		
//		let img=document.createElement('img');//创建一个图片节点
//		img.src=data[i].url;//获取每个图片位置
//		
//		let text=document.createElement('p');//创建一个p元素，存放text
//		text.innerText=data[i].text;//获取每个p的文本
//		
//		li.appendChild(img);
//		li.appendChild(text);
//		
//		list.appendChild(li);//把li加到list中
//	}

	let arr=[];//定义一个空数组为拿数据的下标
	
	//遍历数据
	for(var i=0;i<data.length;i++){
		list.innerHTML+='<li>'+'<img src="'+data[i].url+'"/>'+'<p>'+data[i].text+'</p>'+'</li>'
		arr.push(i)
	}

	console.log(arr);
	
	let img=list.getElementsByTagName('img');
	let text=list.getElementsByTagName('p')
	
	//从小到大
	span[0].onclick=function(){
		span[1].className=" ";
		
		arr.sort(function(a,b){
			return a-b;
		})
		for(var i=0;i<arr.length;i++){
			img[i].src=data[arr[i]].url;
			text[i].innerText=data[arr[i]].text;
		}
		span[0].className="active";
	}
//	
	//打乱顺序
	span[1].onclick=function(){
		span[0].className=" ";
		arr.sort(function(){
			return Math.random()-0.5;
		})
		
		for(var i=0;i<arr.length;i++){
			img[i].src=data[arr[i]].url;
			text[i].innerText=data[arr[i]].text;
		}
		span[1].className="active";
	}
	
}
