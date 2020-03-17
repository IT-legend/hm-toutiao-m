// 专门处理token的读写和删除by LaoW
const USER_TOKEN = '94-hm-toutiao-m' // 专门用来存储用户信息
// 第一个方法：设置用户的token信息
export function setUser (user) {
  // user应该是一个对象
  window.localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}
// 第二个方法：获取用户token信息
export function getUser () {
  // user应该是一个对象
  return JSON.parse(window.localStorage.getItem(USER_TOKEN) || '{}') // 短路表达式，前面为true后面不执行，前面false后面才执行
}
// 第三个方法：删除用户token信息
export function delUser () {
  // user应该是一个对象
  localStorage.removeItem(USER_TOKEN)
}
