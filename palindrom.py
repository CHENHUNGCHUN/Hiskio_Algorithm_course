def palindrome(strings):
    left = 0
    right = len(x)-1
    while(left < right):
        if (x[right] != x[left]):
            return False
        else:
            left += 1
            right -= 1
    return True


if __name__ == '__main__':
    x = "amanaplanacanalpanama"
    print(palindrome(x))

