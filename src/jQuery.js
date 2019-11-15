window.$ = window.jQuery = function(selectorOrArray) {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  const api = Object.create($.prototype); //把$的__proto__ 指向了$.prototype
  //api是一个对象，可以操纵元素elements
  Object.assign(api, { elements: elements, oldApi: selectorOrArray.oldApi });
  //单独为api创建一个elements属性，它的值是elements变量
  //api.elements = elements
  //api.oldApi = selectorOrArray.oldApi
  return api;
};

$.prototype = {
  constructor: $,
  addClass(className) {
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className);
    }
    //api.addClass()相当于 api.addClass.call(api),所以这里的this就是api
    return this;
  },
  find(selector) {
    let arr = [];
    for (let i = 0; i < this.elements.length; i++) {
      arr = arr.concat(Array.from(this.elements[i].querySelectorAll(selector)));
    }
    arr.oldApi = this; //把上一个api放到数组里，此时this是 旧的 api1
    return jQuery(arr);
  },
  end() {
    return this.oldApi; //此时this是 新的 api2
  },
  each(fn) {
    for (let i = 0; i < this.elements.length; i++) {
      fn.call(undefined, this.elements[i], i);
    }
    return this;
  },
  parent() {
    const arr = [];
    this.each(node => {
      if (arr.indexOf(node.parentNode) === -1) {
        arr.push(node.parentNode);
      }
    });
    return jQuery(arr);
  },
  children() {
    const arr = [];
    this.each(node => {
      arr.push(...node.children);
    });
    return jQuery(arr);
  },
  print() {
    console.log(this.elements);
  }
};
