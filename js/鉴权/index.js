// vue3在对VisualDOM做patch操作的时候竟然也使用了位运算进行flag的判断
//使用“|”来进行组合赋值，使用“&”来进行检查
export const enum ShapeFlags { // vue3形状标识
    ELEMENT = 1,                   // HTML 或 SVG 标签 普通 DOM 元素 1
    FUNCTIONAL_COMPONENT = 1 << 1, // 函数式组件 2
    STATEFUL_COMPONENT = 1 << 2,   // 普通有状态组件 4
    TEXT_CHILDREN = 1 << 3,        // 子节点是纯文本 8
    ARRAY_CHILDREN = 1 << 4,       // 子节点是数组 16
    // ... 
  }
  // 每个虚拟节点都有标识(flag)
  // 位或(|)运算 
  // vnode.shapFlag =  element | ShapeFlags.TEXT_CHILDREN // 9
  //00000001
  //00001000
  //    1001
  // 位与(&)运算
  // shapFlag & ARRAY_CHILDREN （判断是否包含数组类型）
  //00010000
  //00001001
  //00000000 > 0 说明不包含数组类型


  // 可做 权限组合

const Permissions = {
	X: 1,
	W: 1 << 1, // 0010 -> 2
	R: 1 << 2, // 0100 -> 4
};

let userPermission = 0; // 初始为0，即无权限

/** 赋权 */
userPermission |= Permissions.X; // 赋予可执行权限，此时 userPermission 为 0001
userPermission |= Permissions.W; // 赋予写权限，此时 userPermission 为 0011

/** 鉴权 */
if ( userPermission & Permissions.X ) { // 0011 & 0001 结果为1，返回真
	console.log('此用户有可执行权限');
}
if ( userPermission & Permissions.W ) { // 0011 & 0010 结果为2，返回真
	console.log('此用户有写权限');
}
if ( userPermission & Permissions.R ) { // 0011 & 0100 结果为0，返回假
	console.log('此用户有读权限');
}


  
  

  