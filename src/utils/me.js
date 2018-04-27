var arr = [1, 2, 3];

const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

const original = arrayProto['push']
Object.defineProperty(arrayMethods, 'push', {
    configurable: true,
    emunerable: true,
    writable: true,
    value: function () {
      var args = arguments.slice();
      const result = original.apply(this, args)

      console.log('push')
      return result;
    }
})
Array.prototype = arrayMethods;
console.dir(arrayMethods)
for (var i = 0; i < arr.length; i++) {
  var val = arr[i];

  Object.defineProperty(arr, i, {
    configurable: true,
    emunerable: true,
    set (newVal) {
      if (val === newVal) {
        return 
      }
  	  console.log('set %s', i)
      val = newVal
    },
    get () {
      console.log('get %s', i)
      return val;
    }
  })
}

arr.push(4)
console.log(arr[2])