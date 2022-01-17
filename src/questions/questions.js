export default [{
    id:0,
  question:"宣告變數的方法、型別有哪些?",
    options:[
      { id: 0, text:'var '},
      { id: 1, text:'let '},
      { id: 2, text:'const '},
      { id: 3, text: '以上皆是 ' },
    ]
  },{
    id:1,
  question:"什麼是jsonp?",
    options:[
      {id:0,text:'人名'},
      { id: 1, text:'跨域解決方案'},
      {id:2,text:'百貨'},
    ]
  },{
    id:2,
    question:"解釋什麼是 single page application？",
    options:[
      { id: 0, text:'網頁不需跳轉頁面就可以達到基本的建立、讀取、修改、刪除資料功能'},
      {id:1,text:'遊戲app'},
      {id:2,text:'單身狗俱樂部'},
    ]
  },{
    id:3,
    question:`var str= '10' \nvar num= 10  \nstr+num= ?`,
    options:[
      {id:0,text:' 20'},
      {id:1,text:'"1010"'},
      {id:2,text:'"20"'},
    ]
  },{
    id:4,
    question:`var foo = [];\nfoo.push(1);\nfoo.push(2);\nfoo.length=?`,
    options:[
      {id:0,text:'1'},
      {id:1,text:'2'},
      {id:2,text:'0'},
    ]
  },{
    id:5,
    question:`null、undefined和 undeclared變數之間有什麼差異？`,
    options:[
      { id: 0, text:'null 等於變數是「沒有」的值，本身等於有值了，這個值就叫「沒有」'},
      { id: 1, text:'undefined 變數是還沒賦予值'},
      { id: 2, text:'undeclared 是還沒有經過宣告的變數'},
      { id: 3, text: '上面就是答案' },
    ]
  }];