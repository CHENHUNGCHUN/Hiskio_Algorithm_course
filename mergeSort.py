
def merge(left_arry,right_arry):
    result = []
    while (len(left_arry) > 0 and len(right_arry) > 0):
        if left_arry[0] > right_arry[0]:
           result.append(right_arry.pop(0)) 
        else:
            result.append(left_arry.pop(0))
    result = result + right_arry if len(right_arry) > 0 else result + left_arry
    return result

def mergesort(arry):
    if len(arry) == 1:
        return arry
    mid = len(arry)//2
    left_arry = arry[:mid]
    right_arry = arry[mid:]
    return merge(mergesort(left_arry),mergesort(right_arry))

if __name__ =='__main__':
    sortlist=[15,669,45,51,848,6,21,48,954,877,32,54,65,3345,31,248,35,8,518]
    print(mergesort(sortlist))