arr = [15,669,45,51,848,6,21,48,954,877,32,54,65,3345,31,248,35,8,9999]

def bubble_sort(arr:list)->list:
    for j in range(0,len(arr),1):
        for i in range(len(arr)-1,j,-1):
            if arr[i] < arr[i-1]:
                arr[i] ,arr[i-1] = arr[i-1],arr[i]
bubble_sort(arr)
print(arr)