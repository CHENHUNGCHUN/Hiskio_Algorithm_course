#selectSort =>分為已排序(左)跟未排序(右) , 在未排序的array中選擇最小的, 換到已排序的最後面

arr = [15,669,45,51,848,6,21,48,954,877,32,54,65,3345,31,248,35,8,9999]

def selectSort(arr:list)->list:
    for i in range(0,len(arr)-1,1):
        min = float('inf')
        idx = None
        for j in range(i,len(arr),1):
            if arr[j] < min:
                min = arr[j]
                idx = j
        arr[i],arr[idx] = arr[idx],arr[i]


if __name__ == '__main__':
    selectSort(arr)
    print(arr)