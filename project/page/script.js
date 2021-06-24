const students = [
    { id: 1, name: '张三', phone: '1308908000', gender: '男', email: 'abc@qq.com' },
    { id: 2, name: '张三风', phone: '13089089093', gender: '男', email: 'iopfe@qq.com' },
    { id: 3, name: '唐昊', phone: '13089089093', gender: '男', email: '2bvefe3@qq.com' },
    { id: 4, name: '唐三', phone: '13089089093', gender: '男', email: '23@qq.com' },
    { id: 5, name: '菊花关', phone: '13089089093', gender: '女', email: 'nbv67@126.com' },
    { id: 6, name: '柳岩', phone: '13089089093', gender: '女', email: '23@163.com' },
    { id: 7, name: '刘德华', phone: '13089089093', gender: '男', email: '23iuy@qq.com' },
    { id: 8, name: '张学友', phone: '13089089093', gender: '男', email: '23fe@qq.com' },
    { id: 9, name: '李易峰', phone: '1308765093', gender: '男', email: '23nbv@qq.com' },
    { id: 10, name: '胡汉三', phone: '13089089093', gender: '女', email: 'a6723@qq.com' },
    { id: 11, name: '黄晓明', phone: '13080009093', gender: '男', email: '3fgb23@qq.com' },
    { id: 12, name: '赵薇', phone: '13089089093', gender: '女', email: '2afe3@gmail.com' },
    { id: 13, name: '赵紫阳', phone: '13089089093', gender: '男', email: 'afe23@126.com' },
    { id: 14, name: '罗三胖', phone: '13089089093', gender: '女', email: '2eef3@263.com' },
    { id: 15, name: '张学友', phone: '13089089093', gender: '男', email: '2aa3@qq.com' },
    { id: 16, name: '沈剑心', phone: '13089089093', gender: '男', email: '2fff3@qq.com' },
    { id: 17, name: '陈晓春', phone: '13089089093', gender: '男', email: '23@qq.com' },
    { id: 18, name: '鲁班', phone: '13089089093', gender: '女', email: '2fege3@qq.com' },
    { id: 19, name: '曹操', phone: '13089089093', gender: '男', email: 'afefe23@126.com' },
    { id: 20, name: '亚瑟', phone: '13089089093', gender: '男', email: '2fa3@yt.com' },
    { id: 21, name: '狄仁杰', phone: '13089089093', gender: '男', email: '23@qq.com' },
    { id: 22, name: '铠', phone: '13089089093', gender: '男', email: 'bbbbb23@qq.com' },
    { id: 23, name: '貂蝉', phone: '13089089093', gender: '女', email: 'mmm23@qq.com' },
    { id: 24, name: '吕布', phone: '13089089093', gender: '男', email: 'fefe23@qq.com' },
    { id: 25, name: '张飞', phone: '13089089093', gender: '男', email: 'aaa23@qq.com' },
    { id: 26, name: '关于', phone: '13089089093', gender: '男', email: 'eee23@qq.com' },
    { id: 27, name: '诸葛亮', phone: '13089089093', gender: '男', email: 'afe23@qq.com' },
    { id: 28, name: 'AngelBaby', phone: '13089089093', gender: '女', email: '23@qq.com' },
    { id: 29, name: '小舞', phone: '13089089093', gender: '女', email: '265553@qq.com' },
    { id: 30, name: '斗罗', phone: '13089089093', gender: '男', email: '297773@qq.com' },
    { id: 31, name: '景甜', phone: '13089089093', gender: '女', email: '23@qq.com' },
    { id: 32, name: '陈好', phone: '13089089093', gender: '女', email: '25tt3@qq.com' },
    { id: 33, name: '温碧霞', phone: '13089089093', gender: '女', email: '23@qq.cn' },
    { id: 34, name: '汪涵', phone: '13089089093', gender: '男', email: '2563@qq.com' },
    { id: 35, name: '谢娜', phone: '13089089093', gender: '女', email: '2323@qq.com' },
    { id: 36, name: '何炅', phone: '13089089093', gender: '男', email: '2ty3@qq.com' },
    { id: 37, name: '欧弟', phone: '13089089093', gender: '男', email: 'av23@sina.com' },
    { id: 38, name: '陈小春', phone: '13089089093', gender: '男', email: 'nb23@gmail.com' },
    { id: 39, name: '景甜', phone: '13089089093', gender: '女', email: '23@qq.com' },
    { id: 40, name: '景甜', phone: '13089089093', gender: '女', email: '23@qq.com' },
    { id: 41, name: '陈好', phone: '13089089093', gender: '女', email: '25tt3@qq.com' },
    { id: 42, name: '温碧霞', phone: '13089089093', gender: '女', email: '23@qq.cn' },
    { id: 43, name: '汪涵', phone: '13089089093', gender: '男', email: '2563@qq.com' },
    { id: 44, name: '谢娜', phone: '13089089093', gender: '女', email: '2323@qq.com' },
    { id: 45, name: '何炅', phone: '13089089093', gender: '男', email: '2ty3@qq.com' },
    { id: 46, name: '欧弟', phone: '13089089093', gender: '男', email: 'av23@sina.com' },
    { id: 47, name: '陈小春', phone: '13089089093', gender: '男', email: 'nb23@gmail.com' },
    { id: 48, name: '景甜', phone: '13089089093', gender: '女', email: '23@qq.com' }
];
const size = students.length;
const amountPerPage = 5;
const page = Math.ceil(size/amountPerPage);
let arrstr = [];
for(let i=1; i<=page; i++){
    arrstr.push(i);
}
let str = "";
let newarr = [];
let boxdata = document.querySelector(".boxdata");
// 初始化
let Pagination = () => {
    for(let i= 0;i<amountPerPage;i++){
        str += `
            <tr class="otr">
            <th>${students[i].id}</th>
            <th>${students[i].name}</th>
            <th>${students[i].phone}</th>
            <th>${students[i].gender}</th>
            <th>${students[i].email}</th>
            </tr>
            <hr>
            `;
        boxdata.innerHTML = str
    }
}
Pagination();

//创建分页导航
arrstr.forEach((value, index) => {
    let oli = document.createElement("li");
    oli.innerHTML = value
    oli.setAttribute("class", "olis");
    document.querySelector(".pageable").append(oli);
})
// 实时生成数据
// (1-1*10) <==思路
document.querySelector(".pageable").addEventListener("click", function (e) {
    e = e || window.event;
    target = e.target || e.srcElement;
    str = " ";
    if(target.nodeName.toLowerCase() =="li"){
        console.log(e.target);
        let targetnum = parseInt(e.target.innerHTML);
        console.log((targetnum) * amountPerPage);
        for (let i = (targetnum-1)*amountPerPage; i < (targetnum) * amountPerPage; i++) {
            console.log(students[i])
            str += `<tr class="otr">
                <th>${students[i].id}</th>
                <th>${students[i].name}</th>
                <th>${students[i].phone}</th>
                <th>${students[i].gender}</th>
                <th>${students[i].email}</th>
                </tr>
            <hr>
            `
            boxdata.innerHTML = str
        }

    }
});
