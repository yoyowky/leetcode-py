# two pointer + hashmap

def lengthOfLongestSubstring(s):
    map = {}
    l = 0
    res = 0
    for i in range(len(s)):
        print('map', map)
        if(s[i] not in map):
            # if s[i] not in the map, put the key/value in
            map[s[i]]= i
        else:
            # if contain the element
            # check the left pointer compare with the map value
            l = max(map[s[i]]+1, l)
            # update the map value
            map[s[i]]= i
            print("l", l)
        res = max(res, i-l+1)
    return res

s = "abcabcbb"
print(lengthOfLongestSubstring(s))