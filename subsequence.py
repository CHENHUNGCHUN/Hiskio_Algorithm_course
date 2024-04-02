#subsequence 是指string2 刪除某些字元後 會等於string1 (注意順序要一樣)



def subsequence(string1,string2):
    if string1 == "":
        return True
    l = 0
    r = 0
    while(r <= len(string2)-1):
        if string1[l] == string2[r]:
            l += 1
            r += 1
            if(l > len(string1)-1):
                return True
        else :
            r += 1
    return False
        
if __name__ == '__main__':
    
    """
    string1 = "book"
    string2 = "brooklyn"

    string1 = "hello"
    string2 = "hello Dear"

    string1 = "abc"
    string2 = "bac"

    string1 = "abc"
    string2 = "abc"
    """

    string1 = "hello"
    string2 = "hello Dear"

    print(subsequence(string1,string2))