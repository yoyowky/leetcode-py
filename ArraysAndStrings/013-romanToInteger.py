# hashmap 
# 注意： 最后的字符串一定是由大到小排列，如果是由小到大，说明是 4， 40，400那种情况， 可比较两位大小判定
def romanToInt(s):
    symbolMap={
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    res = 0
    for i in range(len(s)):
        if i == len(s)-1:
            return res + symbolMap[s[i]]
        if(symbolMap[s[i]]>=symbolMap[s[i+1]]):
            res = res + symbolMap[s[i]]
        else:
            res = res - symbolMap[s[i]]
    return res

print(romanToInt("CDXCIV"))



# # 3 hashmap
# def romanToInt(s):
#     map={
#     "V":"I",
#     "X":"I",
#     "L":"X",
#     "C":"X",
#     "D":"C",
#     "M":"C"
#     }
#     symbolMap={
#         "I":1,
#         "V":5,
#         "X":10,
#         "L":50,
#         "C":100,
#         "D":500,
#         "M":1000
#     }
#     newMap={}
#     for i in range(len(s)):
#         if i == len(s) - 1:
#             if s[i] not in newMap:
#                 newMap[s[i]]=1
#             else:
#                 newMap[s[i]]+=1
#             break
#         print("i",i)
#         if s[i] not in newMap:
#             newMap[s[i]]=0
#         print("ori new map", newMap)
#         if(s[i+1] in map and map[s[i+1]] == s[i]):
#             print("if")
#             newMap[s[i]]-=1
#         else:
#             print("else")
#             newMap[s[i]]+=1
#         print("new map", newMap)
#     print(newMap)
#     res=0
#     for k in newMap:
#         res = res + symbolMap[k]*newMap[k]
#     return res


# print(romanToInt("IV"))

