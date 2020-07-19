let arr = [];
for (let i = 0; i < 110; i++) {
    arr.push(i)

}
let getGroupAll = [];   //分为组的数据
let groupIndex=0;
let getGroupByone=[];
groupNumberBy20 = (arr) => {

    if (arr) {
        let group = Math.ceil(arr.length / 20)
        let cycleAll = group * 20
        let t = 0;
        //    let returnArr = [];
        if (group == 1) {
            return arr;
        } else {
            let tArr = [];
            for (let i = 0; i < cycleAll; i++) {
                const item = arr[i];
                //每次超过20 就放一个数组

                if (i < (group - 1) * 20) {
                    tArr.push(item);
                    if (tArr.length == 20) {
                        getGroupAll.push(tArr);
                        tArr = [];
                        t++;
                    }
                }
                if (i >= (group - 1) * 20 && i < arr.length) {
                    console.log(item)
                    tArr.push(item)
                    if (i == arr.length - 1) {
                        getGroupAll.push(tArr)
                        return
                    }
                }


            }
        }
    } else {
        if(groupIndex==getGroupAll.length){
            return
        }
        getGroupByone=[...getGroupByone,...getGroupAll[groupIndex]]
        groupIndex++;
    }

}
   groupNumberBy20(arr)
   let arrFirst=groupNumberBy20();
  console.log(getGroupByone);