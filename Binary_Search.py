def merge(left_array,right_array):
    sorted_array = []
    while(len(left_array) > 0 and len(right_array) >0 ):
        if left_array[0] >= right_array[0]:
            sorted_array.append(right_array.pop(0))
        elif left_array[0] < right_array[0]:
            sorted_array.append(left_array.pop(0))
    sorted_array = sorted_array + left_array if len(left_array) else sorted_array + right_array
    return sorted_array

def mergesort(array):
    if len(array) == 1:
        return array
    middle = len(array)//2
    left_array = array[:middle]
    right_array = array[middle:]
    return merge(mergesort(left_array),mergesort(right_array))


def binary_search(low,top,data,key):
    if low > top :
        return 'Null'

    middle = (low + top)//2
    if key == data[middle]:
        return middle
    elif key < data[middle] :
        top = middle - 1
        return binary_search(low,top,data,key)
    elif key > data[middle]:
        low = middle + 1
        return binary_search(low,top,data,key)

if __name__ == '__main__': 
    data = [1, 9, 2, 7, 4, 10, 3, 8, 5, 6]
    data = mergesort(data)
    low = 0
    top = len(data) - 1
    x = binary_search(low,top,data,6)
    print(x)