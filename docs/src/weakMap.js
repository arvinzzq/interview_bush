// WeakMap的Methods
// WeakMap.prototype.delete(key)
// WeakMap.prototype.get(key)
// WeakMap.prototype.has(key)
// WeakMap.prototype.set(key, value)
/**
 * A WeakMap is a collection of key/value pairs whose keys must be objects,
 * with values of any arbitrary JavaScript type, and which does not create
 * strong references to its keys.
 */

// WeakMap 实现私有变量
const myWm = new WeakMap();
class Fish {
    constructor(name) {
        myWm.set(this, { 
            _fishbone: ['草鱼', '鲫鱼', '青鱼', '鲤鱼', '鲢鱼', '鳙鱼', '鳊鱼', '翘嘴', '餐条'],
        });
        this.name = name;
    }

    isBone() {
        return myWm.get(this)._fishbone.includes(this.name);
    }
}

// 测试，买了两条鱼
let fish1 = new Fish('草鱼');
let fish2 = new Fish('回鱼');

// 返回 true，有刺
console.log(fish1.isBone());
// 返回 false，没有肌间刺
console.log(fish2.isBone());