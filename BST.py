class Node:
    def __init__(self,value:int):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None
        self.path = ""
        self.bftt = []

    def InsertTree(self,node:Node):
        x = self.root
        y = None
        while x != None:
            y = x
            if node.value < x.value:
                x = x.left
            else:
                x = x.right

        if y == None:
            self.root = node
        elif node.value < y.value:
            y.left = node
        else:
            y.right = node
    
    def preorder(self,node:Node):
        if node != None:
            self.path += str(node.value) + " "
            self.preorder(node.left)
            self.preorder(node.right)

    def inorder(self,node:Node):
        if node != None:
            self.inorder(node.left)
            self.path += str(node.value) + " "
            self.inorder(node.right)

    def posetorder(self,node:Node):
        if node != None:
            self.posetorder(node.left)
            self.posetorder(node.right)
            self.path += str(node.value) + " "

    def breadthFirst(self,node:Node):
        queue = []
        queue.append(node)
        while len(queue) != 0:
            currentNode = queue.pop(0)
            if currentNode.left != None :
                queue.append(currentNode.left)
            if currentNode.right != None:
                queue.append(currentNode.right)
            self.bftt.append(currentNode.value)

    def SearchTree(self,node:Node,key:int):
        if node== None or node.value == key:
            return node
        elif key > node.value:
            return self.SearchTree(node.right,key)
        elif key < node.value:
            return self.SearchTree(node.left,key)






bst = BinarySearchTree()
bst.InsertTree(Node(15))
bst.InsertTree(Node(6))
bst.InsertTree(Node(5))
bst.InsertTree(Node(1))
bst.InsertTree(Node(13))
bst.InsertTree(Node(-7))
bst.InsertTree(Node(3))


bst.posetorder(bst.root)
print(bst.path)


result2 = bst.SearchTree(bst.root, 33)
print(result2)



bst.breadthFirst(bst.root)
print(bst.bftt)