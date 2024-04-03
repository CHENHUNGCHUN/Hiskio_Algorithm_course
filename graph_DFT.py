class Node():
    def __init__(self,value):
        self.value = value
        self.visited = False
        self.neighbors = []

    def addNeighbors(self, neighbor):
        self.neighbors.append(neighbor)


A = Node('A')
B = Node('B')
C = Node('C')
D = Node('D')
E = Node('E')
F = Node('F')
G = Node('G')
H = Node('H')
I = Node('I')
J = Node('J')
K = Node('K')
L = Node('L')
M = Node('M')


A.addNeighbors(E)
A.addNeighbors(F)
B.addNeighbors(D) 
C.addNeighbors(D) 
D.addNeighbors(B) 
D.addNeighbors(C) 
D.addNeighbors(E) 
D.addNeighbors(I) 
E.addNeighbors(A) 
E.addNeighbors(D) 
E.addNeighbors(F) 
E.addNeighbors(I) 
F.addNeighbors(A) 
F.addNeighbors(E) 
F.addNeighbors(I) 
G.addNeighbors(H) 
G.addNeighbors(I) 
H.addNeighbors(G) 
H.addNeighbors(I) 
H.addNeighbors(L) 
I.addNeighbors(D) 
I.addNeighbors(E) 
I.addNeighbors(F) 
I.addNeighbors(G) 
I.addNeighbors(H)
I.addNeighbors(J)
I.addNeighbors(K)
I.addNeighbors(M)
J.addNeighbors(I)
J.addNeighbors(M)
K.addNeighbors(I) 
K.addNeighbors(L)
K.addNeighbors(M)
L.addNeighbors(H) 
L.addNeighbors(K) 
M.addNeighbors(I)
M.addNeighbors(J)
M.addNeighbors(K)

result = []


def DFT(node:Node): #深度優先(直接看相連的鄰居有沒有visite過)
    node.visited = True
    result.append(node.value)
    for i in range(0,len(node.neighbors),1):
        if node.neighbors[i].visited == False:
            DFT(node.neighbors[i])

DFT(A)
print(result)

