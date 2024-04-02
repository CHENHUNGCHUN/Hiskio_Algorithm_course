def partition(l:int,r:int)->int:
    pivot = arr[r] #基準值
    x = l-1 #左邊從 l的左邊一個開始
    for j in range(l,r,1):
        if arr[j] < pivot: #比基準值小的通通跟目前的 x + 1交換 (不過下面會先+1 所以x 不用再+1了)
            x += 1
            arr[j],arr[x] = arr[x],arr[j]
    arr[r],arr[x+1] = arr[x+1],arr[r] #記得不要用pivot 要用arr[r]
    return x + 1

def qucksort(l:int,r:int):
    if l < r:
        q = partition(l,r)
        qucksort(l,q-1)
        qucksort(q+1,r)


if __name__ == '__main__':
    arr = [15,669,45,51,848,6,21,48,954,877,32,54,65,3345,31,248,35,8,9999]
    qucksort(0,len(arr)-1)
    print(arr)
