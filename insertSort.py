arr = [15,669,45,51,848,6,21,48,954,877,32,54,65,3345,31,248,35,8,9999]

def insertSort(arr):
    for i in range(1,len(arr),1):
        while (i > 0 and arr[i] < arr[i-1]):
            arr[i],arr[i-1] = arr[i-1], arr[i]
            i -= 1

if __name__ == '__main__':
    insertSort(arr)
    print(arr)