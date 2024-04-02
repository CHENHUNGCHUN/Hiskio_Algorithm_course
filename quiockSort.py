def quickSort(l:int,r:int)->list:
    if l < r:
        q = partition(l,r)
        quickSort(l,q-1)
        quickSort(q+1,r)


def partition(l:int,r:int)->int:
    pivot = arr[r]
    x = l-1
    for i in range(l,r-1,1):
        if arr[i] < pivot:
            x += 1
            arr[i],arr[x] = arr[x],arr[i]
    pivot,arr[x+1] = arr[x+1],pivot

    return x + 1


if __name__ == '__main__':
    arr = [15,669,45,51,848,6,21,48,954,877,32,54,65,3345,31,248,35,8,9999]
    quickSort(0,len(arr)-1)
    print(arr)
