def intToRoman(num):
    symbolMap={
        1:"I",
        4:"IV",
        5:"V",
        9:"IX",
        10:"X",
        40:"XL",
        50:"L",
        90:"XC",
        100:"C",
        400:"CD",
        500:"D",
        900:"CM",
        1000:"M"
    }
    dict(sorted(symbolMap.items()))
    print(symbolMap)
    def divie(num,res):
        if(num in symbolMap):
            print("res111", res + symbolMap[num])
            return res + symbolMap[num]
        div=0
        print("num", num)
        for i in symbolMap.keys():
            print("i",i)
            if(num < i): break
            div=i
        print("div", div)
        res = res + symbolMap[div]*(num//div)
        print("res", res)
        remainder = num%div
        # 注意remainder为0的情况
        if remainder == 0:
            return res
        else:
            return divie(remainder, res)
    return divie(num,'')

x=499
print("final", intToRoman(x))

