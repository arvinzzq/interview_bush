// 类的装饰器
@AddAge
class Person {
  
}
//这里的target就是类Person,参数只能有一个
function AddAge(target) {
  console.log(target);//[Function: Person]
  target.age=10;
}
//需要使用@ts-ignore不然无法通过预编译,即使装饰器是在编译时生效的
//@ts-ignore
console.log(Person.age);//10

// 类的属性的装饰器
class User {
  @readonly
  getName() {
    return "张三";
  }
}
/**
 *
 * @param target 类本身
 * @param name 装饰的属性(方法)名称
 * @param descriptor 属性(方法)的描述对象
 * @returns
 */
function readonly(target, name, descriptor) {
  console.log(target); //User {}
  console.log(name); //getName
  /**
   * {
   *  value: [Function: getName],
   *  writable: true,
   *  enumerable: false,
   *  configurable: true
   * }
   */
  console.log(descriptor);
  //使属性只读
  descriptor.writable = false;
  return descriptor;
}

// 参数装饰器

// 装饰器的执行顺序为，方法参数装饰器>方法装饰器>类装饰器，自右向左，自内而外

@ClassDecorator
@ClassDecorator2
class A {
  @MethodDecorator
  public add(@ParamsDecorator num1: number, @ParamsDecorator num2: number) {}
}

function ClassDecorator(target: any) {
  console.log("类装饰器");
}

function ClassDecorator2(target: any) {
  console.log("类装饰器2");
}

function MethodDecorator(target: any, method: string, descriptor: any) {
  console.log("方法装饰器");
}

function ParamsDecorator(target: any, method: string, paramIndex: number) {
  console.log("参数装饰器", paramIndex);
}
