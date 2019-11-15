// const api = jQuery(".test"); //不返回元素，返回一个可以操作元素的api
// api.addClass("red").addClass("blue"); //链式操作

// const x1 = jQuery(".test").find(".child");
// console.log(x1);

// jQuery(".test")
//   .find(".child")
//   .addClass("blue")
//   .addClass("green");

const api1 = jQuery(".test");
const api2 = api1
  .find(".child")
  .addClass("blue")
  .addClass("green");
const oldApi = api2.end().addClass("yellow");

const x = jQuery(".test").find(".child");
x.each(div => {
  console.log(div);
});

const x2 = jQuery(".test");
x2.parent().print();

const x3 = jQuery(".test");
x3.children().print();

const x4 = $(".test");
x4.print();
