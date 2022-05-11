function toUpperCase(str){
    let num = Number(str)
    let arrs = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    let arrs1 = ['零', '十', '百', '千', '万']
    if (num.length < 2) {
      return arrs[num]
    } else {
      let nums = str.split('').map(e => Number(e))
      let final = nums.reduce((all, e, index) => {
        let restr = ''
        if (nums.length == 2 && index == 0 && e == 1) {
          //十位数为一
          restr = arrs1[nums.length - index - 1]
        } else if (index == nums.length - 1) {
          //个位数为零
          restr = e ? arrs[e] : ''
        } else {
          //中间数是否为零
          restr = e > 0 ? arrs[e] + arrs1[nums.length - index - 1] : '零'
        }

        all.push(restr)
        return all
      }, [])
      return final.join('')
    }
}
export {toUpperCase}