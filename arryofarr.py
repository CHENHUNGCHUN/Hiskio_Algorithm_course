arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]
result = []

def arryofarry(arr:list)->list:
    for i in range(0,len(arr),1):
        if type(arr[i]) == list:
            arryofarry(arr[i])
        else:
            result.append(arr[i])

arryofarry(arrs)
print(result)