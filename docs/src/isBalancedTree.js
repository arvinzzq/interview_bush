/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function (node) {
    const height = calcHeight(node);
    return height !== -1;
};

function calcHeight(node) {
    if (!node) {
        return 0;
    }
    const leftHeight = calcHeight(node.left);
    if (leftHeight === -1) {
        return -1;
    }
    const rightHeight = calcHeight(node.right);
    if (rightHeight === -1 || (rightHeight !== -1 && Math.abs(leftHeight - rightHeight) > 1)) {
        return -1;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// [1,2,2,3,3,null,null,4,4]
/**
 *                    1
 *              2            2
 *        3          3
 *    4        4
 */
const root1 = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3,
            left: {
                val: 4,
            },
            right: {
                val: 4,
            }
        },
        right: {
            val: 3,
        }
    },
    right: {
        val: 2,
    },
};

console.log(isBalanced(root1));

const root2 = {
    val: 1,
    right: {
        val: 2,
        right: {
            val: 3,
        }
    }
}

console.log(isBalanced(root2));