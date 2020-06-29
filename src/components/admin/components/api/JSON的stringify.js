//JSON.stringify()  可以将js值转换为json字符串
//JSON.stringify(value,[replace],[space])
//value为转换的数据，必要
//replace：不必要，可以将转换的值进行操作，有数组和函数
        //数组：
//space：可选，对返回的JSON 文本添加缩进，空格和换行符

//用于格式json的值
// var str_json = JSON.stringify(data,null,'\t');
// console.log(str_json);


//挑选固定的属性
// var str_json = JSON.stringify(data,['name','sex'],'\t');
// console.log(str_json);
//===================

//JSON.parse()  用来解析JSON字符串，将JSON字符串转化为对象

JSON.parse(value,[revice])
//value  必要  即将转化的JSON字符串
//revice 可选 用来修改解析生成的原始值  可以是函数