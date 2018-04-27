const arrayProto = Array.prototype
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
const arrayMethods = Object.create(arrayProto)

methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  Object.defineProperty(arrayMethods, method, {
    configurable: true,
    emunerable: true,
    writable: true,
    value: function () {
      console.log(arguments)
      var args = Array.prototype.slice.call(arguments);
      const result = original.apply(this, args)

      console.log('method: %s', method)
      return result;
    }
  })
})

function Observer (data) { 

  for(key in data) {
  	let val = data[key];
    if (Array.isArray(val)) {
      val.__proto__ = arrayMethods
      observer(val)
    }
  	const dep = new Subject();
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get () { //懒注册
      	console.log('get:', key)
      	dep.depend();
        return val;
      },
      set (newVal) {
      	console.log('newVal:', newVal)
      	if (newVal === val) {
          return ;
      	}
      	val = newVal;
        dep.notify();
      }
    })
  }
}
function observer (data) {
	return new Observer(data)
}
function Watcher (vm, fn) { //观察者(数据就是观察者)
  const self = this;
  this.vm = vm;
  Subject.target = this;

  this.addSubject = function(sub) { //绑定主题和观察者
    sub.addSub(self)
  }

  this.update = function() { //主题变更之后触发
  	fn();
  }

  this.value = fn(); //初次触发
  Subject.target = null; //防止重复添加
}
const Subject = function () {
  const self = this;
  this.subs = [];
  this.target = null;
  this.depend = function() {
  	console.log('depend:', !!Subject.target)
  	if (Subject.target) {
  		// Subject.target.addSubject(self)
  		self.addSub(Subject.target)
  	}
  }


  this.addSub = function(sub) { //增加观察者
  	self.subs.push(sub)
  }

  this.notify = function() { //通知
  	console.log('subs:', self.subs.length)
  	for(var i = 0; i < self.subs.length; i++) {
  		this.subs[i].update.apply(null)
  	}
  }
}
const Vue = function (options) {
  const self = this;
  if (options && typeof options.data === 'function') {
    this._data = options.data.apply(this)
  }

  this.mount = function () {
  	new Watcher(self, self.render)
  }

  this.render = function () {
  	console.log('render')
  	with (self) {
      _data.text; //触发get,Subject绑定Watcher
  	}
  }

  observer(this._data)
}

var vue = new Vue({
  data: function () {
    return {
      text: []
    }
  }
})
vue.mount()
vue._data.text.push(1)
vue._data.text.push(2)