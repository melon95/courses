const vm = require('vm')


const user = {
  name: 'template'
}

const context = {
  include(name) {
    return vm.runInNewContext(templateMap[name], ctx)
  },
}

const templateMap = {
  a: "`从a引入了${include('b')()}`",
  b: '`b的内容`'
}
const ctx = vm.createContext(context)
console.log(vm.runInNewContext("`从a引入了${include('b')}`", context))