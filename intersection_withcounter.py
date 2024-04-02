
def intersection(arr1:list ,arr2:list) ->list:
    concat_list = list(set(arr1)) + list(set(arr2))
    counter = {}
    result = []
    for i in range(0,len(concat_list),1):
        if concat_list[i] not in counter:
            counter[concat_list[i]] = 1
        else:
            counter[concat_list[i]] += 1
    for key,value in counter.items():
        if value > 1:
            result.append(key)
    return counter


if __name__ == '__main__':
    arr1 = [1, 2, 3, 7, 9, 19, 25]
    arr2 = [19, 5, 16, 10, 16, 92, 25, 9]

    x = intersection(arr1,arr2)
    print(x)

