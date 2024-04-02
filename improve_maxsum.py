#連續n個數 ,加起來是最大值
arr = [2, 1, 7, 3, 7, 25, 6, 1, -5, 12, -11]

def maxSum(arr,n):
    tmpSum = 0
    for i in range(0,n,1):
        tmpSum += arr[i]

    max = tmpSum
    for j in range(n,len(arr),1):
        tmpSum = tmpSum + arr[j] - arr[j-n]

        max = tmpSum if tmpSum > max else max

    return max

if __name__ == '__main__':
    print(maxSum(arr, 6))


