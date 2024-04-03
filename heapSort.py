def heapsort():
    buidmaxheap()
    for i in range(len(arr)-1,-1,-1):
        arr[0] ,arr[i] =arr[i],arr[0]
        maxheapify(0,i-1) #每循環一次,因為最後一個元素不再進行maxheapify(最大值),所以每次長度都固定少一

def buidmaxheap():
    for i in range((len(arr)-1)//2,0-1,-1):
        maxheapify(i,(len(arr)-1)) #len(arr)-1純粹是讓maxheapify的 l 跟r限定在list內


def maxheapify(n,arr_langh):
    largest = None
    l = n*2 +1 
    r = n*2 +2
    if (l <= arr_langh) and (arr[l] > arr[n]):
        largest = l
    else:
        largest = n
    if (r <= arr_langh) and arr[r] > arr[largest]:
        largest = r
    if n != largest:
        tmp = arr[n]
        arr[n] = arr[largest]
        arr[largest] = tmp
        maxheapify(largest,arr_langh)


if __name__ == '__main__':
    arr = [15,669,45,51,848,6,21,48,954,877,32,54,65,3345,31,248,35,8,9999]
    heapsort()
    print(arr)
